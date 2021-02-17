const BaseEvent = require('../../utils/structures/BaseEvent');
const blockedUsers = [ '788561092485578764' ];

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        if (blockedUsers.includes(message.author.id)) return message.channel.send("Your account has been blocked from using T3chyy Bot. Contact T3chyy#0001 if you believe this is in error.")
        command.run(client, message, cmdArgs);
      }
    }
  }
}