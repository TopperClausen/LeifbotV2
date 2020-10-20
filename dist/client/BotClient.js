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
        this.commandHandler = new commandHandler_1.CommandHandler(this, this.client);
        this.youtubePlayer = new YoutubePlayer_1.YoutubePlayer();
        this.DBAccess = new DBAccess_1.DBAccess();
    }
    Init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Bot starting");
            this.DBAccess.connection.query("SELECT * FROM tokens WHERE name = 'leifbot';", (err, results, fields) => {
                if (err)
                    throw new Error('Token was not found on the database!');
                this.token = results[0].token;
                console.log(this.token);
                this.client.on('ready', () => {
                    console.log('READY!');
                });
                this.client.on('message', (msg) => this.commandHandler.Handle(msg));
                this.client.on('guildMemberAdd', (member) => this.OnMemberJoin(member));
                this.client.login(this.token);
            });
        });
    }
    OnMemberJoin(member) {
        let role = member.guild.roles.cache.find(role => role.name.toLowerCase() == config_1.welcomeRole);
        member.roles.add(role);
        member.send('Welcome to The Kingdom Of Leif!');
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBQ3hDLDJDQUE2RztBQUM3RywrREFBNEQ7QUFDNUQsNkRBQXlEO0FBQ3pELGdEQUE2QztBQUk3QyxNQUFhLE1BQU07SUFBbkI7UUFDWSxXQUFNLEdBQW1CLElBQUksbUJBQWEsRUFBRSxDQUFDO1FBRTdDLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhFLGtCQUFhLEdBQWtCLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQ25ELGFBQVEsR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQTZCL0MsQ0FBQztJQTNCZ0IsSUFBSTs7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTVCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsRUFDN0UsQ0FBQyxHQUFHLEVBQUUsT0FBdUIsRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBRyxHQUFHO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztnQkFFaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtnQkFFcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRU8sWUFBWSxDQUFDLE1BQW1CO1FBQ3BDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLG9CQUFXLENBQUMsQ0FBQztRQUN6RixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKO0FBbkNELHdCQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlbGNvbWVSb2xlIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IENsaWVudCBhcyBEaXNjb3JkQ2xpZW50LCBNZXNzYWdlLCBWb2ljZUNvbm5lY3Rpb24sIFN0cmVhbURpc3BhdGNoZXIsIEd1aWxkTWVtYmVyfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vaGFuZGxlcnMvY29tbWFuZEhhbmRsZXInO1xuaW1wb3J0IHsgWW91dHViZVBsYXllciB9IGZyb20gJy4uL2hhbmRsZXJzL1lvdXR1YmVQbGF5ZXInXG5pbXBvcnQgeyBEQkFjY2VzcyB9IGZyb20gJy4uL3R5cGVzL0RCQWNjZXNzJztcblxuaW1wb3J0IHsgdG9rZW5zIH0gZnJvbSAnLi4vdHlwZXMvREJUeXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBDbGllbnQge1xuICAgIHByaXZhdGUgY2xpZW50OiBEaXNjb3JkQ2xpZW50ID0gIG5ldyBEaXNjb3JkQ2xpZW50KCk7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyID0gbmV3IENvbW1hbmRIYW5kbGVyKHRoaXMsIHRoaXMuY2xpZW50KTtcbiAgICBcbiAgICBwdWJsaWMgeW91dHViZVBsYXllcjogWW91dHViZVBsYXllciA9IG5ldyBZb3V0dWJlUGxheWVyKCk7XG4gICAgcHVibGljIERCQWNjZXNzOiBEQkFjY2VzcyA9IG5ldyBEQkFjY2VzcygpO1xuXG4gICAgcHVibGljIGFzeW5jIEluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm90IHN0YXJ0aW5nXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5EQkFjY2Vzcy5jb25uZWN0aW9uLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSB0b2tlbnMgV0hFUkUgbmFtZSA9ICdsZWlmYm90JztcIiwgXG4gICAgICAgIChlcnIsIHJlc3VsdHMgOiBBcnJheTx0b2tlbnM+LCBmaWVsZHMpID0+IHtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgbmV3IEVycm9yKCdUb2tlbiB3YXMgbm90IGZvdW5kIG9uIHRoZSBkYXRhYmFzZSEnKTtcbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gcmVzdWx0c1swXS50b2tlbjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9rZW4pO1xuXG4gICAgICAgICAgICB0aGlzLmNsaWVudC5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFQURZIScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2xpZW50Lm9uKCdtZXNzYWdlJywgKG1zZzogTWVzc2FnZSkgPT4gdGhpcy5jb21tYW5kSGFuZGxlci5IYW5kbGUobXNnKSk7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5vbignZ3VpbGRNZW1iZXJBZGQnLCAobWVtYmVyOiBHdWlsZE1lbWJlcikgPT4gdGhpcy5Pbk1lbWJlckpvaW4obWVtYmVyKSlcblxuICAgICAgICAgICAgdGhpcy5jbGllbnQubG9naW4odGhpcy50b2tlbik7XG4gICAgICAgIH0pOyAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIE9uTWVtYmVySm9pbihtZW1iZXI6IEd1aWxkTWVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCByb2xlID0gbWVtYmVyLmd1aWxkLnJvbGVzLmNhY2hlLmZpbmQocm9sZSA9PiByb2xlLm5hbWUudG9Mb3dlckNhc2UoKSA9PSB3ZWxjb21lUm9sZSk7XG4gICAgICAgIG1lbWJlci5yb2xlcy5hZGQocm9sZSk7XG5cbiAgICAgICAgbWVtYmVyLnNlbmQoJ1dlbGNvbWUgdG8gVGhlIEtpbmdkb20gT2YgTGVpZiEnKTtcbiAgICB9XG59Il19