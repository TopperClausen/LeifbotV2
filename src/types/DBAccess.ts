import mysql from 'mysql';

export class DBAccess {
    public connection : any = mysql.createConnection({
        port        :   3306,  
        host        :   '176.20.223.184',
        user        :   'leifbot',
        password    :   '!Hugokat76',
        database    :   'leifbot'
    });
}