
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('/home/vikramaditya/CL-II/NodeJS_Project/config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// Log in to Discord with your client's token
client.login(token);


