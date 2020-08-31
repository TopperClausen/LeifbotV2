const Description = "Disconnects the bot from the current voice chat, and resets the queue";

let execute = async (msg, q) => {
    let voicechannel = msg.member.voice.channel;
    let connection = await voicechannel.join();

    q = [];
    connection.disconnect();
}

module.exports = { execute: execute, Description: Description }