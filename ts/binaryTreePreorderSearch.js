var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
    return BinaryTreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree(head) {
        this.head = head || undefined;
    }
    BinaryTree.prototype.insert = function (node, value) {
        if (!node) {
            var newNode = new BinaryTreeNode(value);
            return newNode;
        }
        if (value < node.value) {
            node.left = this.insert(node.left, value);
        }
        else {
            node.right = this.insert(node.right, value);
        }
        return node;
    };
    return BinaryTree;
}());
var preorderedSearch = function (node, path) {
    if (!node) {
        return path;
    }
    //pre
    path.push(node.value);
    //recurse
    preorderedSearch(node.left, path);
    preorderedSearch(node.right, path);
    //post
    return path;
};
var root = new BinaryTreeNode(6);
var binaryTree = new BinaryTree(root);
console.log(binaryTree);
binaryTree.insert(root, 7);
console.log(binaryTree);
binaryTree.insert(root, 5);
console.log(binaryTree);
binaryTree.insert(root, 6);
console.log(binaryTree);
binaryTree.insert(root, 4);
console.log(binaryTree);
binaryTree.insert(root, 5);
console.log(binaryTree);
binaryTree.insert(root, 7);
console.log(binaryTree);
var path = [];
var result = preorderedSearch(root, path);
console.log(path);
console.log(result);
