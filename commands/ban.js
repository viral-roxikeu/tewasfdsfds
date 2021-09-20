const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "ban command",
    async execute(message, args) {

        if (message.member.permissions.has("BAN_MEMBERS")) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> byl zabanován!`);
            } else {
                message.channel.send('Nelze zabanovat tohoto uživatele!');
            }
        } else {
            message.channel.reply('Nemáš povolení zabanovat tohoto uživatele!')
        }




    }
}