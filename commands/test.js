const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Boops the specified user, as many times as you want")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to boop")
        .setRequired(true)
    )

    // Adds an integer option
    .addIntegerOption((option) =>
      option
        .setName("boop_amount")
        .setDescription(
          "How many times should the user be booped (defaults to 1)"
        )
    )

    // Supports choices too!
    .addIntegerOption((option) =>
      option
        .setName("boop_reminder")
        .setDescription("How often should we remind you to boop the user")
        .addChoices(
          { name: "Every day", value: 1 },
          { name: "Weekly", value: 7 }
        )
    ),
  async execute(interaction) {
    // interaction.guild is the object representing the Guild in which the command was run
    const user = interaction.options.getUser("user");
    const boop_reminder = interaction.options.getInteger("boop_reminder");

    await interaction.reply(`User: ${user} and Boop ${boop_reminder}`);

    // const locales = {
    //   pl: "Witaj Świecie!",
    //   de: "Hallo Welt!",
    // };
    // await interaction.reply(
    //   locales[interaction.locale] ?? "Hello World (default is english)"
    // );

    // const message = await interaction.fetchReply();
    // console.log(message);

    // await interaction.deleteReply();
  },
};
