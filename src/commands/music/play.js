const ytdl = require('ytdl-core')
module.exports.run = async(client, message) => {
    let args = message.content.split(' ')
    let url = args[1];
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
        return message.reply('Please join a voice channel first!');
    }
    voiceChannel.join().then(connection => {
        const stream = ytdl(url, { filter: 'audioonly' });
        const dispatcher = connection.play(stream);

        dispatcher.on('end', () => voiceChannel.leave());
    }).catch(err => console.log(err));
}