"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const config_1 = require("../config");
const Queue_1 = require("../types/Queue");
const discord_js_1 = require("discord.js");
const commandHandler_1 = require("../handlers/commandHandler");
class Client {
    constructor() {
        this.client = new discord_js_1.Client();
        this.token = config_1.token;
        this.commandHandler = new commandHandler_1.CommandHandler(this, this.client);
        this.Queue = new Queue_1.Queue();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUFzQztBQUN0QywyQ0FBZ0c7QUFFaEcsK0RBQTREO0FBRTVELE1BQWEsTUFBTTtJQUFuQjtRQUNZLFdBQU0sR0FBbUIsSUFBSSxtQkFBYSxFQUFFLENBQUM7UUFDN0MsVUFBSyxHQUFXLGNBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFtQixJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RSxVQUFLLEdBQWtCLElBQUksYUFBSyxFQUFVLENBQUM7UUFHM0MsY0FBUyxHQUFZLEtBQUssQ0FBQztJQWF0QyxDQUFDO0lBWFUsSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFyQkQsd0JBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9rZW4sIHByZWZpeCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4uL3R5cGVzL1F1ZXVlJ1xuaW1wb3J0IHsgQ2xpZW50IGFzIERpc2NvcmRDbGllbnQsIE1lc3NhZ2UsIFZvaWNlQ29ubmVjdGlvbiwgU3RyZWFtRGlzcGF0Y2hlcn0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgeyBQbGF5LCBTa2lwLCBEaXNjb25uZWN0IH0gZnJvbSAnLi4vY29tbWFuZHMvcGxheSc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2hhbmRsZXJzL2NvbW1hbmRIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIENsaWVudCB7XG4gICAgcHJpdmF0ZSBjbGllbnQ6IERpc2NvcmRDbGllbnQgPSAgbmV3IERpc2NvcmRDbGllbnQoKTtcbiAgICBwcml2YXRlIHRva2VuOiBzdHJpbmcgPSB0b2tlbjtcbiAgICBwcml2YXRlIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB0aGlzLmNsaWVudCk7XG5cbiAgICBwdWJsaWMgUXVldWU6IFF1ZXVlPHN0cmluZz4gPSBuZXcgUXVldWU8c3RyaW5nPigpO1xuICAgIHB1YmxpYyBDb25uZWN0aW9uOiBWb2ljZUNvbm5lY3Rpb247XG4gICAgcHVibGljIERpc3BhdGNoZXI6IFN0cmVhbURpc3BhdGNoZXI7XG4gICAgcHVibGljIGlzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIEluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm90IHN0YXJ0aW5nXCIpO1xuXG4gICAgICAgIHRoaXMuY2xpZW50Lm9uKCdyZWFkeScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRUFEWSEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGllbnQub24oJ21lc3NhZ2UnLCAobXNnOiBNZXNzYWdlKSA9PiB0aGlzLmNvbW1hbmRIYW5kbGVyLkhhbmRsZShtc2cpKTtcblxuICAgICAgICB0aGlzLmNsaWVudC5sb2dpbih0aGlzLnRva2VuKTtcbiAgICB9XG59Il19