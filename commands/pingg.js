const { SlashCommandBuilder } = require("discord.js");

//If you have a command that performs longer tasks, be sure to call deferReply() as early as possible.

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pingg")
    .setDescription("Replies with amount of time a full API roundtrip!"),
  async execute(interaction) {
    // const sent = await interaction.reply({
    //   content: "Pinging...",
    //   fetchReply: true,
    // });
    // interaction.editReply(
    //   `Roundtrip latency: ${
    //     sent.createdTimestamp - interaction.createdTimestamp
    //   }ms`
    // );

    const sent = await interaction.deferReply({
      content: "Pinging...",
      fetchReply: true,
    });
    interaction.followUp(
      `Roundtrip latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms`
    );
  },
};
