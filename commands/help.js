const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

let execute = (msg) => {
    let commands = "";

    let dir = path.resolve();

    fs.readdir('./commands', (err, files) => {
        if(err) {
            console.log(err);
            return;
        }
        files.forEach(file => {
            if(file != "help.js"){
              commands += "!" + file.replace('.js', '') + " - " + require('../commands/' + file).Description + " \n";
            }
        });

        let embed = new Discord.MessageEmbed()
        .setTitle("Commands")
        .setDescription(commands)
        .setColor("#63beff");

        return msg.channel.send(embed);
    });
}

module.exports = { execute: execute }