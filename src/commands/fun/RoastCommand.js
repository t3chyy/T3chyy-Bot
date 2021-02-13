const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')

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
"Your face looks like something I would draw with my non dominant hand.",
"My phone battery lasts longer than your relationships.",
"My name must taste good because it’s always in your mouth.",
"Don’t you get tired of putting make up on two faces every morning?",
"Is your drama going to an intermission soon?",
"It’s a shame you can’t Photoshop your personality."]


module.exports = class RoastCommand extends BaseCommand {
  constructor() {
    super('roast', 'fun', []);
  }


   run(client, message, args) {
    var response = roasts[Math.floor(Math.random()*roasts.length)];
    const person = args.join(' ')

    if (!args[0]) return message.channel.send("Who are you gonna burn to the ground? Try the command again, but this time please include someone to DESTROY.")
    const embed = new MessageEmbed()
    .setTitle("Roast")
    .setColor(0xFF0000)
    .setDescription(person + ", " + response)
    .setFooter("© T3chyy Studios Inc, 2021 All rights reserved.")
    message.channel.send(embed)

  }
}