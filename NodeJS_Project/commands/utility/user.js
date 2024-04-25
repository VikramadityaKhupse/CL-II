const { SlashCommandBuilder, Guild } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.')
		.addUserOption(option =>
			option.setName('user')
			  .setDescription('@username')
			  .setRequired(true)
		  ),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		const targetUser = interaction.options.getUser('user');
		const guild = interaction.guild;
		await interaction.reply(`This command was run by ${targetUser.username}, who joined on ${targetUser.joinedAt}.`);
	},
};
