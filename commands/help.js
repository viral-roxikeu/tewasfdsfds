module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#C7FF00')
            .setTitle('Příkazy')
            .setURL('https://www.youtube.com/channel/UCDhbjIJIpHrlaPgBid38DkQ')
            .setAuthor('Sub To Challenger_', 'https://yt3.ggpht.com/YZoLhrrDrz33TcLfIQbcOVOSK_9lw2hwWvKTAObcbpu0zQmY1nR_A_RUYktx29Mf9T75Kb0Y=s900-c-k-c0x00ffffff-no-rj')
            .setDescription('Bot by 𝓡𝓸𝔁𝓲𝓴𝓔𝓤')
            .addFields(
                { name: 'Youtube Link', value: '-youtube' },
                { name: 'Donate Link', value: '-donate' },
                { name: 'Help', value: '-help' },
                { name: '(Jen pro〘⚔️〙Discord Moderátor ) Clear', value: '-clear' },
                { name: '(Jen pro〘⚔️〙Discord Moderátor ) Mute', value: '-mute (Uživatel)' },
                { name: '(Jen pro〘⚔️〙Discord Moderátor ) Unmute', value: '-unmute (Uživatel)' },
                { name: '(Jen pro Moderátory ) Ban', value: '-ban (Uživatel)' },
                { name: '(Jen pro Moderátory ) Kick', value: '-kick (Uživatel)' }
            )
            .setImage('https://yt3.ggpht.com/YZoLhrrDrz33TcLfIQbcOVOSK_9lw2hwWvKTAObcbpu0zQmY1nR_A_RUYktx29Mf9T75Kb0Y=s900-c-k-c0x00ffffff-no-rj')
            .setTimestamp()
            .setFooter('Sub to challenger_')
        message.channel.send(newEmbed);
    }
}