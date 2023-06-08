type QNode<T> = {
    value: T,
    previous?: QNode<T>
}

class Stack<T>{
    public length:number;
    private head?:QNode<T>;
    private tail?:QNode<T>;


    constructor(){
        this.head = this.tail = undefined;
        this.length = 0;
    }


    push(item: T){
        const node = {value: item} as QNode<T>;
        this.length++;
        if(!this.tail){
            this.tail = this.head = node;
            return;
        }
        const tail = this.tail;
        this.tail = node;
        this.tail.previous = tail;
    }


    pop():T|undefined{
        if(!this.tail){
            return undefined;
        }
        this.length = Math.max(0, this.length--);
        const tail = this.tail;
        this.tail = this.tail.previous
        return tail.value;
    }

    peek():T|undefined{
        return this.tail?.value;
    }
}

const myStack = new Stack<number>;
console.log(myStack);
console.log(myStack.push(2));
console.log(myStack);
console.log(myStack.push(3));
console.log(myStack);
console.log(myStack.push(4));
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());