var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }
    DoubleLinkedList.prototype.prepend = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    };
    DoubleLinkedList.prototype.append = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    };
    DoubleLinkedList.prototype.insertAt = function (item, index) {
        if (index > this.length || index < 0) {
            throw new Error("Index is out of double linked list range");
        }
        else if (index === this.length) {
            this.append(item);
            return;
        }
        else if (index === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        var node = { value: item };
        var currNode = this.getAt(index);
        currNode = currNode;
        node.next = currNode;
        node.prev = currNode.prev;
        currNode.prev = node;
        if (node.prev) {
            node.prev.next = node;
        }
    };
    DoubleLinkedList.prototype.remove = function (item) {
        var _a;
        var curr = this.head;
        for (var i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                //curr.prev.next = curr.next;
                //curr.next.prev = curr.prev;
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        this.length--;
        if (this.length == 0) {
            var out = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
            this.head = this.tail = undefined;
            return out;
        }
        if (curr.prev) {
            curr.prev.next = curr.next;
        }
        if (curr.next) {
            curr.next.prev = curr.prev;
        }
        if (curr === this.head) {
            var out = this.head.value;
            this.head = curr.next;
            return out;
        }
        if (curr === this.tail) {
            var out = this.tail.value;
            this.tail = curr.prev;
            return out;
        }
        curr.prev = curr.next = undefined;
        return curr.value;
    };
    DoubleLinkedList.prototype.getAt = function (index) {
        var currNode = this.head;
        for (var i = 0; currNode && i < index; i++) {
            currNode = currNode.next;
        }
        return currNode;
    };
    return DoubleLinkedList;
}());
var myDoubleLinkedList = new DoubleLinkedList();
console.log(myDoubleLinkedList);
myDoubleLinkedList.append(1);
myDoubleLinkedList.append(2);
myDoubleLinkedList.append(3);
console.log(myDoubleLinkedList);
myDoubleLinkedList.prepend(0);
console.log(myDoubleLinkedList);
console.log(myDoubleLinkedList.getAt(0));
console.log(myDoubleLinkedList.getAt(1));
console.log(myDoubleLinkedList.getAt(3));
myDoubleLinkedList.remove(1);
myDoubleLinkedList.remove(3);
console.log(myDoubleLinkedList);
myDoubleLinkedList.insertAt(99, 1);
console.log(myDoubleLinkedList);
