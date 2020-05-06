const BinarySearchTree = require('./BinarySearchTree')

const BST = new BinarySearchTree

BST.insert(3, 3)
BST.insert(1, 1)
BST.insert(4, 4)
BST.insert(6, 6)
BST.insert(9, 9)
BST.insert(2, 2)
BST.insert(5, 5)
BST.insert(7, 7)

console.log(BST)

const BST2 = new BinarySearchTree

BST2.insert('E', 'E')
BST2.insert('A', 'A')
BST2.insert('S', 'S')
BST2.insert('Y', 'Y')
BST2.insert('Q', 'Q')
BST2.insert('U', 'U')
BST2.insert('E', 'E')
BST2.insert('S', 'S')
BST2.insert('T', 'T')
BST2.insert('I', 'I')
BST2.insert('O', 'O')
BST2.insert('N', 'N')

console.log(BST2)
