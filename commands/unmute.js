module.exports = {
    name: 'unmute',
    description: "unmute command",
    async execute(message, args) {
        if (message.member.roles.cache.has('779088782107869184')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === '👦🏻┃Diváci');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> byl odmlčen!`);
            } else {
                message.channel.send('Tento uživatel neexistuje');
            }
        } else {
            message.reply('Tento příkaz je jen pro discord moderátory!');
        }
    }
}