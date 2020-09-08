import { Message, VoiceConnection, StreamDispatcher, ClientVoiceManager } from 'discord.js';
import { Client } from '../client/BotClient';
import { Queue } from '../types/Queue';
import ytdl from 'ytdl-core';

export let Play = async (url: string, msg: Message, client: Client) => {
    if(!msg.member.voice.channel) {
        msg.channel.send('You must be connected to a voice channel');
        return;
    }

    client.Connection = await msg.member.voice.channel.join();
    if(client.isPlaying) {
        client.Queue.Push(url);
        msg.channel.send('Song added to the queue');
        return;
    }

    client.Queue.Push(url);
    client.isPlaying = true;
    Player(client, msg);
    return;
}

export let Skip = (client: Client, msg: Message) => {
    Player(client, msg);
    msg.channel.send('song skipped');
}

let Player = (client: Client, msg: Message ) => {
    if(client.Queue.GetLength() == 0) {
        client.Connection.disconnect();
        client.Connection = undefined;
        return;
    }

    client.Dispatcher = client.Connection.play(ytdl(client.Queue.Pop()));
    client.Dispatcher.on('finish', () => {
        Player(client, msg);
    });
}

export let Disconnect = (client: Client, msg: Message) => {
    client.Dispatcher = undefined;
    client.Connection.disconnect();
    client.Connection = undefined;
    client.Queue = new Queue<string>();
    client.isPlaying = false;

    msg.channel.send('Disconnected');
}