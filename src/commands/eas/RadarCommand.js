const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RadarCommand extends BaseCommand {
  constructor() {
    super('radar', 'eas', []);
  }

  run(client, message, args) {
    // message.channel.send('radar command works');
  }
}