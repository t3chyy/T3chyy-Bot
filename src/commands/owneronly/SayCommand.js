const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const owner = "564356568276271115"

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'owneronly', []);
  }

  run(client, message, args) {
    if (message.author.id !== owner) return message.channel.send("You don't have the following permission: Bot Owner")
      const saymsg = args.join(" "); 

      setTimeout(() => {
        message.delete().catch();
      }, 1000)
      message.channel.send(saymsg)


    }
  }