import { Client } from '../client/BotClient';
import { Client as DiscordClient, Message } from 'discord.js';
import { prefix } from '../config';
import { YoutubePlayer } from './YoutubePlayer';

export class CommandHandler {
    private client: Client;
    private DiscordClient: DiscordClient;

    constructor(client: Client, discordClient: DiscordClient) {
        this.client = client;
        this.DiscordClient = discordClient;
    }

    public Handle(msg: Message, player: YoutubePlayer) : void {
        if(msg.author.id === this.DiscordClient.user.id) return;
        if(!msg.content.startsWith(prefix)) return;
            
        let command: string = msg.content.split(' ')[0].replace(prefix, '');
        let args : Array<string> = this.GetArgs(msg.content);

        if(command == 'play') {
            player.Play(args[0], msg, this.client);
        } else if (command == 'skip'){
            player.Skip(this.client, msg);
        } else if (command == 'dc') {
            player.Disconnect(this.client, msg);
        }
    }

    private GetArgs(command: string): Array<string> {
        return (command.split(' ').pop()).split(' ');
    }
}