require('dotenv').config();
console.log(process.env.DISCORD_BOT_TOKEN);
const { Client, Intents } = require('discord.js');

// Specify the intents your bot needs
const intents = [
    Intents.FLAGS.GUILDS, // Receive guild events
    Intents.FLAGS.GUILD_MESSAGES, // Receive message events
    // Add more intents as needed
  ];
  
  // Create a new Discord.js Client instance with the specified intents
  const client = new Client({ intents });
  
  // Your bot logic goes here
  
  // Login to Discord with your bot token
  client.login('your-bot-token');
  
