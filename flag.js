const flagDictionary = [
  { name: "Afghanistan", emoji: "🇦🇫" },
  { name: "Aland Islands", emoji: "🇦🇽" },
  { name: "Albania", emoji: "🇦🇱" },
  { name: "Algeria", emoji: "🇩🇿" },
  { name: "American Samoa", emoji: "🇦🇸" },
  { name: "Andorra", emoji: "🇦🇩" },
  { name: "Angola", emoji: "🇦🇴" },
  { name: "Anguilla", emoji: "🇦🇮" },
  { name: "Antarctica", emoji: "🇦🇶" },
  { name: "Antigua and Barbuda", emoji: "🇦🇬" },
  { name: "Argentina", emoji: "🇦🇷" },
  { name: "Armenia", emoji: "🇦🇲" },
  { name: "Aruba", emoji: "🇦🇼" },
  { name: "Australia", emoji: "🇦🇺" },
  { name: "Austria", emoji: "🇦🇹" },
  { name: "Azerbaijan", emoji: "🇦🇿" },
  { name: "Bahamas", emoji: "🇧🇸" },
  { name: "Bahrain", emoji: "🇧🇭" },
  { name: "Bangladesh", emoji: "🇧🇩" },
  { name: "Barbados", emoji: "🇧🇧" },
  { name: "Belarus", emoji: "🇧🇾" },
  { name: "Belgium", emoji: "🇧🇪" },
  { name: "Belize", emoji: "🇧🇿" },
  { name: "Benin", emoji: "🇧🇯" },
  { name: "Bermuda", emoji: "🇧🇲" },
  { name: "Bhutan", emoji: "🇧🇹" },
  { name: "Bolivia", emoji: "🇧🇴" },
  { name: "Bosnia and Herzegovina", emoji: "🇧🇦" },
  { name: "Botswana", emoji: "🇧🇼" },
  { name: "Bouvet Island", emoji: "🇧🇻" },
  { name: "Brazil", emoji: "🇧🇷" },
  { name: "British Indian Ocean Territory", emoji: "🇮🇴" },
  { name: "British Virgin Islands", emoji: "🇻🇬" },
  { name: "Brunei", emoji: "🇧🇳" },
  { name: "Bulgaria", emoji: "🇧🇬" },
  { name: "Burkina Faso", emoji: "🇧🇫" },
  { name: "Burundi", emoji: "🇧🇮" },
  { name: "Cambodia", emoji: "🇰🇭" },
  { name: "Cameroon", emoji: "🇨🇲" },
  { name: "Canada", emoji: "🇨🇦" },
  { name: "Cape Verde", emoji: "🇨🇻" },
  { name: "Caribbean Netherlands", emoji: "🇧🇶" },
  { name: "Cayman Islands", emoji: "🇰🇾" },
  { name: "Central African Republic", emoji: "🇨🇫" },
  { name: "Chad", emoji: "🇹🇩" },
  { name: "Chile", emoji: "🇨🇱" },
  { name: "China", emoji: "🇨🇳" },
  { name: "Christmas Island", emoji: "🇨🇽" },
  { name: "Cocos (Keeling) Islands", emoji: "🇨🇨" },
  { name: "Colombia", emoji: "🇨🇴" },
  { name: "Comoros", emoji: "🇰🇲" },
  { name: "Congo - Brazzaville", emoji: "🇨🇬" },
  { name: "Congo - Kinshasa", emoji: "🇨🇩" },
  { name: "Cook Islands", emoji: "🇨🇰" },
  { name: "Costa Rica", emoji: "🇨🇷" },
  { name: "Croatia", emoji: "🇭🇷" },
  { name: "Cuba", emoji: "🇨🇺" },
  { name: "Curacao", emoji: "🇨🇼" },
  { name: "Cyprus", emoji: "🇨🇾" },
  { name: "Czechia", emoji: "🇨🇿" },
  { name: "Denmark", emoji: "🇩🇰" },
  { name: "Djibouti", emoji: "🇩🇯" },
  { name: "Dominica", emoji: "🇩🇲" },
  { name: "Dominican Republic", emoji: "🇩🇴" },
  { name: "Ecuador", emoji: "🇪🇨" },
  { name: "Egypt", emoji: "🇪🇬" },
  { name: "El Salvador", emoji: "🇸🇻" },
  { name: "Equatorial Guinea", emoji: "🇬🇶" },
  { name: "Eritrea", emoji: "🇪🇷" },
  { name: "Estonia", emoji: "🇪🇪" },
  { name: "Eswatini", emoji: "🇸🇿" },
  { name: "Ethiopia", emoji: "🇪🇹" },
  { name: "Falkland Islands", emoji: "🇫🇰" },
  { name: "Faroe Islands", emoji: "🇫🇴" },
  { name: "Fiji", emoji: "🇫🇯" },
  { name: "Finland", emoji: "🇫🇮" },
  { name: "France", emoji: "🇫🇷" },
  { name: "French Guiana", emoji: "🇬🇫" },
  { name: "French Polynesia", emoji: "🇵🇫" },
  { name: "French Southern Territories", emoji: "🇹🇫" },
  { name: "Gabon", emoji: "🇬🇦" },
  { name: "Gambia", emoji: "🇬🇲" },
  { name: "Georgia", emoji: "🇬🇪" },
  { name: "Germany", emoji: "🇩🇪" },
  { name: "Ghana", emoji: "🇬🇭" },
  { name: "Gibraltar", emoji: "🇬🇮" },
  { name: "Greece", emoji: "🇬🇷" },
  { name: "Greenland", emoji: "🇬🇱" },
  { name: "Grenada", emoji: "🇬🇩" },
  { name: "Guadeloupe", emoji: "🇬🇵" },
  { name: "Guam", emoji: "🇬🇺" },
  { name: "Guatemala", emoji: "🇬🇹" },
  { name: "Guernsey", emoji: "🇬🇬" },
  { name: "Guinea", emoji: "🇬🇳" },
  { name: "Guinea-Bissau", emoji: "🇬🇼" },
  { name: "Guyana", emoji: "🇬🇾" },
  { name: "Haiti", emoji: "🇭🇹" },
  { name: "Heard & McDonald Islands", emoji: "🇭🇲" },
  { name: "Honduras", emoji: "🇭🇳" },
  { name: "Hong Kong SAR China", emoji: "🇭🇰" },
  { name: "Hungary", emoji: "🇭🇺" },
  { name: "Iceland", emoji: "🇮🇸" },
  { name: "India", emoji: "🇮🇳" },
  { name: "Indonesia", emoji: "🇮🇩" },
  { name: "Iran", emoji: "🇮🇷" },
  { name: "Iraq", emoji: "🇮🇶" },
  { name: "Ireland", emoji: "🇮🇪" },
  { name: "Isle of Man", emoji: "🇮🇲" },
  { name: "Israel", emoji: "🇮🇱" },
  { name: "Italy", emoji: "🇮🇹" },
  { name: "Jamaica", emoji: "🇯🇲" },
  { name: "Japan", emoji: "🇯🇵" },
  { name: "Jersey", emoji: "🇯🇪" },
  { name: "Jordan", emoji: "🇯🇴" },
  { name: "Kazakhstan", emoji: "🇰🇿" },
  { name: "Kenya", emoji: "🇰🇪" },
  { name: "Kiribati", emoji: "🇰🇮" },
  { name: "Kosovo", emoji: "🇽🇰" },
  { name: "Kuwait", emoji: "🇰🇼" },
  { name: "Kyrgyzstan", emoji: "🇰🇬" },
  { name: "Laos", emoji: "🇱🇦" },
  { name: "Latvia", emoji: "🇱🇻" },
  { name: "Lebanon", emoji: "🇱🇧" },
  { name: "Lesotho", emoji: "🇱🇸" },
  { name: "Liberia", emoji: "🇱🇷" },
  { name: "Libya", emoji: "🇱🇾" },
  { name: "Liechtenstein", emoji: "🇱🇮" },
  { name: "Lithuania", emoji: "🇱🇹" },
  { name: "Luxembourg", emoji: "🇱🇺" },
  { name: "Macao SAR China", emoji: "🇲🇴" },
  { name: "Madagascar", emoji: "🇲🇬" },
  { name: "Malawi", emoji: "🇲🇼" },
  { name: "Malaysia", emoji: "🇲🇾" },
  { name: "Maldives", emoji: "🇲🇻" },
  { name: "Mali", emoji: "🇲🇱" },
  { name: "Malta", emoji: "🇲🇹" },
  { name: "Marshall Islands", emoji: "🇲🇭" },
  { name: "Martinique", emoji: "🇲🇶" },
  { name: "Mauritania", emoji: "🇲🇷" },
  { name: "Mauritius", emoji: "🇲🇺" },
  { name: "Mayotte", emoji: "🇾🇹" },
  { name: "Mexico", emoji: "🇲🇽" },
  { name: "Micronesia", emoji: "🇫🇲" },
  { name: "Moldova", emoji: "🇲🇩" },
  { name: "Monaco", emoji: "🇲🇨" },
  { name: "Mongolia", emoji: "🇲🇳" },
  { name: "Montenegro", emoji: "🇲🇪" },
  { name: "Montserrat", emoji: "🇲🇸" },
  { name: "Morocco", emoji: "🇲🇦" },
  { name: "Mozambique", emoji: "🇲🇿" },
  { name: "Myanmar (Burma)", emoji: "🇲🇲" },
  { name: "Namibia", emoji: "🇳🇦" },
  { name: "Nauru", emoji: "🇳🇷" },
  { name: "Nepal", emoji: "🇳🇵" },
  { name: "Netherlands", emoji: "🇳🇱" },
  { name: "New Caledonia", emoji: "🇳🇨" },
  { name: "New Zealand", emoji: "🇳🇿" },
  { name: "Nicaragua", emoji: "🇳🇮" },
  { name: "Niger", emoji: "🇳🇪" },
  { name: "Nigeria", emoji: "🇳🇬" },
  { name: "Niue", emoji: "🇳🇺" },
  { name: "Norfolk Island", emoji: "🇳🇫" },
  { name: "North Korea", emoji: "🇰🇵" },
  { name: "North Macedonia", emoji: "🇲🇰" },
  { name: "Northern Mariana Islands", emoji: "🇲🇵" },
  { name: "Norway", emoji: "🇳🇴" },
  { name: "Oman", emoji: "🇴🇲" },
  { name: "Pakistan", emoji: "🇵🇰" },
  { name: "Palau", emoji: "🇵🇼" },
  { name: "Palestinian Territories", emoji: "🇵🇸" },
  { name: "Panama", emoji: "🇵🇦" },
  { name: "Papua New Guinea", emoji: "🇵🇬" },
  { name: "Paraguay", emoji: "🇵🇾" },
  { name: "Peru", emoji: "🇵🇪" },
  { name: "Philippines", emoji: "🇵🇭" },
  { name: "Pitcairn Islands", emoji: "🇵🇳" },
  { name: "Poland", emoji: "🇵🇱" },
  { name: "Portugal", emoji: "🇵🇹" },
  { name: "Puerto Rico", emoji: "🇵🇷" },
  { name: "Qatar", emoji: "🇶🇦" },
  { name: "Réunion", emoji: "🇷🇪" },
  { name: "Romania", emoji: "🇷🇴" },
  { name: "Russia", emoji: "🇷🇺" },
  { name: "Rwanda", emoji: "🇷🇼" },
  { name: "Samoa", emoji: "🇼🇸" },
  { name: "San Marino", emoji: "🇸🇲" },
  { name: "São Tomé & Príncipe", emoji: "🇸🇹" },
  { name: "Saudi Arabia", emoji: "🇸🇦" },
  { name: "Senegal", emoji: "🇸🇳" },
  { name: "Serbia", emoji: "🇷🇸" },
  { name: "Seychelles", emoji: "🇸🇨" },
  { name: "Sierra Leone", emoji: "🇸🇱" },
  { name: "Singapore", emoji: "🇸🇬" },
  { name: "Sint Maarten", emoji: "🇸🇽" },
  { name: "Slovakia", emoji: "🇸🇰" },
  { name: "Slovenia", emoji: "🇸🇮" },
  { name: "Solomon Islands", emoji: "🇸🇧" },
  { name: "Somalia", emoji: "🇸🇴" },
  { name: "South Africa", emoji: "🇿🇦" },
  { name: "South Georgia & South Sandwich Islands", emoji: "🇬🇸" },
  { name: "South Korea", emoji: "🇰🇷" },
  { name: "South Sudan", emoji: "🇸🇸" },
  { name: "Spain", emoji: "🇪🇸" },
  { name: "Sri Lanka", emoji: "🇱🇰" },
  { name: "St. Barthélemy", emoji: "🇧🇱" },
  { name: "St. Helena", emoji: "🇸🇭" },
  { name: "St. Kitts & Nevis", emoji: "🇰🇳" },
  { name: "St. Lucia", emoji: "🇱🇨" },
  { name: "St. Martin", emoji: "🇲🇫" },
  { name: "St. Pierre & Miquelon", emoji: "🇵🇲" },
  { name: "St. Vincent & Grenadines", emoji: "🇻🇨" },
  { name: "Sudan", emoji: "🇸🇩" },
  { name: "Suriname", emoji: "🇸🇷" },
  { name: "Svalbard & Jan Mayen", emoji: "🇸🇯" },
  { name: "Sweden", emoji: "🇸🇪" },
  { name: "Switzerland", emoji: "🇨🇭" },
  { name: "Syria", emoji: "🇸🇾" },
  { name: "Taiwan", emoji: "🇹🇼" },
  { name: "Tajikistan", emoji: "🇹🇯" },
  { name: "Tanzania", emoji: "🇹🇿" },
  { name: "Thailand", emoji: "🇹🇭" },
  { name: "Timor-Leste", emoji: "🇹🇱" },
  { name: "Togo", emoji: "🇹🇬" },
  { name: "Tokelau", emoji: "🇹🇰" },
  { name: "Tonga", emoji: "🇹🇴" },
  { name: "Trinidad & Tobago", emoji: "🇹🇹" },
  { name: "Tunisia", emoji: "🇹🇳" },
  { name: "Türkiye", emoji: "🇹🇷" },
  { name: "Turkmenistan", emoji: "🇹🇲" },
  { name: "Turks & Caicos Islands", emoji: "🇹🇨" },
  { name: "Tuvalu", emoji: "🇹🇻" },
  { name: "U.S. Outlying Islands", emoji: "🇺🇲" },
  { name: "U.S. Virgin Islands", emoji: "🇻🇮" },
  { name: "Uganda", emoji: "🇺🇬" },
  { name: "Ukraine", emoji: "🇺🇦" },
  { name: "United Arab Emirates", emoji: "🇦🇪" },
  { name: "United Kingdom", emoji: "🇬🇧" },
  { name: "United States", emoji: "🇺🇸" },
  { name: "Uruguay", emoji: "🇺🇾" },
  { name: "Uzbekistan", emoji: "🇺🇿" },
  { name: "Vanuatu", emoji: "🇻🇺" },
  { name: "Vatican City", emoji: "🇻🇦" },
  { name: "Venezuela", emoji: "🇻🇪" },
  { name: "Vietnam", emoji: "🇻🇳" },
  { name: "Wallis & Futuna", emoji: "🇼🇫" },
  { name: "Western Sahara", emoji: "🇪🇭" },
  { name: "Yemen", emoji: "🇾🇪" },
  { name: "Zambia", emoji: "🇿🇲" },
  { name: "Zimbabwe", emoji: "🇿🇼" },
];
export function flagGame(ctx) {
  ctx.reply(
    "🌍 Flag Game selected! \n use /join to join the game \n use \n startgame to start",
  );
}
export function startflag(ctx, session, sessions) {
  session.currentRound = 1;
  session.totalRounds = 15;
  session.gameStarted = true;
  session.timeout = null;
  ctx.reply("🌍 Flag Game started!");
  const randomFlag = getRandomFlag();

  session.scores = {};
  session.players.forEach((player) => {
    session.scores[player.id] = 0;
  });

  // Use 'correctAnswer' consistently (your check function uses this name)
  session.displayAnswer = randomFlag.name;
  session.correctAnswer = randomFlag.name.toLowerCase();
  startRoundTimeout(ctx, session, sessions);
  return ctx.reply(
    `🚀 **GAME STARTED!**\n\n` +
      `First one to name this country wins the point:\n\n` +
      `${randomFlag.emoji}`,
    { parse_mode: "Markdown" },
  );
}
function getRandomFlag() {
  const randomIndex = Math.floor(Math.random() * flagDictionary.length);
  return flagDictionary[randomIndex];
}
export function checkFlagAnswer(ctx, session, sessions) {
  const userAnswer = ctx.message.text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (
    userAnswer ===
    session.correctAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  ) {
    if (session.timeout) {
      clearTimeout(session.timeout);
      session.timeout = null;
    }
    if (session.scores[ctx.from.id] !== undefined) {
      session.scores[ctx.from.id]++;
    }

    ctx.reply(`✅ Correct, ${ctx.from.first_name}!`);
    session.currentRound++;
    if (session.currentRound > session.totalRounds) {
      ctx.reply("Game Over! Thanks for playing.");
      const maxScore = Math.max(...Object.values(session.scores));
      const winners = session.players
        .filter((p) => session.scores[p.id] === maxScore && maxScore > 0)
        .map((p) => p.name);
      let scoreboard = "🏁 **Game Over!**\n\nFinal Scores:\n";
      session.players.forEach((p) => {
        scoreboard += `${p.name}: ${session.scores[p.id] || 0} points\n`;
      });
      let winnerAnnouncement = "";

      if (winners.length === 0) {
        winnerAnnouncement = "\nNobody scored any points!";
      } else {
        const winnerMentions = session.players
          .filter((p) => session.scores[p.id] === maxScore)
          .map((p) => `<a href="tg://user?id=${p.id}">${p.name}</a>`);

        if (winnerMentions.length === 1) {
          winnerAnnouncement = `\n🏆 Winner: ${winnerMentions[0]} 🎉`;
        } else {
          winnerAnnouncement = `\n🤝 Tie: ${winnerMentions.join(", ")}`;
        }
      }

      //   ctx.reply(scoreboard + winnerAnnouncement, { parse_mode: "Markdown" });
      ctx.reply(scoreboard + winnerAnnouncement, { parse_mode: "HTML" });
      return { gameOver: true };
      // delete sessions[ctx.chat.id]; // Clean up memory
    } else {
      const nextFlag = getRandomFlag();
      session.displayAnswer = nextFlag.name;
      session.correctAnswer = nextFlag.name.toLowerCase();
      startRoundTimeout(ctx, session, sessions);
      ctx.reply(
        `Round ${session.currentRound}/${session.totalRounds}\nNext flag: ${nextFlag.emoji}`,
      );
    }
  }
}
function startRoundTimeout(ctx, session, sessions) {
  // clear old timeout if exists
  if (session.timeout) clearTimeout(session.timeout);

  session.timeout = setTimeout(() => {
    ctx.reply(
      `⏰ Time's up! The correct answer was: **${session.displayAnswer}**`,
      { parse_mode: "Markdown" },
    );

    session.currentRound++;

    if (session.currentRound > session.totalRounds) {
      gameover(ctx, session, sessions);

      delete sessions[ctx.chat.id];
      return;
    }

    const nextFlag = getRandomFlag();
    session.displayAnswer = nextFlag.name;
    session.correctAnswer = nextFlag.name.toLowerCase();

    ctx.reply(
      `⏭️ Next round (${session.currentRound}/${session.totalRounds})\n${nextFlag.emoji}`,
    );

    // restart timer for next round
    startRoundTimeout(ctx, session, sessions);
  }, 15000); // 15 seconds (change if you want)
}
function gameover(ctx, session, sessions) {
  ctx.reply("Game Over! Thanks for playing.");
  const maxScore = Math.max(...Object.values(session.scores));
  const winners = session.players
    .filter((p) => session.scores[p.id] === maxScore && maxScore > 0)
    .map((p) => p.name);
  let scoreboard = "🏁 **Game Over!**\n\nFinal Scores:\n";
  session.players.forEach((p) => {
    scoreboard += `${p.name}: ${session.scores[p.id] || 0} points\n`;
  });
  let winnerAnnouncement = "";

  if (winners.length === 0) {
    winnerAnnouncement = "\nNobody scored any points!";
  } else {
    const winnerMentions = session.players
      .filter((p) => session.scores[p.id] === maxScore)
      .map((p) => `<a href="tg://user?id=${p.id}">${p.name}</a>`);

    if (winnerMentions.length === 1) {
      winnerAnnouncement = `\n🏆 Winner: ${winnerMentions[0]} 🎉`;
    } else {
      winnerAnnouncement = `\n🤝 Tie: ${winnerMentions.join(", ")}`;
    }
  }
  if (session.timeout) {
    clearTimeout(session.timeout);
    session.timeout = null;
  }

  //   ctx.reply(scoreboard + winnerAnnouncement, { parse_mode: "Markdown" });
  ctx.reply(scoreboard + winnerAnnouncement, { parse_mode: "HTML" });
  return { gameOver: true };
}
