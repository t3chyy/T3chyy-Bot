const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SrcCommand extends BaseCommand {
  constructor() {
    super('src', 'info', []);
  }

  run(client, message, args) {
    message.channel.send('https://github.com/RedAl3rtT3chyy/T3chyy-Bot');
  }
}