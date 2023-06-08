var Stack = /** @class */ (function () {
    function Stack() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    Stack.prototype.push = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        var tail = this.tail;
        this.tail = node;
        this.tail.previous = tail;
    };
    Stack.prototype.pop = function () {
        if (!this.tail) {
            return undefined;
        }
        this.length = Math.max(0, this.length--);
        var tail = this.tail;
        this.tail = this.tail.previous;
        return tail.value;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Stack;
}());
var myStack = new Stack;
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
