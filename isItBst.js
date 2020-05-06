const BinarySearchTree = require('./BinarySearchTree')

function isItBst(root) {
    if(!root){
        return true
     }
   
     if(root.left != null && root.left.value > root.value){ 
       return false
     }
   
     if(root.right !=null && root.right.value < root.value) {
       return false
     }
   
     if(!isItBst(root.left) || !isItBst(root.right)) {
       return false
     }
   
     return true 
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

console.log(isItBst(BST))