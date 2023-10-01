const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Testing new command")
    .addStringOption((option) =>
      option.setName("input").setDescription("The input to echo back")
    )
    .addChannelOption((option) =>
      option.setName("channel").setDescription("The channel to echo into")
    )
    .addBooleanOption((option) =>
      option
        .setName("ephemeral")
        .setDescription("Whether or not the echo should be ephemeral")
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    const channel = interaction.options.getChannel("channel");
    const isEphemeral = interaction.options.getBoolean("ephemeral");

    await interaction.reply(
      `input : ${input} \n channel: ${channel} \n isEphemeral: ${isEphemeral}`
    );
  },
};
