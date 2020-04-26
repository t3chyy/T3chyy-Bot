const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle("Changelog for Version v1.03.2")
    .setColor(0xFF0000)
    .addField("Ping command!", "View the bot's latency as well as view the Discord API ping.")
    .addField("More roasts!", "More roasts come out every update! Use them to roast the hell out of your friends!")
    .setFooter("© RedAl3rt, 2020 All rights reserved.")

    message.channel.send(embed)
}
