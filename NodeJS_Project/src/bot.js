import { config } from 'dotenv';
config();
const { Client, Intents } = require('discord.js');
const client = new Client({ 
  intents: [
      
      // Add more intents as needed
  ] 
}); // Creates new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// This line must be at the very end
client.login("MTIxMjEwOTU1ODYxNzYwODI1Mg.Gss6SI.AUMbggDXLdyAf3BXGbARogKchcuNvlFPAMzwfs"); // Signs the bot in with the token
