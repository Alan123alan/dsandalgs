class BinaryTreeNode<T>{
    public value:T;
    public left:BinaryTreeNode<T>|undefined;
    public right:BinaryTreeNode<T>|undefined;
    constructor(value:T){
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}

class BinaryTree<T>{
    private head:BinaryTreeNode<T>|undefined;
    constructor(head:BinaryTreeNode<T>|undefined){
        this.head = head || undefined;
    }
    insert(node:BinaryTreeNode<T>|undefined, value:T):BinaryTreeNode<T>{
        if(!node){
            const newNode = new BinaryTreeNode(value);
            return newNode;
        }
        if(value < node.value){
            node.left = this.insert(node.left, value);
        }else{
            node.right = this.insert(node.right, value);
        }
        return node;
    }
}

const preorderedSearch = (node:BinaryTreeNode<number>, path:number[])=>{
    if(!node){
        return path;
    }
    //pre
    path.push(node.value);
    //recurse
    preorderedSearch(node.left as BinaryTreeNode<number>, path);
    preorderedSearch(node.right as BinaryTreeNode<number>, path);
    //post
    return path;

}

const root = new BinaryTreeNode(6);
const binaryTree = new BinaryTree(root);
console.log(binaryTree)
binaryTree.insert(root,7)
console.log(binaryTree)
binaryTree.insert(root,5)
console.log(binaryTree)
binaryTree.insert(root,6)
console.log(binaryTree)
binaryTree.insert(root,4)
console.log(binaryTree)
binaryTree.insert(root,5)
console.log(binaryTree)
binaryTree.insert(root,7)
console.log(binaryTree)

let path:number[] = []
const result = preorderedSearch(root,path)

console.log(path);
console.log(result);