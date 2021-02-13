const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

module.exports = class ChangelogCommand extends BaseCommand {
  constructor() {
    super('changelog', 'info', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle("Changelog for Version v2.03")
    .setColor(0xFF0000)
    .addField("TOS", "t!tos features the all new Terms of Service. Take the time to read it.")
    .addField("Owner Only Stuff", "Some owner only stuff for debugging. Nothing really important.")
    .addField("Music temporarily disabled", "The music service is temporarily disabled following the code rewrite. Music being renabled is TBD.")
    .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
    message.channel.send(embed)
  }
}