type DLLNode<T> = {
    value: T,
    prev?: DLLNode<T>,
    next?: DLLNode<T>
}

class DoubleLinkedList<T>{
    public length: number;
    private head?: DLLNode<T>;
    private tail?: DLLNode<T>;

    constructor(){
        this.length = 0;
        this.head = undefined;
    }

    prepend(item:T){
        const node = {value:item} as DLLNode<T>;
        this.length++
        if(!this.head){
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;

    }

    append(item:T){
        const node = {value:item} as DLLNode<T>;
        this.length++
        if(!this.tail){
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    insertAt(item:T, index:number){
        if(index > this.length){
            throw new Error("Index is out of double linked list range");
        }else if(index === this.length){
            this.append(item);
            return;
        }else if(index === 0){
            this.prepend(item);
            return;
        }
        this.length++;
        const node = {value:item} as DLLNode<T>;
        let currNode = this.head;
        for(let i = 0;currNode && i < index; i++){
            currNode = currNode.next;
        }
        currNode = currNode as DLLNode<T>;
        node.next = currNode;
        node.prev = currNode.prev;
        currNode.prev = node;
        if(node.prev){
            node.prev.next = node;
        }
    }
}