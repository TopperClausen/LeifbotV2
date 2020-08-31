const Description = "Skips the current song";

let execute = async (msg, q) => {
    let channel = msg.member.voice.channel;
    let connection = await channel.join();
    q.shift();
    require('./p.js').play(q, connection, msg);
    msg.channel.send("Song skipped");

}

module.exports = { execute: execute, Description: Description}