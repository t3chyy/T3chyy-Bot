const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'fun', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    if(!message.mentions.users.first()){
        embed.setTitle("Here's your sexy avatar ;)")
        embed.setImage(message.author.displayAvatarURL())
        embed.setColor(0xFF0000)
        embed.setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
        return message.channel.send(embed)
    }else{
        let user = message.mentions.users.first()
        embed.setTitle(`${user.tag}'s sexy avatar! ;)`)
        embed.setImage(user.displayAvatarURL())
        embed.setColor(0xFF0000)
        embed.setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
        return message.channel.send(embed)
    }
  }
}