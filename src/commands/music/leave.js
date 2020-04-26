module.exports.run = async(client, message, args) => {
    const voiceChannel = message.member.voice.channel
    voiceChannel.leave()
}