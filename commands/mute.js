module.exports = {
    name: 'mute',
    description: "mute command",
    async execute(message, args) {
        if (message.member.roles.cache.has('779088782107869184')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === '👦🏻┃Diváci');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> byl umlčen!`);
            } else {
                message.channel.send('Tento uživatel neexistuje');
            }
        } else {
            message.reply('Tento příkaz je jen pro discord moderátory!');
        }
    }
}