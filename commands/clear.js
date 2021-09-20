module.exports = {
    name: 'clear',
    description: "clear messages from channel",
    async execute(message, args) {
        if (message.member.roles.cache.has('779088782107869184')) {
            if (!args[0]) return message.reply("Nebyl uveden počet zpráv na smazaní!");
            if (isNaN(args[0])) return message.reply("Toto není číslo!");

            if (args[0] > 100) return message.reply("Max je 100!");
            if (args[0] < 1) return message.reply("Min je 1!");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            })
        } else {
            message.reply('Tento příkaz je jen pro discord moderátory!')
        }
    }
}