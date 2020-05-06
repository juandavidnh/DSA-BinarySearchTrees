const BinarySearchTree = require('./BinarySearchTree')

function treeHeight(t){
    if(t === null) {
        return -1
    }

    if(t.left === null && t.right === null) {
        return 0
    }

    if(t.left === null) {
        return treeHeight(t.right) + 1
    }

    if(t.right === null) {
        return treeHeight(t.left) + 1
    }

    const lHeight = treeHeight(t.left)
    const rHeight = treeHeight(t.right)
    return Math.max(lHeight, rHeight) + 1
}

function minTreeHeight(t) {
    if(t === null) {
        return -1
    }

    if(t.left === null && t.right === null) {
        return 0
    }

    if(t.left === null) {
        return minTreeHeight(t.right) + 1
    }

    if(t.right === null) {
        return minTreeHeight(t.left) + 1
    }

    const lHeight = minTreeHeight(t.left)
    const rHeight = minTreeHeight(t.right)
    return Math.min(lHeight, rHeight) + 1
}

function isBalanced(root){
    if(!root){
        return undefined
    }  
    return treeHeight(root) - minTreeHeight(root) <= 1
}

const BST = new BinarySearchTree

BST.insert(3, 3)
BST.insert(1, 1)
BST.insert(4, 4)
BST.insert(6, 6)
BST.insert(9, 9)
BST.insert(2, 2)
BST.insert(5, 5)
BST.insert(7, 7)

console.log(treeHeight(BST))
console.log(isBalanced(BST))