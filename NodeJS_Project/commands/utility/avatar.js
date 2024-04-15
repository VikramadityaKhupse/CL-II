const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription('Shows avatar of an user!')
        .addUserOption(option =>
            option.setName('target')
              .setDescription('@username!')
              .setRequired(true)
        ),
    async execute(interaction){
        const targetUser = interaction.options.getUser('target');
        const avatarURL = targetUser.displayAvatarURL({ format: 'png', size: 2048 });
        if(!targetUser){
            return await interaction.reply("Please add a valid username!");
        }
        const embed = new EmbedBuilder()
      .setColor(0x00ffff) // Set embed color (optional)
      .setTitle(`${targetUser.username}'s Avatar`)
      .setImage(avatarURL);

    await interaction.reply({ embeds: [embed] });

    },

    
};