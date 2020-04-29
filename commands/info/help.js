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
        .addField("t!ping", "Views your ping.")
        .addField("t!musichelp", "Displays the music help page with all the music commands in it.")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")
        message.author.send(embed);
        message.channel.send("Sent a DM!")
}