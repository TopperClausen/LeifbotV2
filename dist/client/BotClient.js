"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const config_1 = require("../config");
const discord_js_1 = require("discord.js");
const commandHandler_1 = require("../handlers/commandHandler");
const YoutubePlayer_1 = require("../handlers/YoutubePlayer");
const DBAccess_1 = require("../types/DBAccess");
class Client {
    constructor() {
        this.client = new discord_js_1.Client();
        this.token = config_1.token;
        this.commandHandler = new commandHandler_1.CommandHandler(this, this.client);
        this.youtubePlayer = new YoutubePlayer_1.YoutubePlayer();
        this.DBAccess = new DBAccess_1.DBAccess();
    }
    Init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Bot starting");
            this.client.on('ready', () => {
                console.log('READY!');
            });
            this.client.on('message', (msg) => __awaiter(this, void 0, void 0, function* () { return yield this.commandHandler.Handle(msg); }));
            this.client.on('guildMemberAdd', (member) => this.OnMemberJoin(member));
            this.client.login(this.token);
        });
    }
    OnMemberJoin(member) {
        let role = member.guild.roles.cache.find(role => role.name.toLowerCase() == config_1.welcomeRole);
        member.roles.add(role);
        member.send('Welcome to The Kingdom Of Leif!');
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQStDO0FBQy9DLDJDQUE2RztBQUM3RywrREFBNEQ7QUFDNUQsNkRBQXlEO0FBQ3pELGdEQUE2QztBQUU3QyxNQUFhLE1BQU07SUFBbkI7UUFDWSxXQUFNLEdBQW1CLElBQUksbUJBQWEsRUFBRSxDQUFDO1FBQzdDLFVBQUssR0FBVyxjQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEUsa0JBQWEsR0FBa0IsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDbkQsYUFBUSxHQUFhLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBcUIvQyxDQUFDO0lBbkJnQixJQUFJOztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFPLEdBQVksRUFBRSxFQUFFLGdEQUFDLE9BQUEsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQztZQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUVwRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRU8sWUFBWSxDQUFDLE1BQW1CO1FBQ3BDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLG9CQUFXLENBQUMsQ0FBQztRQUN6RixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKO0FBM0JELHdCQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRva2VuLCB3ZWxjb21lUm9sZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBDbGllbnQgYXMgRGlzY29yZENsaWVudCwgTWVzc2FnZSwgVm9pY2VDb25uZWN0aW9uLCBTdHJlYW1EaXNwYXRjaGVyLCBHdWlsZE1lbWJlcn0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2hhbmRsZXJzL2NvbW1hbmRIYW5kbGVyJztcbmltcG9ydCB7IFlvdXR1YmVQbGF5ZXIgfSBmcm9tICcuLi9oYW5kbGVycy9Zb3V0dWJlUGxheWVyJ1xuaW1wb3J0IHsgREJBY2Nlc3MgfSBmcm9tICcuLi90eXBlcy9EQkFjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBDbGllbnQge1xuICAgIHByaXZhdGUgY2xpZW50OiBEaXNjb3JkQ2xpZW50ID0gIG5ldyBEaXNjb3JkQ2xpZW50KCk7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nID0gdG9rZW47XG4gICAgcHJpdmF0ZSBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywgdGhpcy5jbGllbnQpO1xuICAgIFxuICAgIHB1YmxpYyB5b3V0dWJlUGxheWVyOiBZb3V0dWJlUGxheWVyID0gbmV3IFlvdXR1YmVQbGF5ZXIoKTtcbiAgICBwdWJsaWMgREJBY2Nlc3M6IERCQWNjZXNzID0gbmV3IERCQWNjZXNzKCk7XG5cbiAgICBwdWJsaWMgYXN5bmMgSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCb3Qgc3RhcnRpbmdcIik7XG5cbiAgICAgICAgdGhpcy5jbGllbnQub24oJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFQURZIScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNsaWVudC5vbignbWVzc2FnZScsIGFzeW5jIChtc2c6IE1lc3NhZ2UpID0+IGF3YWl0IHRoaXMuY29tbWFuZEhhbmRsZXIuSGFuZGxlKG1zZykpO1xuICAgICAgICB0aGlzLmNsaWVudC5vbignZ3VpbGRNZW1iZXJBZGQnLCAobWVtYmVyOiBHdWlsZE1lbWJlcikgPT4gdGhpcy5Pbk1lbWJlckpvaW4obWVtYmVyKSlcblxuICAgICAgICB0aGlzLmNsaWVudC5sb2dpbih0aGlzLnRva2VuKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIE9uTWVtYmVySm9pbihtZW1iZXI6IEd1aWxkTWVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCByb2xlID0gbWVtYmVyLmd1aWxkLnJvbGVzLmNhY2hlLmZpbmQocm9sZSA9PiByb2xlLm5hbWUudG9Mb3dlckNhc2UoKSA9PSB3ZWxjb21lUm9sZSk7XG4gICAgICAgIG1lbWJlci5yb2xlcy5hZGQocm9sZSk7XG5cbiAgICAgICAgbWVtYmVyLnNlbmQoJ1dlbGNvbWUgdG8gVGhlIEtpbmdkb20gT2YgTGVpZiEnKTtcbiAgICB9XG59Il19