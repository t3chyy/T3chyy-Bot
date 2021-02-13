const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HackCommand extends BaseCommand {
  constructor() {
    super('hack', 'fun', []);
  }
  
   async run(client, message, args) {
    const person = args.join(" ")
    if(!args[0]) return message.channel.send('Who you gonna hack tho? Try the command again, but this time with someone to actually hack.')

    let msg;

    msg = await message.channel.send("Hacking " + person + "..")
    setTimeout(() => {
      msg.edit("Getting " + person + "'s Discord Password!")
    }, 5000)

    setTimeout(() => {
      msg.edit(person + "'s Discord Password Found!")
    }, 10000)

    setTimeout(() => {
      msg.edit("Sending mass reports to Discord's Trust and Safety Team to get " + person + " banned!")
    }, 15000)

    setTimeout(() => {
      msg.edit("Process complete! " + person + " is now hacked!")
    }, 20000)
  }
}