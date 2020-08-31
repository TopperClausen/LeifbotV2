const ytdl = require('ytdl-core');

let playing = false;
const Description = "Plays a song or adds the song to the queue";

let execute = async (msg, q) => {
    if(!playing) voiceChannel = msg.member.voice.channel;

    if(!voiceChannel) return msg.reply("You are not connected to a voicechannel!");

    let url = msg.content.split(' ')[1];
    
    connection = await voiceChannel.join();
    if(q.length > 0) {
        q.push(url, connection);
        return msg.channel.send("Song added to queue");
    }
    
    q.push(url);
    play(q, connection, msg);
    
}

let play = (q, connection, msg) => {
    if(q.length == 0) {
        connection.leave();
        return;
    }

    const dispatcher = connection.play(ytdl(q[0]));
    dispatcher.on('finish', () => {
        q.shift();
        msg.channel.send("Now playing next song in queue");
        play(q, connection, msg);
    });
    dispatcher.on('error', error => console.log(error));
    connection.on('disconnect', () => q = [])
}

module.exports = { execute: execute, play: play, Description: Description }