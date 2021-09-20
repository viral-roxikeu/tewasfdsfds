const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const prefix = process.env.prefix;
const fs = require('fs');
const { stringify } = require('querystring');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandfiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is online');
    client.user.setActivity('-help', { type: "WATCHING" })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
     memberCounter(client);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args, Discord);
    } else if (command == 'donate') {
        client.commands.get('donate').execute(message, args, Discord);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command == 'bum') {
        client.commands.get('bum').execute(message, args);
    } 
});

client.on('message', message => {
    if (message.content == 'party') {
        message.react('850381298640093184');
        message.react('850227851524309003');
    } else if (message.content == 'ruze') {
        message.react('🌹');
    } else if (message.content == 'růže') {
        message.react('🌹');
    } else if (message.content == 'bambus') {
        message.react('🎍')
        message.channel.send('🎍');
    }
});

client.login(process.env.DISCORD_TOKEN);