let execute = async (msg, q) => {
    let voicechannel = msg.member.voice.channel;
    let connection = await voicechannel.join();

    q = [];
    connection.disconnect();
}

module.exports = { execute: execute }