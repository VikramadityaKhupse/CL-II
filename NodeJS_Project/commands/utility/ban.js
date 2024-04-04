const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user from the server.')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('The user to ban')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('Optional reason for the ban')
    )
    .setDefaultPermission(false), // Set to false to restrict command usage (needs "Ban Members" permission)
  async execute(interaction) {
    const targetUser = interaction.options.getUser('target');
    const reason = interaction.options.getString('reason') || 'No reason provided';

    // Check permissions
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return await interaction.reply({ content: "You don't have permission to use this command.", ephemeral: true });
    }

    // Check bot's permissions
    if (!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return await interaction.reply({ content: "I don't have permission to ban members.", ephemeral: true });
    }

    try {
      await targetUser.ban({ reason });
      await interaction.reply({ content: `Successfully banned ${targetUser.tag} for ${reason}`, ephemeral: true });
    } catch (error) {
      console.error('Error banning user:', error);
      await interaction.reply({ content: 'Failed to ban user. Check the console for details.', ephemeral: true });
    }
  },
};
