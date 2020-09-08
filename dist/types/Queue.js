"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this._store = Array();
    }
    Push(value) {
        this._store.push(value);
    }
    Pop() {
        return this._store.shift();
    }
    GetLength() {
        return this._store.length;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZXMvUXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxLQUFLO0lBQWxCO1FBQ1ksV0FBTSxHQUFRLEtBQUssRUFBSyxDQUFDO0lBYXJDLENBQUM7SUFYRyxJQUFJLENBQUMsS0FBUTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFkRCxzQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBRdWV1ZTxUPiB7XG4gICAgcHJpdmF0ZSBfc3RvcmU6IFRbXSA9IEFycmF5PFQ+KCk7XG4gICAgXG4gICAgUHVzaCh2YWx1ZTogVCkge1xuICAgICAgICB0aGlzLl9zdG9yZS5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICBQb3AoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5zaGlmdCgpO1xuICAgIH1cblxuICAgIEdldExlbmd0aCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmxlbmd0aDtcbiAgICB9XG59ICJdfQ==