module.exports.run = async(client, message, args) => {
    const { id } = message.guild;
    const player = client.music.players.get(id);
    const { channel } = message.member.voice;
    if (player && channel) {
      if (player.voiceChannel.id === channel.id) {
        client.music.players.destroy(id);
      }
    }
}