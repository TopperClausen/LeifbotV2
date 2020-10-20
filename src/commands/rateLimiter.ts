import { CommandHandler } from '../handlers/commandHandler';
import { Message } from 'discord.js';

import { rate_limited } from '../types/DBTypes';

export class rateLimiter {

    commandHandler: CommandHandler;

    constructor(parrent: CommandHandler) {
        this.commandHandler = parrent;
    }

    public handle(args : Array<string>, msg: Message) : void {
        if(!msg.member.roles.cache.some(role => role.name === 'Bot Admin')) {
            msg.channel.send('You are not an admin :/');
            return;
        }else {
            console.log(args[0]);
            if(args[0] == 'add'){
                try {
                    this.Limit(args[1]);
                    msg.channel.send('rate limit has been set for the given id');
                }catch(err) {
                    msg.channel.send(err);
                }
            }else if (args[0] == 'rm') {
                try {
                    this.Remove(args[1]);
                    msg.channel.send('rate limit has been removed for the given id');
                }catch(err) {
                    msg.channel.send(err);
                }
            }
        }
    }

    private Limit(ID : string) {
        let conn = this.commandHandler.client.DBAccess.connection;
        conn.query("SELECT * FROM rate_limited WHERE discordID = " + conn.escape(ID), (checkErr, checkResults, checkFields) => {
            if(checkResults.length > 0) throw new Error('User is already rate limited');

            conn.query("INSERT INTO rate_limited (discordID) VALUES (" + conn.escape(ID) + ")", (err, results, fields) => {
                if(err) throw new Error('An error occurred');
            });
        });
    }

    private Remove(ID: string) {
        let conn = this.commandHandler.client.DBAccess.connection;
        conn.query("SELECT * FROM rate_limited WHERE discordID = " + conn.escape(ID), (err, results, fields) => {
            console.log(results.length);
            if(results.length == 0) throw new Error('User is not rate limited');

            conn.query("DELETE FROM rate_limited WHERE discordID = " + conn.escape(ID), (finalErr, finRes, finFields) => {
                if(finalErr) throw new Error('An unkown error has occurred');
            })
        });
    }
}