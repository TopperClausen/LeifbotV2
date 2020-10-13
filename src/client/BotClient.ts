import { token, welcomeRole } from '../config';
import { Client as DiscordClient, Message, VoiceConnection, StreamDispatcher, GuildMember} from 'discord.js';
import { CommandHandler } from '../handlers/commandHandler';
import { YoutubePlayer } from '../handlers/YoutubePlayer'

export class Client {
    private client: DiscordClient =  new DiscordClient();
    private token: string = token;
    private commandHandler: CommandHandler = new CommandHandler(this, this.client);
    
    public youtubePlayer: YoutubePlayer = new YoutubePlayer();

    public Connection: VoiceConnection;
    public Dispatcher: StreamDispatcher;
    public isPlaying: boolean = false;

    public Init(): void {
        console.log("Bot starting");

        this.client.on('ready', () => {
            console.log('READY!');
        });

        this.client.on('message', (msg: Message) => this.commandHandler.Handle(msg));
        this.client.on('guildMemberAdd', (member: GuildMember) => this.OnMemberJoin(member))

        this.client.login(this.token);
    }

    private OnMemberJoin(member: GuildMember): void {
        let role = member.guild.roles.cache.find(role => role.name.toLowerCase() == welcomeRole);
        member.roles.add(role);

        member.send('Welcome to The Kingdom Of Leif!');
    }
}