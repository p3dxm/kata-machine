type Node<T>{
    value: T,
    next?: Node<T>,
}


export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    
    constructor() {
        this.head = this.tail = undefined;
        this.legth = 0;
    }

    enqueue(item: T): void {

}
    deque(): T | undefined {

}
    peek(): T | undefined {

}
}