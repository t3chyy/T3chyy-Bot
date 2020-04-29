const { MessageEmbed } = require('discord.js')
module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle("Changelog for Version v1.04")
    .setColor(0xFF0000)
    .addField("Upgraded Music Service", "Music service has been upgraded from ytdl-core to Lavalink to make sure that audio is crisp and high quality. Because quality is the bot's top priority.")
    .addField("Updated avatar command", "The avatar command has been updated so you can get the avatar from anyone in the server you want.")
    .addField("Removed Latency from t!ping", "The latency part in the ping command is broken and useless. Due to this, It has been removed.")
    .addField("Removed t!pumpedupkicks", "Unfortunately, This command didn't make it through the service upgrade and broke after the upgrade was implemented.")
    .addField("More roasts!", "More roasts come out every update! Use them to roast the hell out of your friends!")
    .setFooter("© RedAl3rt, 2020 All rights reserved.")

    message.channel.send(embed)
}
