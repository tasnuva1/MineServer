const bedrock = require("bedrock-protocol");
const express = require("express");
const app = express();

app.listen(3001, "0.0.0.0", () => {
  console.log("Server is running.");

  const client = bedrock.createClient({
    host: "MadeInAbyissSMP.aternos.me", // optional
    port: 38204, // optional, default 19132
    username: "Kvinn1", // the username you want to join as, optional if online mode
    offline: true, // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true.
  });
  client.on("text", (packet) => {
    // Listen for chat messages and echo them back.
    if (packet.source_name != client.options.username) {
      client.queue("text", {
        type: "chat",
        needs_translation: false,
        source_name: client.username,
        xuid: "",
        platform_chat_id: "",
        message: `${packet.source_name} said: ${
          packet.message
        } on ${new Date().toLocaleString()}`,
      });
    }
  });
});

// testing
