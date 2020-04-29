const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle("Music Help Commands")
    .setColor(0xFF0000)
    .addField("t!join", "Joins the voice channel. MUST USE FIRST!")
    .addField("t!play [song]", "Searches for music, plays music, adds music to the queue.")
    .addField("t!skip", "Skips the song and plays the next song in queue. If there is more than one user in a channel, It will use a vote, If you're by yourself, It will skip automatically.")
    .setFooter("© RedAl3rt, 2020 All rights reserved.")
    message.channel.send(embed)
}