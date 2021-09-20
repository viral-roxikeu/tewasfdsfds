module.exports = {
    name: 'demod',
    description: "mod command",
    async execute(message, args) {
        message.member.roles.remove('817342543959162882').catch(console.error);
    }
}