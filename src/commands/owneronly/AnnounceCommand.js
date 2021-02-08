const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const owner = "564356568276271115"

module.exports = class AnnounceCommand extends BaseCommand {
  constructor() {
    super('announce', 'owneronly', []);
  }

  run(client, message, args) {
    if (message.author.id == owner) {
      const announcement = args.join(" ");
      const embed = new MessageEmbed()
      .setTitle("Announcement")
      .setColor(0xFF0000)
      .setDescription(announcement)
      .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
      message.channel.send(embed)

    } else {
      message.channel.send("You don't have the following permission: Bot Owner")
    }
  }
}