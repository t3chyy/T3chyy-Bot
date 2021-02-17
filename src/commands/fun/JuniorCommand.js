const BaseCommand = require('../../utils/structures/BaseCommand');
const junioremoji = "<:junior:748702058722361374>";
const junior = ['https://cdn.discordapp.com/attachments/810950237035298827/810950394598785044/unknown.png',
'https://media.discordapp.net/attachments/781334052530552862/809584919826137108/20210211_183707.jpg?width=376&height=669',
'https://images-ext-1.discordapp.net/external/iDXKJkGzMfpDF4jgCxoCcVD1CxXJyuxzrFGGPbL0q7c/%3Fwidth%3D376%26height%3D669/https/media.discordapp.net/attachments/781334052530552862/806635635766722640/20210203_151342.jpg?width=344&height=612',
'https://images-ext-2.discordapp.net/external/LVhrExPo5OzKWZaA-CDjrOTVXrDPjExfZXCDxqA7M9M/%3Fwidth%3D376%26height%3D669/https/media.discordapp.net/attachments/781334052530552862/808352597529985034/20210207_232121.jpg?width=344&height=612',
'https://images-ext-1.discordapp.net/external/GvL-dvlvBssw3eyNn7gDueAozgSqiIcBPZonrzpYx-E/%3Fwidth%3D1190%26height%3D670/https/media.discordapp.net/attachments/781334052530552862/804003806706270248/20210127_090320.jpg?width=1088&height=612',
'https://images-ext-1.discordapp.net/external/4Uo_lMFVMwIstAOz0KWonPuThlH4efeFvtSezF7iDr8/%3Fwidth%3D376%26height%3D669/https/media.discordapp.net/attachments/781334052530552862/802660861596532736/20210123_155015.jpg?width=344&height=612',
'https://images-ext-1.discordapp.net/external/IrK8vM6As-cltk7UGxLWoD856hifNvS5vNkyyRdzpOA/%3Fwidth%3D1190%26height%3D670/https/media.discordapp.net/attachments/781334052530552862/802613782256812072/20210123_124021.jpg?width=1088&height=612',
'https://cdn.discordapp.com/attachments/781334052530552862/801201542657081444/20210117_113202.jpg',
'https://images-ext-1.discordapp.net/external/TlnIz0ASv4Qo5zYT5exy4jVTi9IIUXvJP4CaM2N5FZ4/https/media.discordapp.net/attachments/781334052530552862/803344635228323860/20210125_131627.png']


module.exports = class JuniorCommand extends BaseCommand {
  constructor() {
    super('junior', 'fun', []);
  }

  run(client, message, args) {
    var randomizer = junior[Math.floor(Math.random()*junior.length)];
    message.channel.send("Here's your Junior pic! " + junioremoji)
    message.channel.send(randomizer)
  }
}