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
        .addField("t!hack", "Hack someone (fyi it doesn't really hack anyone lmao)")
        .addField("t!src", "Links you my source code!")
        .addField("t!junior", "Junior the Cat pictures (its not my cat fyi)")
        .addField("t!ping", "Views your ping.")
        .addField("t!tos", "Shows the T3chyy Bot Terms of Service.")
        .addField("Owner Only - t!say", "Prints out any message you want")
        .addField("Owner Only - t!announce", "Same thing as t!say, but with an embed")
        .addField("Owner Only - t!eval", "Evaluates JavaScript code and executes it (EXTREMELY DANGEROUS)")
        .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
        message.author.send(embed).catch(error => {
          message.channel.send("I couldn't send you a DM. Sending the Command List in current channel.")
          message.channel.send(embed)   
    })
    message.react('✅')
  }
}