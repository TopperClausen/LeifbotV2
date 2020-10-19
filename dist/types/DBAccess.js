"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBAccess = void 0;
const mysql_1 = __importDefault(require("mysql"));
class DBAccess {
    constructor() {
        this.connection = mysql_1.default.createConnection({
            port: 3306,
            host: '176.20.223.184',
            user: 'leifbot',
            password: '!Hugokat76',
            database: 'leifbot'
        });
    }
}
exports.DBAccess = DBAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiREJBY2Nlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZXMvREJBY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQTBCO0FBRTFCLE1BQWEsUUFBUTtJQUFyQjtRQUNXLGVBQVUsR0FBUyxlQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDN0MsSUFBSSxFQUFZLElBQUk7WUFDcEIsSUFBSSxFQUFZLGdCQUFnQjtZQUNoQyxJQUFJLEVBQVksU0FBUztZQUN6QixRQUFRLEVBQVEsWUFBWTtZQUM1QixRQUFRLEVBQVEsU0FBUztTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUE7QUFSRCw0QkFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdteXNxbCc7XG5cbmV4cG9ydCBjbGFzcyBEQkFjY2VzcyB7XG4gICAgcHVibGljIGNvbm5lY3Rpb24gOiBhbnkgPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgICAgcG9ydCAgICAgICAgOiAgIDMzMDYsICBcbiAgICAgICAgaG9zdCAgICAgICAgOiAgICcxNzYuMjAuMjIzLjE4NCcsXG4gICAgICAgIHVzZXIgICAgICAgIDogICAnbGVpZmJvdCcsXG4gICAgICAgIHBhc3N3b3JkICAgIDogICAnIUh1Z29rYXQ3NicsXG4gICAgICAgIGRhdGFiYXNlICAgIDogICAnbGVpZmJvdCdcbiAgICB9KTtcbn0iXX0=