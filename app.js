const Discord = require('discord.js');

let Client = new Discord.Client();

let q = [];

Client.on('ready', () => {
    console.log('Logged in');
});

Client.on('message', msg => {
    if(msg.content[0] != '!') return;
    if(msg.channel.type === 'dm') return;

    var command = msg.content.split(' ')[0].replace('!', '');

    try {
        require('./commands/' + command + '.js').execute(msg, q);
    }catch(err) {
        return msg.channel.send("Unkown command, try !help");
    }

});

Client.on('guildMemberAdd', member => {
    let role = member.guild.roles.cache.find(r => r.name === "Peasants");
    member.roles.add(role);
    
    member.send("Welcome to the Kingdom Of Leif! 👑");
    return;
})

Client.login("NTg0NDgwMDc1NzQ0MDE4NDYz.XeaApQ.OyfNxXNn-bPh53NX61PdiHkRwto");