/* 
    Discord Bot created by T3chyy for the RedAl3rt // T3chyy Discord server.
    Invite to the server: invite.gg/t3chyy
    
    Social Media:
    youtube.com/t3chyy
    twitter.com/RedAl3rt2
    github.com/RedAl3rtT3chyy
    T3chyy#8145
*/

//Import discord.js and other Node modules.
const Discord = require("discord.js");
const bot = new Discord.Client()
const { MessageEmbed } = require("discord.js");
//ytdl-core module, Used to play music.
const ytdl = require("ytdl-core")

//The token used to access the bot. Hidden in a json file called "token.json".
const token = require("./token.json")

//List of roasts. Used for the t!roast command.
var roasts = ["Fake hair, fake nails, fake smile. Are you sure you weren't made in China?", 
"Mirrors can't talk, and lucky for you they can't laugh either.",
"I'd say you're funny, but looks aren't everything.", 
"Roses are red, shit is brown, shut the fuck up, and sit the fuck down.",
"Twinkle twinkle little whore, close your legs, they're not a door.", 
"I guess those penis enlargement pills are working - you're twice the dick you were yesterday!",
"Your not yourself today, I noticed the improvement immediately.", 
"I know your not as stupid as you look, Nobody could be!",
"You conserve toilet paper by using both sides.", 
"Don't feel sad, don't feel blue, Frankenstein was ugly too.",
"You're so ugly, when you threw a boomerang it didn't come back.", 
"You're not completely useless, you can always serve as a bad example.",
"Nice shirt, what brand is it? Clearance?", 
"You must've been born at a pound because you're a son of a bitch.",
"Being a dick to everyone won't make yours any bigger.", 
"Twinkle twinkle little slut, You like dick inside your butt.", 
"You're so stupid you trip over the cord of a cellular phone!", 
"Roses are red, violets are blue. I have five fingers and the middle one is for you.", 
"Repeat after me: semen is not hair gel.", 
"If I asked you about your cock it wouldn't be a very long conversation.", 
"The only reason your partner likes your dick is because they were taught to enjoy the little things in life.", 
"Some babies were dropped on their heads but you were clearly thrown at a wall.", 
"If I wanted to kill myself, I'd climb your ego and jump to your IQ.", 
"I've hated your looks from the start they gave me.",
"Good story, but in what chapter do you shut the fuck up?",
"You're so fat you need cheat codes to play Wii Fit.",
"You're so stupid you tried to wake a sleeping bag.",
"You shouldn't play hide and seek, no one would look for you.",
"You're so ugly, when you got robbed, the robbers made you wear their masks.",
"I just stepped in something that was smarter than you and smelled better too.",
"What's the difference between you and eggs? Eggs get laid and you don't.",
"I thought of you today. It reminded me to take the garbage out.",
"The only positive thing about you is your HIV status.",
"If laughter is the best medicine, your face must be curing the world.",
"I bet you wear a nose ring because no one wants to put one on your finger.",
"If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass.",
"The 80's called, they want their haircut back.",
"It looks like your face caught fire and someone tried to put it out with a hammer.",
"Your lips keep moving but I don't speak stupid.",
"You stare at frozen juice cans because they say, 'concentrate.'",
"They say people get what they deserve. In your case it's a participation trophy.",
"What did you have for breakfast? Bitch Flakes?",
"When you were born your mom threw you out the window and the window threw you back.",
"You have more dick in your personality than you do in your pants.",
"You're the cum your mother should have swallowed.",
"I failed a spelling test because they asked me how to spell 'bitch' and I wrote down your name.",
"Your face looks like something I would draw with my non dominant hand."]

//Log the bot into Discord.
bot.login(token.login)


//The event for when the bot is ready.
bot.on('ready', () => {
    bot.user.setPresence({ activity: { name: 'Loading..' }, status: 'dnd' })
    console.log("Loading..")
    setTimeout(() => {
        console.log("Loading completed.")
        bot.user.setPresence({ activity: { name: 'for t!help', type: "WATCHING" }, status: 'online' })
    }, 20000);
});


bot.on('message', async message => {


    //The list of commands.
    if (message.content == "t!help") {
        
        const embed = new MessageEmbed()
        .setTitle("Command List:")
        .setColor(0xFF0000)
        .addField("t!help", "Displays this page")
        .addField("t!roast", "Roast the hell out of your friends!")
        .addField("t!changelog", "Views the changelog for each new bot version!")
        .addField("t!version", "Shows the bot version!")
        .addField("t!abouteas", "Shows information about the Emergency Alert System. (EAS)")
        .addField("t!avatar", "Sends your avatar URL!")
        .addField("t!play [URL]", "Play a song using T3chyy Player!")
        .addField("t!leave", "Leave the voice channel.")
        .addField("t!ping", "View the bot's latency as well as view the Discord API ping.")
        .addField("t!pumpedupkicks", "Plays Foster The People - Pumped up Kicks (Don't question the existence of this command please)")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")
        message.author.send(embed);        
    }

    if (message.content == "t!changelog") {

        const embed = new MessageEmbed()
        .setTitle("Changelog for Version v1.03.2")
        .setColor(0xFF0000)
        .addField("Ping command!", "View the bot's latency as well as view the Discord API ping.")
        .addField("More roasts!", "More roasts come out every update! Use them to roast the hell out of your friends!")
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)
    }

    if (message.content == "t!version") {
        message.channel.send("Version v1.03.2")
    }

    if (message.content == "t!roast") {
        var response = roasts[Math.floor(Math.random()*roasts.length)];
        const embed = new MessageEmbed()
        .setTitle("Roast")
        .setColor(0xFF0000)
        .setDescription(response)
        .setFooter("© RedAl3rt, 2020 All rights reserved.")
        message.content.send(embed)
    }

    if (message.content == "t!abouteas") {
        
        const embed = new MessageEmbed()
        .setTitle("What's the Emergency Alert System?")
        .setColor(0xFF0000)
        .setDescription("The Emergency Alert System (EAS) is a national warning system in the United States put into place on January 1, 1997 (approved by the Federal Communications Commission (FCC) in November 1994), when it replaced the Emergency Broadcast System (EBS), which in turn replaced CONELRAD. It is jointly coordinated by the Federal Emergency Management Agency (FEMA), the Federal Communications Commission (FCC) and the National Oceanic and Atmospheric Administration (NOAA). The EAS regulations and standards are governed by the Public Safety and Homeland Security Bureau of the FCC.")
        .setFooter("Source: https://en.wikipedia.org/wiki/Emergency_Alert_System")

        message.channel.send(embed)
    }

    if(message.content == "t!avatar") {
        message.reply(message.author.displayAvatarURL());
    }
    

    if (message.content.startsWith('t!play')) {
        
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
    
    if(message.content == "t!leave") {
        const voiceChannel = message.member.voice.channel
        voiceChannel.leave()
    }

    if(message.content == "t!ping") {

        let latancy = (Date.now() - message.createdTimestamp);
        const embed = new MessageEmbed()
        .setTitle("Pong!")
        .setColor(0xFF0000)
        .addField("📶 Latency:", `${latancy}ms`)
        .addField("💻 API:", `${Math.round(bot.ws.ping)}ms`)
        .setFooter("© RedAl3rt, 2020 All rights reserved.")

        message.channel.send(embed)
    }


    if (message.content === 't!pumpedupkicks') {
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
    

});