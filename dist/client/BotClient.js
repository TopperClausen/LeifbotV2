"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const config_1 = require("../config");
const discord_js_1 = require("discord.js");
const commandHandler_1 = require("../handlers/commandHandler");
const YoutubePlayer_1 = require("../handlers/YoutubePlayer");
class Client {
    constructor() {
        this.client = new discord_js_1.Client();
        this.token = config_1.token;
        this.commandHandler = new commandHandler_1.CommandHandler(this, this.client);
        this.youtubePlayer = new YoutubePlayer_1.YoutubePlayer();
        this.isPlaying = false;
    }
    Init() {
        console.log("Bot starting");
        this.client.on('ready', () => {
            console.log('READY!');
        });
        this.client.on('message', (msg) => this.commandHandler.Handle(msg));
        this.client.login(this.token);
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtDO0FBQ2xDLDJDQUFnRztBQUNoRywrREFBNEQ7QUFDNUQsNkRBQXlEO0FBRXpELE1BQWEsTUFBTTtJQUFuQjtRQUNZLFdBQU0sR0FBbUIsSUFBSSxtQkFBYSxFQUFFLENBQUM7UUFDN0MsVUFBSyxHQUFXLGNBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFtQixJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RSxrQkFBYSxHQUFrQixJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUluRCxjQUFTLEdBQVksS0FBSyxDQUFDO0lBYXRDLENBQUM7SUFYVSxJQUFJO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQXRCRCx3QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2tlbiB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBDbGllbnQgYXMgRGlzY29yZENsaWVudCwgTWVzc2FnZSwgVm9pY2VDb25uZWN0aW9uLCBTdHJlYW1EaXNwYXRjaGVyfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vaGFuZGxlcnMvY29tbWFuZEhhbmRsZXInO1xuaW1wb3J0IHsgWW91dHViZVBsYXllciB9IGZyb20gJy4uL2hhbmRsZXJzL1lvdXR1YmVQbGF5ZXInXG5cbmV4cG9ydCBjbGFzcyBDbGllbnQge1xuICAgIHByaXZhdGUgY2xpZW50OiBEaXNjb3JkQ2xpZW50ID0gIG5ldyBEaXNjb3JkQ2xpZW50KCk7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nID0gdG9rZW47XG4gICAgcHJpdmF0ZSBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywgdGhpcy5jbGllbnQpO1xuICAgIFxuICAgIHB1YmxpYyB5b3V0dWJlUGxheWVyOiBZb3V0dWJlUGxheWVyID0gbmV3IFlvdXR1YmVQbGF5ZXIoKTtcblxuICAgIHB1YmxpYyBDb25uZWN0aW9uOiBWb2ljZUNvbm5lY3Rpb247XG4gICAgcHVibGljIERpc3BhdGNoZXI6IFN0cmVhbURpc3BhdGNoZXI7XG4gICAgcHVibGljIGlzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIEluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm90IHN0YXJ0aW5nXCIpO1xuXG4gICAgICAgIHRoaXMuY2xpZW50Lm9uKCdyZWFkeScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRUFEWSEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGllbnQub24oJ21lc3NhZ2UnLCAobXNnOiBNZXNzYWdlKSA9PiB0aGlzLmNvbW1hbmRIYW5kbGVyLkhhbmRsZShtc2cpKTtcblxuICAgICAgICB0aGlzLmNsaWVudC5sb2dpbih0aGlzLnRva2VuKTtcbiAgICB9XG59Il19