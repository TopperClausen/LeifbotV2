"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
class rateLimiter {
    constructor(parrent) {
        this.commandHandler = parrent;
    }
    handle(args, msg) {
        if (!msg.member.roles.cache.some(role => role.name === 'Bot Admin')) {
            msg.channel.send('You are not an admin :/');
            return;
        }
        else {
            console.log(args[0]);
            if (args[0] == 'add') {
                try {
                    this.Limit(args[1]);
                    msg.channel.send('rate limit has been set for the given id');
                }
                catch (err) {
                    msg.channel.send(err);
                }
            }
            else if (args[0] == 'rm') {
                try {
                    this.Remove(args[1]);
                    msg.channel.send('rate limit has been removed for the given id');
                }
                catch (err) {
                    msg.channel.send(err);
                }
            }
        }
    }
    Limit(ID) {
        let conn = this.commandHandler.client.DBAccess.connection;
        conn.query("SELECT * FROM rate_limited WHERE discordID = " + conn.escape(ID), (checkErr, checkResults, checkFields) => {
            if (checkResults.length > 0)
                throw new Error('User is already rate limited');
            conn.query("INSERT INTO rate_limited (discordID) VALUES (" + conn.escape(ID) + ")", (err, results, fields) => {
                if (err)
                    throw new Error('An error occurred');
            });
        });
    }
    Remove(ID) {
        let conn = this.commandHandler.client.DBAccess.connection;
        conn.query("SELECT * FROM rate_limited WHERE discordID = " + conn.escape(ID), (err, results, fields) => {
            console.log(results.length);
            if (results.length == 0)
                throw new Error('User is not rate limited');
            conn.query("DELETE FROM rate_limited WHERE discordID = " + conn.escape(ID), (finalErr, finRes, finFields) => {
                if (finalErr)
                    throw new Error('An unkown error has occurred');
            });
        });
    }
}
exports.rateLimiter = rateLimiter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZUxpbWl0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcmF0ZUxpbWl0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsTUFBYSxXQUFXO0lBSXBCLFlBQVksT0FBdUI7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFvQixFQUFFLEdBQVk7UUFDNUMsSUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxFQUFFO1lBQ2hFLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDNUMsT0FBTztTQUNWO2FBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBQztnQkFDaEIsSUFBSTtvQkFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2lCQUNoRTtnQkFBQSxPQUFNLEdBQUcsRUFBRTtvQkFDUixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekI7YUFDSjtpQkFBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUk7b0JBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztpQkFDcEU7Z0JBQUEsT0FBTSxHQUFHLEVBQUU7b0JBQ1IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFTyxLQUFLLENBQUMsRUFBVztRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsK0NBQStDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEVBQUU7WUFDbEgsSUFBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBRTVFLElBQUksQ0FBQyxLQUFLLENBQUMsK0NBQStDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN6RyxJQUFHLEdBQUc7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sTUFBTSxDQUFDLEVBQVU7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLCtDQUErQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLElBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUVwRSxJQUFJLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUN4RyxJQUFHLFFBQVE7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUF0REQsa0NBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9oYW5kbGVycy9jb21tYW5kSGFuZGxlcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5cbmltcG9ydCB7IHJhdGVfbGltaXRlZCB9IGZyb20gJy4uL3R5cGVzL0RCVHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgcmF0ZUxpbWl0ZXIge1xuXG4gICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xuXG4gICAgY29uc3RydWN0b3IocGFycmVudDogQ29tbWFuZEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlciA9IHBhcnJlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZShhcmdzIDogQXJyYXk8c3RyaW5nPiwgbXNnOiBNZXNzYWdlKSA6IHZvaWQge1xuICAgICAgICBpZighbXNnLm1lbWJlci5yb2xlcy5jYWNoZS5zb21lKHJvbGUgPT4gcm9sZS5uYW1lID09PSAnQm90IEFkbWluJykpIHtcbiAgICAgICAgICAgIG1zZy5jaGFubmVsLnNlbmQoJ1lvdSBhcmUgbm90IGFuIGFkbWluIDovJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3NbMF0pO1xuICAgICAgICAgICAgaWYoYXJnc1swXSA9PSAnYWRkJyl7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MaW1pdChhcmdzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgbXNnLmNoYW5uZWwuc2VuZCgncmF0ZSBsaW1pdCBoYXMgYmVlbiBzZXQgZm9yIHRoZSBnaXZlbiBpZCcpO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgbXNnLmNoYW5uZWwuc2VuZChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIGlmIChhcmdzWzBdID09ICdybScpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZShhcmdzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgbXNnLmNoYW5uZWwuc2VuZCgncmF0ZSBsaW1pdCBoYXMgYmVlbiByZW1vdmVkIGZvciB0aGUgZ2l2ZW4gaWQnKTtcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1zZy5jaGFubmVsLnNlbmQoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIExpbWl0KElEIDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjb25uID0gdGhpcy5jb21tYW5kSGFuZGxlci5jbGllbnQuREJBY2Nlc3MuY29ubmVjdGlvbjtcbiAgICAgICAgY29ubi5xdWVyeShcIlNFTEVDVCAqIEZST00gcmF0ZV9saW1pdGVkIFdIRVJFIGRpc2NvcmRJRCA9IFwiICsgY29ubi5lc2NhcGUoSUQpLCAoY2hlY2tFcnIsIGNoZWNrUmVzdWx0cywgY2hlY2tGaWVsZHMpID0+IHtcbiAgICAgICAgICAgIGlmKGNoZWNrUmVzdWx0cy5sZW5ndGggPiAwKSB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgaXMgYWxyZWFkeSByYXRlIGxpbWl0ZWQnKTtcblxuICAgICAgICAgICAgY29ubi5xdWVyeShcIklOU0VSVCBJTlRPIHJhdGVfbGltaXRlZCAoZGlzY29yZElEKSBWQUxVRVMgKFwiICsgY29ubi5lc2NhcGUoSUQpICsgXCIpXCIsIChlcnIsIHJlc3VsdHMsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgbmV3IEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgUmVtb3ZlKElEOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvbm4gPSB0aGlzLmNvbW1hbmRIYW5kbGVyLmNsaWVudC5EQkFjY2Vzcy5jb25uZWN0aW9uO1xuICAgICAgICBjb25uLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSByYXRlX2xpbWl0ZWQgV0hFUkUgZGlzY29yZElEID0gXCIgKyBjb25uLmVzY2FwZShJRCksIChlcnIsIHJlc3VsdHMsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYocmVzdWx0cy5sZW5ndGggPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdVc2VyIGlzIG5vdCByYXRlIGxpbWl0ZWQnKTtcblxuICAgICAgICAgICAgY29ubi5xdWVyeShcIkRFTEVURSBGUk9NIHJhdGVfbGltaXRlZCBXSEVSRSBkaXNjb3JkSUQgPSBcIiArIGNvbm4uZXNjYXBlKElEKSwgKGZpbmFsRXJyLCBmaW5SZXMsIGZpbkZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGZpbmFsRXJyKSB0aHJvdyBuZXcgRXJyb3IoJ0FuIHVua293biBlcnJvciBoYXMgb2NjdXJyZWQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=