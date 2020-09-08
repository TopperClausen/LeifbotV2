import { token, prefix } from '../config';
import { Queue } from '../types/Queue'
import { Client as DiscordClient, Message, VoiceConnection, StreamDispatcher} from 'discord.js';
import { Play, Skip, Disconnect } from '../commands/play';
import { CommandHandler } from '../handlers/commandHandler';

export class Client {
    private client: DiscordClient =  new DiscordClient();
    private token: string = token;
    private commandHandler: CommandHandler = new CommandHandler(this, this.client);

    public Queue: Queue<string> = new Queue<string>();
    public Connection: VoiceConnection;
    public Dispatcher: StreamDispatcher;
    public isPlaying: boolean = false;

    public Init(): void {
        console.log("Bot starting");

        this.client.on('ready', () => {
            console.log('READY!');
        });

        this.client.on('message', (msg: Message) => this.commandHandler.Handle(msg));

        this.client.login(this.token);
    }
}