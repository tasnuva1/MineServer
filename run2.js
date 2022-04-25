const mineflayer = require("mineflayer");
var options = {
  host: "MadeInAbyissSMP.aternos.me",
  port: "38204",
  username: "Kvinn1",
  //   version: "1.18",
  //   password: "Never say Never905",
  //   username: "jobair.tahsin1@gmail.com",
  //   password: "Never say Never905",
};

var bot = mineflayer.createBot(options);

bot.on("spawn", () => {
  console.log("- Spawned -");
  console.log("- Listening for messages -");
  for (const player of Object.values(bot.players)) {
    console.log("- Player " + player.displayName + " connected -");
  }
});
