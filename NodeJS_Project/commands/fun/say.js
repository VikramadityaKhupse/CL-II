const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
            .setDescription('The input to say back'))
        .addChannelOption(option =>
            option.setName('channel')
            .setDescription('The channel to cho into')),
    async execute(interaction){},


};

