import { welcomeRole } from '../config';
import { Client as DiscordClient, Message, VoiceConnection, StreamDispatcher, GuildMember} from 'discord.js';
import { CommandHandler } from '../handlers/commandHandler';
import { YoutubePlayer } from '../handlers/YoutubePlayer'
import { DBAccess } from '../types/DBAccess';

import { tokens } from '../types/DBTypes';

export class Client {
    private client: DiscordClient =  new DiscordClient();
    private token: string;
    private commandHandler: CommandHandler = new CommandHandler(this, this.client);
    
    public youtubePlayer: YoutubePlayer = new YoutubePlayer();
    public DBAccess: DBAccess = new DBAccess();

    public async Init() {
        console.log("Bot starting");
        
        this.DBAccess.connection.query("SELECT * FROM tokens WHERE name = 'leifbot';", 
        (err, results : Array<tokens>, fields) => {
            if(err) throw new Error('Token was not found on the database!');
        
            this.token = results[0].token;
            console.log(this.token);

            this.client.on('ready', () => {
                console.log('READY!');
            });

            this.client.on('message', (msg: Message) => this.commandHandler.Handle(msg));
            this.client.on('guildMemberAdd', (member: GuildMember) => this.OnMemberJoin(member))

            this.client.login(this.token);
        });       
    }

    private OnMemberJoin(member: GuildMember): void {
        let role = member.guild.roles.cache.find(role => role.name.toLowerCase() == welcomeRole);
        member.roles.add(role);

        member.send('Welcome to The Kingdom Of Leif!');
    }
}