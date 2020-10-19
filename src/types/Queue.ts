export class Queue<T> {
    private _store: T[] = Array<T>();
    
    Push(value: T) : void {
        this._store.push(value);
    }

    Pop(): T {
        return this._store.shift();
    }

    GetLength() : number {
        return this._store.length;
    }
} 