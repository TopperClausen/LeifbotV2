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
class CommandHandler {
    constructor(client, discordClient) {
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
                            setTimeout(() => { msg.delete(); }, 3000);
                            msg.author.send('You have been rate limited, your message has been deleted. please use the "rate-limted channel"');
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
            if (command == 'play')
                this.client.youtubePlayer.Play(args[0], msg, this.client);
            else if (command == 'skip')
                this.client.youtubePlayer.Skip(this.client, msg);
            else if (command == 'dc')
                this.client.youtubePlayer.Disconnect(this.client, msg);
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
        return (command.split(' ').pop()).split(' ');
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvY29tbWFuZEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsc0NBQW1DO0FBRW5DLE1BQWEsY0FBYztJQUl2QixZQUFZLE1BQWMsRUFBRSxhQUE0QjtRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRVksTUFBTSxDQUFDLEdBQVk7O1lBRTVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxFQUFFLFVBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNO2dCQUM3RixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO3dCQUN0QyxJQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLG9CQUFvQixFQUFFOzRCQUN2QyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpR0FBaUcsQ0FBQyxDQUFDO3lCQUN0SDtxQkFDSjtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUFFLE9BQU87WUFDeEQsSUFBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQztnQkFBRSxPQUFPO1lBRTNDLElBQUksT0FBTyxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEUsSUFBSSxJQUFJLEdBQW1CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJELElBQVMsT0FBTyxJQUFJLE1BQU07Z0JBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNyRixJQUFJLE9BQU8sSUFBSSxNQUFNO2dCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUM1RSxJQUFJLE9BQU8sSUFBSSxJQUFJO2dCQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBR3ZGOzs7Ozs7O2NBT0U7UUFDTixDQUFDO0tBQUE7SUFFTyxPQUFPLENBQUMsT0FBZTtRQUMzQixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0o7QUFoREQsd0NBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vY2xpZW50L0JvdENsaWVudCc7XG5pbXBvcnQgeyBDbGllbnQgYXMgRGlzY29yZENsaWVudCwgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnO1xuaW1wb3J0IHsgcHJlZml4IH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIENvbW1hbmRIYW5kbGVyIHtcbiAgICBwcml2YXRlIGNsaWVudDogQ2xpZW50O1xuICAgIHByaXZhdGUgRGlzY29yZENsaWVudDogRGlzY29yZENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDogQ2xpZW50LCBkaXNjb3JkQ2xpZW50OiBEaXNjb3JkQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLkRpc2NvcmRDbGllbnQgPSBkaXNjb3JkQ2xpZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBIYW5kbGUobXNnOiBNZXNzYWdlKSB7XG5cbiAgICAgICAgbGV0IGNvbm4gPSB0aGlzLmNsaWVudC5EQkFjY2Vzcy5jb25uZWN0aW9uO1xuICAgICAgICBcbiAgICAgICAgY29ubi5xdWVyeShcIlNFTEVDVCAqIEZST00gcmF0ZV9saW1pdGVkIFdIRVJFIGRpc2NvcmRJRCAhPSAnaG1tbSc7XCIsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cywgZmllbGRzKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdHNbaV0uZGlzY29yZElEID09IG1zZy5hdXRob3IuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYobXNnLmNoYW5uZWwuaWQgIT0gJzc2NzY1NzY3MTAwODMyMTUzNicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBtc2cuZGVsZXRlKCk7IH0sIDMwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmF1dGhvci5zZW5kKCdZb3UgaGF2ZSBiZWVuIHJhdGUgbGltaXRlZCwgeW91ciBtZXNzYWdlIGhhcyBiZWVuIGRlbGV0ZWQuIHBsZWFzZSB1c2UgdGhlIFwicmF0ZS1saW10ZWQgY2hhbm5lbFwiJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKG1zZy5hdXRob3IuaWQgPT09IHRoaXMuRGlzY29yZENsaWVudC51c2VyLmlkKSByZXR1cm47XG4gICAgICAgIGlmKCFtc2cuY29udGVudC5zdGFydHNXaXRoKHByZWZpeCkpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgY29tbWFuZDogc3RyaW5nID0gbXNnLmNvbnRlbnQuc3BsaXQoJyAnKVswXS5yZXBsYWNlKHByZWZpeCwgJycpO1xuICAgICAgICBsZXQgYXJncyA6IEFycmF5PHN0cmluZz4gPSB0aGlzLkdldEFyZ3MobXNnLmNvbnRlbnQpO1xuXG4gICAgICAgIGlmICAgICAgKGNvbW1hbmQgPT0gJ3BsYXknKSAgICAgdGhpcy5jbGllbnQueW91dHViZVBsYXllci5QbGF5KGFyZ3NbMF0sIG1zZywgdGhpcy5jbGllbnQpO1xuICAgICAgICBlbHNlIGlmIChjb21tYW5kID09ICdza2lwJykgICAgIHRoaXMuY2xpZW50LnlvdXR1YmVQbGF5ZXIuU2tpcCh0aGlzLmNsaWVudCwgbXNnKTtcbiAgICAgICAgZWxzZSBpZiAoY29tbWFuZCA9PSAnZGMnKSAgICAgICB0aGlzLmNsaWVudC55b3V0dWJlUGxheWVyLkRpc2Nvbm5lY3QodGhpcy5jbGllbnQsIG1zZyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgaWYobXNnLmNoYW5uZWwuaWQgIT0gJzc2NzY1NzY3MTAwODMyMTUzNicpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbXNnLmRlbGV0ZSgpO1xuICAgICAgICAgICAgfSwgMzAwMDApO1xuICAgICAgICAgICAgbXNnLmF1dGhvci5zZW5kKCdZb3UgaGF2ZSBiZWVuIHJhdGUgbGltaXRlZCwgeW91cmUgbWVzc2FnZSB3aWxsIGJlIGRlbGV0ZWQgaW4gMzAgc2Vjcy4gWW91IGNhbiB1c2UgdGhlIFwicmF0ZS1saW1pdGVkXCIgcm9vbSBpZiB5b3UgZG9udCB3YW50IHlvdXJlIG1lc3NhZ2VzIGRlbGV0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgIH1cblxuICAgIHByaXZhdGUgR2V0QXJncyhjb21tYW5kOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIChjb21tYW5kLnNwbGl0KCcgJykucG9wKCkpLnNwbGl0KCcgJyk7XG4gICAgfVxufSJdfQ==