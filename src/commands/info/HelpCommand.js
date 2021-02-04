const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')


module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', []);
  }

  async run(client, message, args) {
    const embed = new MessageEmbed()
        .setTitle("Command List:")
        .setColor(0xFF0000)
        .addField("t!help", "Displays this page")
        .addField("t!roast", "Roast the hell out of your friends!")
        .addField("t!changelog", "Views the changelog for each new bot version!")
        .addField("t!abouteas", "Shows information about the Emergency Alert System. (EAS)")
        .addField("t!avatar", "Sends your avatar URL!")
        .addField("t!ping", "Views your ping.")
        .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
        message.author.send(embed);
        message.channel.send("Sent a DM!")
  }
}