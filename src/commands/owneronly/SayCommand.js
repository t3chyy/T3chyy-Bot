const BaseCommand = require('../../utils/structures/BaseCommand');
const owner = "564356568276271115"

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'owneronly', []);
  }

  run(client, message, args) {
    if (message.author.id == owner) {
      const saymsg = args.join(" ");
      message.channel.send(saymsg)

    } else {
      message.channel.send("You don't have the following permission: Bot Owner")

    }
  }
}