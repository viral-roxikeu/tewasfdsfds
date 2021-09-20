module.exports = {
    name: 'bum',
    description: "test",
    async execute(message, args) {
        if (message.author.bot) return
        setInterval(function() {
            message.channel.send('bum')
        },)
        }
    }