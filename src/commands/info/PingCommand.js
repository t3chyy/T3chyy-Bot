const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'info', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
        .setTitle("Pong!")
        .setColor(0xFF0000)
        .addField("💻 Ping:", `${Math.round(client.ws.ping)}ms`)
        .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")

        message.channel.send(embed)
  }
}