const ytdl = require('ytdl-core')
module.exports.run = async(client, message, args) => {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=rnO-MflYxCw', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('end', () => voiceChannel.leave());
		});
    }