type QNode<T> = {
  value: T,
  next?:QNode<T>
};

class Queue<T>{
  public length:number;
  private head?:QNode<T>;
  private tail?:QNode<T>;

  constructor(){
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void{
    const node = {value: item} as QNode<T>;
    this.length++;
    if(!this.tail){
	this.head = this.tail = node;
        return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  deque(): T|undefined{
    if(!this.head){
      return undefined;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }
  
  peek(): T|undefined{
    return this.head?.value;
  }
}

const myqueue = new Queue<number>();
console.log(myqueue);
console.log(myqueue.length);
console.log(myqueue.peek());
console.log(myqueue.enqueue(10));
console.log(myqueue.enqueue(11));
console.log(myqueue.length);
console.log(myqueue.peek());
console.log(myqueue);
