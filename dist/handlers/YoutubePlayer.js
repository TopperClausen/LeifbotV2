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
        this.Play = (url, msg, client) => __awaiter(this, void 0, void 0, function* () {
            if (!msg.member.voice.channel) {
                msg.channel.send('You must be connected to a voice channel');
                return;
            }
            client.Connection = yield msg.member.voice.channel.join();
            if (client.isPlaying) {
                this.Queue.Push(url);
                msg.channel.send('Song added to the queue');
                return;
            }
            this.Queue.Push(url);
            client.isPlaying = true;
            this.Player(client, msg);
            return;
        });
        this.Skip = (client, msg) => {
            this.Player(client, msg);
            msg.channel.send('song skipped');
        };
        this.Player = (client, msg) => {
            if (this.Queue.GetLength() == 0) {
                client.Connection.disconnect();
                client.Connection = undefined;
                return;
            }
            client.Dispatcher = client.Connection.play(ytdl_core_1.default(this.Queue.Pop()));
            client.Dispatcher.on('finish', () => {
                this.Player(client, msg);
            });
        };
        this.Disconnect = (client, msg) => {
            client.Dispatcher = undefined;
            client.Connection.disconnect();
            client.Connection = undefined;
            this.Queue = new Queue_1.Queue();
            client.isPlaying = false;
            msg.channel.send('Disconnected');
        };
    }
}
exports.YoutubePlayer = YoutubePlayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWW91dHViZVBsYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9Zb3V0dWJlUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFzQztBQUd0QywwREFBNkI7QUFFN0IsTUFBYSxhQUFhO0lBQTFCO1FBRVcsVUFBSyxHQUFrQixJQUFJLGFBQUssRUFBVSxDQUFDO1FBRTNDLFNBQUksR0FBRyxDQUFPLEdBQVcsRUFBRSxHQUFZLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFDOUQsSUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDN0QsT0FBTzthQUNWO1lBRUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxRCxJQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6QixPQUFPO1FBQ1gsQ0FBQyxDQUFBLENBQUE7UUFFTSxTQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsR0FBWSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFBO1FBRU8sV0FBTSxHQUFHLENBQUMsTUFBYyxFQUFFLEdBQVksRUFBRyxFQUFFO1lBQy9DLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO2dCQUM5QixPQUFPO2FBQ1Y7WUFFRCxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFTSxlQUFVLEdBQUcsQ0FBQyxNQUFjLEVBQUUsR0FBWSxFQUFFLEVBQUU7WUFDakQsTUFBTSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDOUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxFQUFVLENBQUM7WUFDakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFekIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUFBO0FBbERELHNDQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi4vdHlwZXMvUXVldWUnXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi9jbGllbnQvQm90Q2xpZW50JztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB5dGRsIGZyb20gJ3l0ZGwtY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBZb3V0dWJlUGxheWVyIHtcblxuICAgIHB1YmxpYyBRdWV1ZTogUXVldWU8c3RyaW5nPiA9IG5ldyBRdWV1ZTxzdHJpbmc+KCk7XG5cbiAgICBwdWJsaWMgUGxheSA9IGFzeW5jICh1cmw6IHN0cmluZywgbXNnOiBNZXNzYWdlLCBjbGllbnQ6IENsaWVudCkgPT4ge1xuICAgICAgICBpZighbXNnLm1lbWJlci52b2ljZS5jaGFubmVsKSB7XG4gICAgICAgICAgICBtc2cuY2hhbm5lbC5zZW5kKCdZb3UgbXVzdCBiZSBjb25uZWN0ZWQgdG8gYSB2b2ljZSBjaGFubmVsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY2xpZW50LkNvbm5lY3Rpb24gPSBhd2FpdCBtc2cubWVtYmVyLnZvaWNlLmNoYW5uZWwuam9pbigpO1xuICAgICAgICBpZihjbGllbnQuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLlF1ZXVlLlB1c2godXJsKTtcbiAgICAgICAgICAgIG1zZy5jaGFubmVsLnNlbmQoJ1NvbmcgYWRkZWQgdG8gdGhlIHF1ZXVlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5RdWV1ZS5QdXNoKHVybCk7XG4gICAgICAgIGNsaWVudC5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLlBsYXllcihjbGllbnQsIG1zZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2tpcCA9IChjbGllbnQ6IENsaWVudCwgbXNnOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgIHRoaXMuUGxheWVyKGNsaWVudCwgbXNnKTtcbiAgICAgICAgbXNnLmNoYW5uZWwuc2VuZCgnc29uZyBza2lwcGVkJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBQbGF5ZXIgPSAoY2xpZW50OiBDbGllbnQsIG1zZzogTWVzc2FnZSApID0+IHtcbiAgICAgICAgaWYodGhpcy5RdWV1ZS5HZXRMZW5ndGgoKSA9PSAwKSB7XG4gICAgICAgICAgICBjbGllbnQuQ29ubmVjdGlvbi5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBjbGllbnQuQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjbGllbnQuRGlzcGF0Y2hlciA9IGNsaWVudC5Db25uZWN0aW9uLnBsYXkoeXRkbCh0aGlzLlF1ZXVlLlBvcCgpKSk7XG4gICAgICAgIGNsaWVudC5EaXNwYXRjaGVyLm9uKCdmaW5pc2gnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlBsYXllcihjbGllbnQsIG1zZyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBEaXNjb25uZWN0ID0gKGNsaWVudDogQ2xpZW50LCBtc2c6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgY2xpZW50LkRpc3BhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNsaWVudC5Db25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgY2xpZW50LkNvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuUXVldWUgPSBuZXcgUXVldWU8c3RyaW5nPigpO1xuICAgICAgICBjbGllbnQuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgXG4gICAgICAgIG1zZy5jaGFubmVsLnNlbmQoJ0Rpc2Nvbm5lY3RlZCcpO1xuICAgIH1cbn0iXX0=