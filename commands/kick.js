module.exports = {
    name: 'kick',
    description: "kick command",
    async execute(message, args) {
        if (message.member.permissions.has("KICK_MEMBERS")) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`<@${memberTarget.user.id}> byl vyhozen`);
            } else {
                message.channel.send('Nelze vyhodit tohoto uživatele!');
            }
        } else {
            message.channel.reply('Nemáš povolení vyhodit tohoto uživatele!')
        }
    }
}