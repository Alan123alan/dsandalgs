var Queue = /** @class */ (function () {
    function Queue() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    };
    Queue.prototype.deque = function () {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        var head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        return head.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Queue;
}());
var myqueue = new Queue();
console.log(myqueue);
console.log(myqueue.length);
console.log(myqueue.peek());
console.log(myqueue.enqueue(10));
console.log(myqueue.enqueue(11));
console.log(myqueue.length);
console.log(myqueue.peek());
console.log(myqueue);
