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
exports.Disconnect = exports.Skip = exports.Play = void 0;
const Queue_1 = require("../types/Queue");
const ytdl_core_1 = __importDefault(require("ytdl-core"));
exports.Play = (url, msg, client) => __awaiter(void 0, void 0, void 0, function* () {
    if (!msg.member.voice.channel) {
        msg.channel.send('You must be connected to a voice channel');
        return;
    }
    client.Connection = yield msg.member.voice.channel.join();
    if (client.isPlaying) {
        client.Queue.Push(url);
        msg.channel.send('Song added to the queue');
        return;
    }
    client.Queue.Push(url);
    client.isPlaying = true;
    Player(client, msg);
    return;
});
exports.Skip = (client, msg) => {
    Player(client, msg);
    msg.channel.send('song skipped');
};
let Player = (client, msg) => {
    if (client.Queue.GetLength() == 0) {
        client.Connection.disconnect();
        client.Connection = undefined;
        return;
    }
    client.Dispatcher = client.Connection.play(ytdl_core_1.default(client.Queue.Pop()));
    client.Dispatcher.on('finish', () => {
        Player(client, msg);
    });
};
exports.Disconnect = (client, msg) => {
    client.Dispatcher = undefined;
    client.Connection.disconnect();
    client.Connection = undefined;
    client.Queue = new Queue_1.Queue();
    client.isPlaying = false;
    msg.channel.send('Disconnected');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDBDQUF1QztBQUN2QywwREFBNkI7QUFFbEIsUUFBQSxJQUFJLEdBQUcsQ0FBTyxHQUFXLEVBQUUsR0FBWSxFQUFFLE1BQWMsRUFBRSxFQUFFO0lBQ2xFLElBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUM3RCxPQUFPO0tBQ1Y7SUFFRCxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFELElBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzVDLE9BQU87S0FDVjtJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEIsT0FBTztBQUNYLENBQUMsQ0FBQSxDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsR0FBWSxFQUFFLEVBQUU7SUFDL0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUE7QUFFRCxJQUFJLE1BQU0sR0FBRyxDQUFDLE1BQWMsRUFBRSxHQUFZLEVBQUcsRUFBRTtJQUMzQyxJQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDOUIsT0FBTztLQUNWO0lBRUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDaEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQTtBQUVVLFFBQUEsVUFBVSxHQUFHLENBQUMsTUFBYyxFQUFFLEdBQVksRUFBRSxFQUFFO0lBQ3JELE1BQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBVSxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRXpCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UsIFZvaWNlQ29ubmVjdGlvbiwgU3RyZWFtRGlzcGF0Y2hlciwgQ2xpZW50Vm9pY2VNYW5hZ2VyIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi9jbGllbnQvQm90Q2xpZW50JztcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi4vdHlwZXMvUXVldWUnO1xuaW1wb3J0IHl0ZGwgZnJvbSAneXRkbC1jb3JlJztcblxuZXhwb3J0IGxldCBQbGF5ID0gYXN5bmMgKHVybDogc3RyaW5nLCBtc2c6IE1lc3NhZ2UsIGNsaWVudDogQ2xpZW50KSA9PiB7XG4gICAgaWYoIW1zZy5tZW1iZXIudm9pY2UuY2hhbm5lbCkge1xuICAgICAgICBtc2cuY2hhbm5lbC5zZW5kKCdZb3UgbXVzdCBiZSBjb25uZWN0ZWQgdG8gYSB2b2ljZSBjaGFubmVsJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGllbnQuQ29ubmVjdGlvbiA9IGF3YWl0IG1zZy5tZW1iZXIudm9pY2UuY2hhbm5lbC5qb2luKCk7XG4gICAgaWYoY2xpZW50LmlzUGxheWluZykge1xuICAgICAgICBjbGllbnQuUXVldWUuUHVzaCh1cmwpO1xuICAgICAgICBtc2cuY2hhbm5lbC5zZW5kKCdTb25nIGFkZGVkIHRvIHRoZSBxdWV1ZScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xpZW50LlF1ZXVlLlB1c2godXJsKTtcbiAgICBjbGllbnQuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICBQbGF5ZXIoY2xpZW50LCBtc2cpO1xuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IGxldCBTa2lwID0gKGNsaWVudDogQ2xpZW50LCBtc2c6IE1lc3NhZ2UpID0+IHtcbiAgICBQbGF5ZXIoY2xpZW50LCBtc2cpO1xuICAgIG1zZy5jaGFubmVsLnNlbmQoJ3Nvbmcgc2tpcHBlZCcpO1xufVxuXG5sZXQgUGxheWVyID0gKGNsaWVudDogQ2xpZW50LCBtc2c6IE1lc3NhZ2UgKSA9PiB7XG4gICAgaWYoY2xpZW50LlF1ZXVlLkdldExlbmd0aCgpID09IDApIHtcbiAgICAgICAgY2xpZW50LkNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuICAgICAgICBjbGllbnQuQ29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsaWVudC5EaXNwYXRjaGVyID0gY2xpZW50LkNvbm5lY3Rpb24ucGxheSh5dGRsKGNsaWVudC5RdWV1ZS5Qb3AoKSkpO1xuICAgIGNsaWVudC5EaXNwYXRjaGVyLm9uKCdmaW5pc2gnLCAoKSA9PiB7XG4gICAgICAgIFBsYXllcihjbGllbnQsIG1zZyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBsZXQgRGlzY29ubmVjdCA9IChjbGllbnQ6IENsaWVudCwgbXNnOiBNZXNzYWdlKSA9PiB7XG4gICAgY2xpZW50LkRpc3BhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgY2xpZW50LkNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuICAgIGNsaWVudC5Db25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIGNsaWVudC5RdWV1ZSA9IG5ldyBRdWV1ZTxzdHJpbmc+KCk7XG4gICAgY2xpZW50LmlzUGxheWluZyA9IGZhbHNlO1xuXG4gICAgbXNnLmNoYW5uZWwuc2VuZCgnRGlzY29ubmVjdGVkJyk7XG59Il19