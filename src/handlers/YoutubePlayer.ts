import { Queue } from '../types/Queue'
import { Client } from '../client/BotClient';
import { Message, VoiceConnection, StreamDispatcher } from 'discord.js';
import ytdl from 'ytdl-core';

export class YoutubePlayer {

    public Queue: Queue<string> = new Queue<string>();
    public Connection: VoiceConnection;
    public Dispatcher: StreamDispatcher;
    public isPlaying: boolean = false;

    public Play = async (url: string, msg: Message, client: Client) => {
        if(!msg.member.voice.channel) {
            msg.channel.send('You must be connected to a voice channel');
            return;
        }
    
        this.Connection = await msg.member.voice.channel.join();
        if(this.isPlaying) {
            this.Queue.Push(url);
            msg.channel.send('Song added to the queue');
            return;
        }
    
        this.Queue.Push(url);
        this.isPlaying = true;
        this.Player(client, msg);
        return;
    }

    public Skip = (client: Client, msg: Message) => {
        this.Player(client, msg);
        msg.channel.send('song skipped');
    }

    private Player = (client: Client, msg: Message ) => {
        if(this.Queue.GetLength() == 0) {
            this.Connection.disconnect();
            this.Connection = undefined;
            return;
        }
    
        this.Dispatcher = this.Connection.play(ytdl(this.Queue.Pop()));
        this.Dispatcher.on('finish', () => {
            this.Player(client, msg);
        });
    }

    public Disconnect = (client: Client, msg: Message) => {
        this.Dispatcher = undefined;
        this.Connection.disconnect();
        this.Connection = undefined;
        this.Queue = new Queue<string>();
        this.isPlaying = false;
    
        msg.channel.send('Disconnected');
    }
}