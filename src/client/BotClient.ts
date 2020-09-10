import { token } from '../config';
import { Client as DiscordClient, Message, VoiceConnection, StreamDispatcher} from 'discord.js';
import { CommandHandler } from '../handlers/commandHandler';
import { YoutubePlayer } from '../handlers/YoutubePlayer'

export class Client {
    private client: DiscordClient =  new DiscordClient();
    private token: string = token;
    private commandHandler: CommandHandler = new CommandHandler(this, this.client);
    private youtubePlayer: YoutubePlayer = new YoutubePlayer();

    public Connection: VoiceConnection;
    public Dispatcher: StreamDispatcher;
    public isPlaying: boolean = false;

    public Init(): void {
        console.log("Bot starting");

        this.client.on('ready', () => {
            console.log('READY!');
        });

        this.client.on('message', (msg: Message) => this.commandHandler.Handle(msg, this.youtubePlayer));

        this.client.login(this.token);
    }
}