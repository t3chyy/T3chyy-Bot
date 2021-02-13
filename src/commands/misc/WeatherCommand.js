const BaseCommand = require('../../utils/structures/BaseCommand');
const weather = require('weather-js');
const { MessageEmbed } = require('discord.js')


module.exports = class WeatherCommand extends BaseCommand {
  constructor() {
    super('weather', 'misc', []);
  }

  run(client, message, args) {
    weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
      if(error) return message.channel.send(error);
      if(!args[0]) return message.channel.send('Please specify a location')

      if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

      var current = result[0].current;
      var location = result[0].location;

      const weatherinfo = new MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather forecast for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0xFF0000)
      .addField('Timezone', `UTC${location.timezone}`, true)
      .addField('Degree Type', 'Fehrenheit', true)
      .addField('Temperature', `${current.temperature}°`, true)
      .addField('Wind', current.winddisplay, true)
      .addField('Feels like', `${current.feelslike}°`, true)
      .addField('Humidity', `${current.humidity}%`, true)


      message.channel.send(weatherinfo)
      })       
  }
}