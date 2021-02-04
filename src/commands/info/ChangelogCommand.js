const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

module.exports = class ChangelogCommand extends BaseCommand {
  constructor() {
    super('changelog', 'info', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle("Changelog for Version v2.00")
    .setColor(0xFF0000)
    .addField("Complete code rewrite.", "The bot should work as normal, However majority if not all of the code has been remodified to make the bot work in today's world.")
    .addField("Music temporarily disabled", "The music service is temporarily disabled following the code rewrite. Music being renabled is TBD.")
    .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
    message.channel.send(embed)
  }
}