const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageAttachment } = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch');

module.exports = class AlertmapCommand extends BaseCommand {
  constructor() {
    super('alertmap', 'eas', []);
  }

  async run(client, message, args) {
    const wfo = args.join(' ')
    if (!args[0]) return message.channel.send("Please provide a WFO!")

    let msg;
    msg = await message.channel.send("<a:buffering:701577960792260608> Contacting server.. Please wait.")
    const url = "https://www.weather.gov/wwamap/png/" + wfo + ".png"

    const response = await fetch(url)
    if (!response.ok) return msg.edit("⛔ Invalid WFO! FYI it's also case sensitive. Make sure you entered it in lowercase!")
    const buffer = await response.buffer();
    fs.writeFile(`./images/alertmap.png`, buffer, () => { 

    })
    setTimeout(() => {
      const attachment = new MessageAttachment('./images/alertmap.png')
      msg.edit("✅ Image downloaded!")
      message.channel.send(attachment)
    }, 1000)
 }
}
