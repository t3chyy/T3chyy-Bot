const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Command List:")
        .setColor(0xFF0000)
        .addField("t!help", "Displays this page")
        .addField("t!roast", "Roast the hell out of your friends!")
        .addField("t!changelog", "Views the changelog for each new bot version!")
        .addField("t!version", "Shows the bot version!")
        .addField("t!abouteas", "Shows information about the Emergency Alert System. (EAS)")
        .addField("t!avatar", "Sends your avatar URL!")
        .addField("t!play [URL]", "Play a song using T3chyy Player!")
        .addField("t!leave", "Leave the voice channel.")
        .addField("t!ping", "View the bot's latency as well as view the Discord API ping.")
        .addField("t!pumpedupkicks", "Plays Foster The People - Pumped up Kicks (Don't question the existence of this command please)")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")
        message.author.send(embed);
}