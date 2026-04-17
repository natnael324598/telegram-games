import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";
import { flagGame, startflag, checkFlagAnswer } from "./flag.js";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const sessions = {};

const BOT_USERNAME = "Gamesgwgbot";

function avoidprivate(ctx) {
  if (ctx.chat.type === "private") {
    ctx.reply(
      "🎮 To play games, add me to a group!",
      Markup.inlineKeyboard([
        Markup.button.url(
          "➕ Add me to group",
          `https://t.me/${BOT_USERNAME}?startgroup=true`,
        ),
      ]),
    );
    return true;
  }
  return false;
}

bot.start((ctx) => {
  if (avoidprivate(ctx)) return;
  const chatId = ctx.chat.id;

  if (sessions[chatId]) {
    return ctx.reply("⚠️ A game is already in progress or waiting!", {
      reply_to_message_id: ctx.message.message_id,
    });
  }
  sessions[chatId] = {
    creatorId: ctx.from.id,
    players: [],
    gameStarted: false,
    selectedGame: null,
  };
  ctx.reply(
    `🎮 Choose a game:
    1. 🌍 Flags
    2. ⚽ Football Quiz
    3. 🎬 Guess the Movie

Type the number to select a game.`,
  );
});
bot.command("join", (ctx) => {
  const chatId = ctx.chat.id;
  const session = sessions[chatId];
  const user = ctx.from;

  // 1. Check if a game is even being set up
  if (!session) {
    return ctx.reply("❌ No active game. Type /start first.", {
      reply_to_message_id: ctx.message.message_id,
    });
  }

  // 2. Check if the game has already started (prevent late joins if you want)
  if (session.gameStarted) {
    return ctx.reply("⚠️ Sorry, the game has already started!", {
      reply_to_message_id: ctx.message.message_id,
    });
  }

  // 3. Prevent duplicate joins
  const alreadyJoined = session.players.some((p) => p.id === user.id);
  if (alreadyJoined) {
    return ctx.reply(`@${user.username}, you're already in!`);
  }

  // 4. Add the player to the list
  const name = user.first_name || user.username || "Player";

  session.players.push({
    id: user.id,
    name: name,
  });

  const mention = `<a href="tg://user?id=${user.id}">${name}</a>`;
  ctx.reply(`✅ ${mention} joined the game!`, {
    parse_mode: "HTML",
    reply_to_message_id: ctx.message.message_id,
  });
});
bot.command("startgame", (ctx) => {
    if (avoidprivate(ctx)) return;
  const chatId = ctx.chat.id;
  const session = sessions[chatId];
  const user = ctx.from;

  if (!session) {
    return ctx.reply("❌ No active game to close.", {
      reply_to_message_id: ctx.message.message_id,
    });
  }

  if (session.creatorId !== user.id) {
    return ctx.reply("🚫 Only the creator of the game can start it.", {
      reply_to_message_id: ctx.message.message_id,
    });
  }
  if (session.players.length === 0) {
    return ctx.reply("You need at least one player to join!", {
      reply_to_message_id: ctx.message.message_id,
    });
  }
  if (session.gameStarted) {
    return ctx.reply("⚠️ Game has already started.", {
      reply_to_message_id: ctx.message.message_id,
    });
  }

  
  if (session.players.length < 2) {
    return ctx.reply("⚠️ You need at least 2 players to start the game!", {
      reply_to_message_id: ctx.message.message_id,
    });
  }
  session.gameStarted = true;
  ctx.reply(
    `🔒 Game is now closed. ${session.players.length} players are ready to play!\n` +
      `👥 Players: ${session.players.map((p) => p.name).join(", ")}\n` +
      `🎮 Let the game begin!`,
  );

  // Route to the correct game logic
  if (session.selectedGame === "flags") {
    return startflag(ctx, session, sessions);
    // Note: You might want a specific 'start' function in flag.js 
    // to begin the questions now that the lobby is closed.
    return ctx.reply("🏁 All players ready? Let's go!");
  }
});
bot.command("killgame", async (ctx) => {
  if (avoidprivate(ctx)) return;

  const chatId = ctx.chat.id;
  const user = ctx.from;
  const session = sessions[chatId];

  if (!session) {
    return ctx.reply("❌ No game to kill.", {
      reply_to_message_id: ctx.message.message_id,
    });
  }

  // Only creator or admin can kill
  try {
    const member = await ctx.telegram.getChatMember(chatId, user.id);

    const isAdmin = ["administrator", "creator"].includes(member.status);
    const isCreator = session.creatorId === user.id;

    if (!isCreator && !isAdmin) {
      return ctx.reply(
        "🚫 Only the game creator or a group admin can kill the game.",
        {
          reply_to_message_id: ctx.message.message_id,
        },
      );
    }

    // Delete the session
    delete sessions[chatId];
    ctx.reply("💀 Game has been killed.", {
      reply_to_message_id: ctx.message.message_id,
    });
  } catch (err) {
    console.error(err);
    ctx.reply("⚠️ Failed to check permissions.", {
      reply_to_message_id: ctx.message.message_id,
    });
  }
});
bot.on("text", (ctx) => {
  const text = ctx.message.text;
  const chatId = ctx.chat.id;
  if (avoidprivate(ctx)) return;
  const session = sessions[chatId];
  if (!session) return;
  if (session.gameStarted && session.selectedGame === "flags") {
    const result = checkFlagAnswer(ctx, session, sessions);

  if (result?.gameOver) {
    delete sessions[chatId]; // ✅ safe here
  }

  return;
  }
  if (ctx.from.id !== session.creatorId) {
    return; // silently ignore others
  }
  if (session.gameStarted) return;
  if (text === "1") {
    session.selectedGame = "flags";
    session.gameStarted = false;
    return flagGame(ctx, session);
  }

  if (text === "2") {
    session.selectedGame = "football";
    session.gameStarted = false;
    return ctx.reply("⚽ Football Quiz coming soon...");
  }

  if (text === "3") {
    session.selectedGame = "movies";
    session.gameStarted = false;
    return ctx.reply("🎬 Movie game coming soon...");
  }
});

bot.launch();

const port = process.env.PORT || 3000;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Bot is running!");
    res.end();
  })
  .listen(port, () => {
    console.log(`Dummy server listening on port ${port}`);
  });
