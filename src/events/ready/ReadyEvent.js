const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    client.user.setPresence({ activity: { name: 'Loading..' }, status: 'dnd' })
    console.log("Loading..")
    setTimeout(() => {
        console.log("Loading completed.")
        client.user.setPresence({ activity: { name: 'Version v2.03 [Stable Build] | t!help for a list of commands | DM T3chyy#0001 for questions and concerns.', type: "PLAYING" }, status: 'online' })
    }, 20000);
  }
}