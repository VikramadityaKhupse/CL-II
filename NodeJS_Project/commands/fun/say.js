const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to say back')
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to say it in (optional)')
                .addChannelTypes(ChannelType.GuildText)), // Restrict to guild text channels
    async execute(interaction) {
        const input = interaction.options.getString('input');
        const targetChannel = interaction.options.getChannel('channel');

        // Choose the channel to send the message:
        const channelToSendIn = targetChannel ? targetChannel : interaction.channel;

        // Check if the target channel is a valid guild text channel:
        if (targetChannel && targetChannel.type !== ChannelType.GuildText) {
            return await interaction.reply({ content: "You can only specify a text channel for this command.", ephemeral: true });
        }

        try {
            await channelToSendIn.send(input);
            await interaction.reply({ content: '✅ Message sent!', ephemeral: true });
        } catch (error) {
            console.error('Error sending message:', error);
            await interaction.reply({ content: 'Failed to send message. Check the console for details.', ephemeral: true });
        }
    },
};
