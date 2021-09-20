module.exports = async (client) => {
    const guild = client.guilds.cache.get('779082852469702716');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('871449696340680784');
        channel.setName(`členové: ${memberCount.toLocaleString()}`).catch(console.error);
        console.log('Updating Member Count');
    }, 15000);
}