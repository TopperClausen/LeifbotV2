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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubePlayer = void 0;
const Queue_1 = require("../types/Queue");
const ytdl_core_1 = __importDefault(require("ytdl-core"));
class YoutubePlayer {
    constructor() {
        this.Queue = new Queue_1.Queue();
        this.isPlaying = false;
        this.Play = (url, msg, client) => __awaiter(this, void 0, void 0, function* () {
            if (!msg.member.voice.channel) {
                msg.channel.send('You must be connected to a voice channel');
                return;
            }
            this.Connection = yield msg.member.voice.channel.join();
            if (this.isPlaying) {
                this.Queue.Push(url);
                msg.channel.send('Song added to the queue');
                return;
            }
            this.Queue.Push(url);
            this.isPlaying = true;
            this.Player(client, msg);
            return;
        });
        this.Skip = (client, msg) => {
            this.Player(client, msg);
            msg.channel.send('song skipped');
        };
        this.Player = (client, msg) => {
            if (this.Queue.GetLength() == 0) {
                this.Connection.disconnect();
                this.Connection = undefined;
                return;
            }
            this.Dispatcher = this.Connection.play(ytdl_core_1.default(this.Queue.Pop()));
            this.Dispatcher.on('finish', () => {
                this.Player(client, msg);
            });
        };
        this.Disconnect = (client, msg) => {
            this.Dispatcher = undefined;
            this.Connection.disconnect();
            this.Connection = undefined;
            this.Queue = new Queue_1.Queue();
            this.isPlaying = false;
            msg.channel.send('Disconnected');
        };
    }
}
exports.YoutubePlayer = YoutubePlayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWW91dHViZVBsYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9Zb3V0dWJlUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFzQztBQUd0QywwREFBNkI7QUFFN0IsTUFBYSxhQUFhO0lBQTFCO1FBRVcsVUFBSyxHQUFrQixJQUFJLGFBQUssRUFBVSxDQUFDO1FBRzNDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsU0FBSSxHQUFHLENBQU8sR0FBVyxFQUFFLEdBQVksRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUM5RCxJQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUMxQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUM3RCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hELElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDNUMsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekIsT0FBTztRQUNYLENBQUMsQ0FBQSxDQUFBO1FBRU0sU0FBSSxHQUFHLENBQUMsTUFBYyxFQUFFLEdBQVksRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQTtRQUVPLFdBQU0sR0FBRyxDQUFDLE1BQWMsRUFBRSxHQUFZLEVBQUcsRUFBRTtZQUMvQyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztnQkFDNUIsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFBO1FBRU0sZUFBVSxHQUFHLENBQUMsTUFBYyxFQUFFLEdBQVksRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBVSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQTtJQUNMLENBQUM7Q0FBQTtBQXJERCxzQ0FxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWV1ZSB9IGZyb20gJy4uL3R5cGVzL1F1ZXVlJ1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vY2xpZW50L0JvdENsaWVudCc7XG5pbXBvcnQgeyBNZXNzYWdlLCBWb2ljZUNvbm5lY3Rpb24sIFN0cmVhbURpc3BhdGNoZXIgfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB5dGRsIGZyb20gJ3l0ZGwtY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBZb3V0dWJlUGxheWVyIHtcblxuICAgIHB1YmxpYyBRdWV1ZTogUXVldWU8c3RyaW5nPiA9IG5ldyBRdWV1ZTxzdHJpbmc+KCk7XG4gICAgcHVibGljIENvbm5lY3Rpb246IFZvaWNlQ29ubmVjdGlvbjtcbiAgICBwdWJsaWMgRGlzcGF0Y2hlcjogU3RyZWFtRGlzcGF0Y2hlcjtcbiAgICBwdWJsaWMgaXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgUGxheSA9IGFzeW5jICh1cmw6IHN0cmluZywgbXNnOiBNZXNzYWdlLCBjbGllbnQ6IENsaWVudCkgPT4ge1xuICAgICAgICBpZighbXNnLm1lbWJlci52b2ljZS5jaGFubmVsKSB7XG4gICAgICAgICAgICBtc2cuY2hhbm5lbC5zZW5kKCdZb3UgbXVzdCBiZSBjb25uZWN0ZWQgdG8gYSB2b2ljZSBjaGFubmVsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5Db25uZWN0aW9uID0gYXdhaXQgbXNnLm1lbWJlci52b2ljZS5jaGFubmVsLmpvaW4oKTtcbiAgICAgICAgaWYodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuUXVldWUuUHVzaCh1cmwpO1xuICAgICAgICAgICAgbXNnLmNoYW5uZWwuc2VuZCgnU29uZyBhZGRlZCB0byB0aGUgcXVldWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB0aGlzLlF1ZXVlLlB1c2godXJsKTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLlBsYXllcihjbGllbnQsIG1zZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2tpcCA9IChjbGllbnQ6IENsaWVudCwgbXNnOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgIHRoaXMuUGxheWVyKGNsaWVudCwgbXNnKTtcbiAgICAgICAgbXNnLmNoYW5uZWwuc2VuZCgnc29uZyBza2lwcGVkJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBQbGF5ZXIgPSAoY2xpZW50OiBDbGllbnQsIG1zZzogTWVzc2FnZSApID0+IHtcbiAgICAgICAgaWYodGhpcy5RdWV1ZS5HZXRMZW5ndGgoKSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLkNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5Db25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHRoaXMuRGlzcGF0Y2hlciA9IHRoaXMuQ29ubmVjdGlvbi5wbGF5KHl0ZGwodGhpcy5RdWV1ZS5Qb3AoKSkpO1xuICAgICAgICB0aGlzLkRpc3BhdGNoZXIub24oJ2ZpbmlzaCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyKGNsaWVudCwgbXNnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIERpc2Nvbm5lY3QgPSAoY2xpZW50OiBDbGllbnQsIG1zZzogTWVzc2FnZSkgPT4ge1xuICAgICAgICB0aGlzLkRpc3BhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuQ29ubmVjdGlvbi5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMuQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5RdWV1ZSA9IG5ldyBRdWV1ZTxzdHJpbmc+KCk7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgXG4gICAgICAgIG1zZy5jaGFubmVsLnNlbmQoJ0Rpc2Nvbm5lY3RlZCcpO1xuICAgIH1cbn0iXX0=