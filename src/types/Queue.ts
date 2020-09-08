export class Queue<T> {
    private _store: T[] = Array<T>();
    
    Push(value: T) {
        this._store.push(value);
    }

    Pop(): T | undefined {
        return this._store.shift();
    }

    GetLength() : number {
        return this._store.length;
    }
} 