module.exports.run = async(client, message, args) => {
    const { channel } = message.member.voice;
    if (channel) {
      const player = client.music.players.spawn({
        guild: message.guild,
        voiceChannel: channel,
        textChannel: message.channel,
      });
      console.log(client.musicPlayers)
    } else {
      message.channel.send('Please join a voice channel.');
    }
}