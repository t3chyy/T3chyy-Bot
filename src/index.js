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

require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client()
const { ErelaClient } = require('erela.js')
const fs = require('fs').promises;
const path = require('path')
const prefix = process.env.PREFIX
const nodes = [
    {
        host: process.env.HOST,
        port: process.env.PORT,
        password: process.env.PASSWORD
    }
]
client.commands = new Map();
client.musicPlayers = new Map();

//Log the bot into Discord.
client.login(process.env.BOT_TOKEN)


//The event for when the bot is ready.
client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'Loading..' }, status: 'dnd' })
    console.log("Loading..")
    setTimeout(() => {
        console.log("Loading completed.")
        client.user.setPresence({ activity: { name: 'for t!help', type: "WATCHING" }, status: 'online' })
    }, 20000);
    client.music = new ErelaClient(client, nodes);
    client.music.on("nodeConnect", node => console.log(node));
    client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    client.music.on("trackStart", (player, track) => player.textChannel.send(`Now playing: ${track.title}`));
    client.music.on("queueEnd", player => {
        player.textChannel.send("Queue has ended.")
    });

});


client.on('message', async message => {
    
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    let cmdName = message.content.substring(message.content.indexOf(prefix)+2).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.slice(prefix.length).split(' ');
    if(client.commands.get(cmdName))
        client.commands.get(cmdName).run(client, message, argsToParse);
    else {
        console.log("Command does not exist.");
    }


});

(async function registerCommands(dir = 'commands') {
    let files = await fs.readdir(path.join(__dirname, dir));
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerCommands(path.join(dir, file));
        else {
            if(file.endsWith(".js")) {
                let cmdName = file.substring(0, file.indexOf(".js"));
                let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);
            }
        }
    }
})();