import { Client } from '../client/BotClient';
import { Client as DiscordClient, Message } from 'discord.js';
import { prefix } from '../config';

export class CommandHandler {
    private client: Client;
    private DiscordClient: DiscordClient;

    constructor(client: Client, discordClient: DiscordClient) {
        this.client = client;
        this.DiscordClient = discordClient;
    }

    public async Handle(msg: Message) {

        let conn = this.client.DBAccess.connection;
        
        conn.query("SELECT * FROM rate_limited WHERE discordID != 'hmmm';", function(err, results, fields) {
            for(let i = 0; i < results.length; i++) {
                if(results[i].discordID == msg.author.id) {
                    if(msg.channel.id != '767657671008321536') {
                        setTimeout(() => { msg.delete(); }, 30000);
                        msg.author.send('You have been rate limited, your message will be deleted in 30 secs. please use the "rate-limted channel"');
                    }
                }
            }
        });

        if(msg.author.id === this.DiscordClient.user.id) return;
        if(!msg.content.startsWith(prefix)) return;
            
        let command: string = msg.content.split(' ')[0].replace(prefix, '');
        let args : Array<string> = this.GetArgs(msg.content);

        if      (command == 'play')     this.client.youtubePlayer.Play(args[0], msg, this.client);
        else if (command == 'skip')     this.client.youtubePlayer.Skip(this.client, msg);
        else if (command == 'dc')       this.client.youtubePlayer.Disconnect(this.client, msg);
        
        
        /*
        if(msg.channel.id != '767657671008321536') {
            setTimeout(function() {
                msg.delete();
            }, 30000);
            msg.author.send('You have been rate limited, youre message will be deleted in 30 secs. You can use the "rate-limited" room if you dont want youre messages deleted');
        }
        */
    }

    private GetArgs(command: string): Array<string> {
        return (command.split(' ').pop()).split(' ');
    }
}