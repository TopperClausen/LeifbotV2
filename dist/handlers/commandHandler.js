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
exports.CommandHandler = void 0;
const config_1 = require("../config");
const rateLimiter_1 = require("../commands/rateLimiter");
class CommandHandler {
    constructor(client, discordClient) {
        this.RateLimiter = new rateLimiter_1.rateLimiter(this);
        this.client = client;
        this.DiscordClient = discordClient;
    }
    Handle(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = this.client.DBAccess.connection;
            conn.query("SELECT * FROM rate_limited WHERE discordID != 'hmmm';", function (err, results, fields) {
                for (let i = 0; i < results.length; i++) {
                    if (results[i].discordID == msg.author.id) {
                        if (msg.channel.id != '767657671008321536') {
                            setTimeout(() => { msg.delete(); }, 30000);
                        }
                    }
                }
            });
            if (msg.author.id === this.DiscordClient.user.id)
                return;
            if (!msg.content.startsWith(config_1.prefix))
                return;
            let command = msg.content.split(' ')[0].replace(config_1.prefix, '');
            let args = this.GetArgs(msg.content);
            console.log(args);
            if (command == 'play')
                this.client.youtubePlayer.Play(args[0], msg, this.client);
            else if (command == 'skip')
                this.client.youtubePlayer.Skip(this.client, msg);
            else if (command == 'dc')
                this.client.youtubePlayer.Disconnect(this.client, msg);
            else if (command == 'limit')
                this.RateLimiter.handle(args, msg);
            /*
            if(msg.channel.id != '767657671008321536') {
                setTimeout(function() {
                    msg.delete();
                }, 30000);
                msg.author.send('You have been rate limited, youre message will be deleted in 30 secs. You can use the "rate-limited" room if you dont want youre messages deleted');
            }
            */
        });
    }
    GetArgs(command) {
        let cmdArray = command.split(' ');
        let response = new Array();
        for (let i = 1; i < cmdArray.length; i++) {
            response.push(cmdArray[i]);
        }
        return response;
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvY29tbWFuZEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsc0NBQW1DO0FBRW5DLHlEQUFzRDtBQUV0RCxNQUFhLGNBQWM7SUFLdkIsWUFBWSxNQUFjLEVBQUUsYUFBNEI7UUFIakQsZ0JBQVcsR0FBZ0IsSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSXBELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFWSxNQUFNLENBQUMsR0FBWTs7WUFFNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsdURBQXVELEVBQUUsVUFBUyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU07Z0JBQzdGLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNwQyxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7d0JBQ3RDLElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksb0JBQW9CLEVBQUU7NEJBQ3ZDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7eUJBQzlDO3FCQUNKO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsT0FBTztZQUN4RCxJQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBTSxDQUFDO2dCQUFFLE9BQU87WUFFM0MsSUFBSSxPQUFPLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLElBQUksR0FBbUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUVqQixJQUFTLE9BQU8sSUFBSSxNQUFNO2dCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDckYsSUFBSSxPQUFPLElBQUksTUFBTTtnQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDNUUsSUFBSSxPQUFPLElBQUksSUFBSTtnQkFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDbEYsSUFBSSxPQUFPLElBQUksT0FBTztnQkFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFHbkU7Ozs7Ozs7Y0FPRTtRQUNOLENBQUM7S0FBQTtJQUVPLE9BQU8sQ0FBQyxPQUFlO1FBQzNCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQWtCLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbEQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXZERCx3Q0F1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi9jbGllbnQvQm90Q2xpZW50JztcbmltcG9ydCB7IENsaWVudCBhcyBEaXNjb3JkQ2xpZW50LCBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgeyBwcmVmaXggfSBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQgeyByYXRlTGltaXRlciB9IGZyb20gJy4uL2NvbW1hbmRzL3JhdGVMaW1pdGVyJztcblxuZXhwb3J0IGNsYXNzIENvbW1hbmRIYW5kbGVyIHtcbiAgICBwdWJsaWMgY2xpZW50OiBDbGllbnQ7XG4gICAgcHVibGljIFJhdGVMaW1pdGVyOiByYXRlTGltaXRlciA9IG5ldyByYXRlTGltaXRlcih0aGlzKTtcbiAgICBwcml2YXRlIERpc2NvcmRDbGllbnQ6IERpc2NvcmRDbGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6IENsaWVudCwgZGlzY29yZENsaWVudDogRGlzY29yZENsaWVudCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5EaXNjb3JkQ2xpZW50ID0gZGlzY29yZENsaWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgSGFuZGxlKG1zZzogTWVzc2FnZSkge1xuXG4gICAgICAgIGxldCBjb25uID0gdGhpcy5jbGllbnQuREJBY2Nlc3MuY29ubmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbm4ucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHJhdGVfbGltaXRlZCBXSEVSRSBkaXNjb3JkSUQgIT0gJ2htbW0nO1wiLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihyZXN1bHRzW2ldLmRpc2NvcmRJRCA9PSBtc2cuYXV0aG9yLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG1zZy5jaGFubmVsLmlkICE9ICc3Njc2NTc2NzEwMDgzMjE1MzYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgbXNnLmRlbGV0ZSgpOyB9LCAzMDAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKG1zZy5hdXRob3IuaWQgPT09IHRoaXMuRGlzY29yZENsaWVudC51c2VyLmlkKSByZXR1cm47XG4gICAgICAgIGlmKCFtc2cuY29udGVudC5zdGFydHNXaXRoKHByZWZpeCkpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgY29tbWFuZDogc3RyaW5nID0gbXNnLmNvbnRlbnQuc3BsaXQoJyAnKVswXS5yZXBsYWNlKHByZWZpeCwgJycpO1xuICAgICAgICBsZXQgYXJncyA6IEFycmF5PHN0cmluZz4gPSB0aGlzLkdldEFyZ3MobXNnLmNvbnRlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzKVxuXG4gICAgICAgIGlmICAgICAgKGNvbW1hbmQgPT0gJ3BsYXknKSAgICAgdGhpcy5jbGllbnQueW91dHViZVBsYXllci5QbGF5KGFyZ3NbMF0sIG1zZywgdGhpcy5jbGllbnQpO1xuICAgICAgICBlbHNlIGlmIChjb21tYW5kID09ICdza2lwJykgICAgIHRoaXMuY2xpZW50LnlvdXR1YmVQbGF5ZXIuU2tpcCh0aGlzLmNsaWVudCwgbXNnKTtcbiAgICAgICAgZWxzZSBpZiAoY29tbWFuZCA9PSAnZGMnKSAgICAgICB0aGlzLmNsaWVudC55b3V0dWJlUGxheWVyLkRpc2Nvbm5lY3QodGhpcy5jbGllbnQsIG1zZyk7XG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQgPT0gJ2xpbWl0JykgICAgdGhpcy5SYXRlTGltaXRlci5oYW5kbGUoYXJncywgbXNnKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICBpZihtc2cuY2hhbm5lbC5pZCAhPSAnNzY3NjU3NjcxMDA4MzIxNTM2Jykge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBtc2cuZGVsZXRlKCk7XG4gICAgICAgICAgICB9LCAzMDAwMCk7XG4gICAgICAgICAgICBtc2cuYXV0aG9yLnNlbmQoJ1lvdSBoYXZlIGJlZW4gcmF0ZSBsaW1pdGVkLCB5b3VyZSBtZXNzYWdlIHdpbGwgYmUgZGVsZXRlZCBpbiAzMCBzZWNzLiBZb3UgY2FuIHVzZSB0aGUgXCJyYXRlLWxpbWl0ZWRcIiByb29tIGlmIHlvdSBkb250IHdhbnQgeW91cmUgbWVzc2FnZXMgZGVsZXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBHZXRBcmdzKGNvbW1hbmQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBsZXQgY21kQXJyYXkgPSBjb21tYW5kLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCByZXNwb25zZTogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjbWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzcG9uc2UucHVzaChjbWRBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn0iXX0=