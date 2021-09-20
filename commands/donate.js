module.exports = {
    name: 'donate',
    description: "donate link command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#C7FF00')
            .setTitle('Donate')
            .setURL('https://streamlabs.com/challengergamescz/tip')
            .setAuthor('Sub To Challenger_', 'https://yt3.ggpht.com/YZoLhrrDrz33TcLfIQbcOVOSK_9lw2hwWvKTAObcbpu0zQmY1nR_A_RUYktx29Mf9T75Kb0Y=s900-c-k-c0x00ffffff-no-rj')
            .setDescription('Bot by 𝓡𝓸𝔁𝓲𝓴𝓔𝓤')
            .addFields(
                { name: 'Donate', value: 'https://streamlabs.com/challengergamescz/tip' },
                { name: 'Sub To Challenger', value: 'https://www.youtube.com/channel/UCDhbjIJIpHrlaPgBid38DkQ' }
            )
            .setImage('https://yt3.ggpht.com/YZoLhrrDrz33TcLfIQbcOVOSK_9lw2hwWvKTAObcbpu0zQmY1nR_A_RUYktx29Mf9T75Kb0Y=s900-c-k-c0x00ffffff-no-rj')
            .setTimestamp()
            .setFooter('Sub to challenger_')
        message.channel.send(newEmbed);
    }
}