import { Queue } from '../types/Queue'
import { Client } from '../client/BotClient';
import { Message } from 'discord.js';
import ytdl from 'ytdl-core';

export class YoutubePlayer {

    public Queue: Queue<string> = new Queue<string>();

    public Play = async (url: string, msg: Message, client: Client) => {
        if(!msg.member.voice.channel) {
            msg.channel.send('You must be connected to a voice channel');
            return;
        }
    
        client.Connection = await msg.member.voice.channel.join();
        if(client.isPlaying) {
            this.Queue.Push(url);
            msg.channel.send('Song added to the queue');
            return;
        }
    
        this.Queue.Push(url);
        client.isPlaying = true;
        this.Player(client, msg);
        return;
    }

    public Skip = (client: Client, msg: Message) => {
        this.Player(client, msg);
        msg.channel.send('song skipped');
    }

    private Player = (client: Client, msg: Message ) => {
        if(this.Queue.GetLength() == 0) {
            client.Connection.disconnect();
            client.Connection = undefined;
            return;
        }
    
        client.Dispatcher = client.Connection.play(ytdl(this.Queue.Pop()));
        client.Dispatcher.on('finish', () => {
            this.Player(client, msg);
        });
    }

    public Disconnect = (client: Client, msg: Message) => {
        client.Dispatcher = undefined;
        client.Connection.disconnect();
        client.Connection = undefined;
        this.Queue = new Queue<string>();
        client.isPlaying = false;
    
        msg.channel.send('Disconnected');
    }
}