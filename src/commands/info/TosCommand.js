const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

module.exports = class TosCommand extends BaseCommand {
  constructor() {
    super('tos', 'info', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle("T3chyy Bot Terms of Service")
    .setColor(0xFF0000)
    .setDescription("When using T3chyy Bot and it's features. You agree to it's Terms of Service. Breakage of these terms will result in a ban from using T3chyy Bot.\n\nT3chyy Bot's source code uses Apache License 2.0. Please respect it's terms. To learn more. Visit this link: https://github.com/RedAl3rtT3chyy/T3chyy-Bot/blob/master/LICENSE\n\nAbusing T3chyy Bot commands to the point where it's unusable to anyone in any way, shape or form will result in a ban from using T3chyy Bot and it's commands. **All bans for T3chyy Bot are permanent and final and cannot be reversed in anyway unless it was a false ban.**\n\nAs of 2/12/21. T3chyy Bot is a semi-private bot. You must ask T3chyy#0001 if you could add T3chyy Bot to your server. If the bot is found in the server unauthorized. It will be removed. If you are a repeat offender. The bot will be removed once again, and **you'll be permanently banned from using T3chyy Bot.**\n\nThe bot owner reserves the **full** right to limit use of T3chyy Bot for anyone for any reason. T3chyy Bot maybe free to use. But remember that the owner has the full right to restrict that.\n\n\nIf anyone has any concerns or questions. Please contact me, T3chyy#0001. Thank you for reading.")
    .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
    message.author.send(embed).catch(error => {
      message.channel.send("I couldn't send you a DM. sending the T3chyy Bot Terms of Service in current channel.")
      message.channel.send(embed)
    })
  }
}