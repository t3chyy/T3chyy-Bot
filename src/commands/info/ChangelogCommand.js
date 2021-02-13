const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

module.exports = class ChangelogCommand extends BaseCommand {
  constructor() {
    super('changelog', 'info', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle("Changelog for Version v2.01")
    .setColor(0xFF0000)
    .addField("New commands", "New commands! t!src, t!hack and t!weather! Check them out!")
    .addField("Owner Only Stuff", "Some owner only stuff for debugging. Nothing really important.")
    .addField("Music temporarily disabled", "The music service is temporarily disabled following the code rewrite. Music being renabled is TBD.")
    .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
    message.channel.send(embed)
  }
}