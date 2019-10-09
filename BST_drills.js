const BST = require('./BinarySearchTrees')

// Assignment 3
function drillThree() {
    const tree = new BST()

    tree.insert(3,3)
    tree.insert(1,1)
    tree.insert(4,4)
    // tree.insert(6,6)
    tree.insert(9,9)
    tree.insert(2,2)
    tree.insert(5,5)
    tree.insert(7,7)

    console.log(tree)

    const alphaTree = new BST()

    alphaTree.insert('e','e')
    alphaTree.insert('a','a')
    alphaTree.insert('s','s')
    alphaTree.insert('y','y')
    alphaTree.insert('q','q')
    alphaTree.insert('u','u')
    alphaTree.insert('e','e')
    alphaTree.insert('s','s')
    alphaTree.insert('t','t')
    alphaTree.insert('i','i')
    alphaTree.insert('o','o')
    alphaTree.insert('n','n')
    
    console.log(alphaTree)

    console.log(maxHeight(alphaTree))
    console.log(maxHeight(tree))

    console.log(isBST(tree))
    console.log(isBST(alphaTree))

    console.log(isBalanced(tree))
    console.log(isBalanced(alphaTree))
}

//drillThree()

// assignment 4. recursively prints the tree 

// Assignment 5.
function maxHeight(root){
    if(!root){
        return 0
    }

    let left = maxHeight(root.left)
    let right = maxHeight(root.right)

    return Math.max(left, right) + 1;
}

// Assignment 6.
function isBST(root){
    if(!root){
      return true; 
   }
 
   if(root.left != null && root.left.value > root.value){ 
     return false;
   }
 
   if(root.right !=null && root.right.value < root.value) {
     return false;
   }
 
   if(!isBST(root.left) || !isBST(root.right)) {
     return false;
   }
 
   return true;  
 }

 // Assignment 7. ???

 // Assignment 8.
function minHeight(root){
    if(!root){
        return 0
    }

    let left = minHeight(root.left)
    let right = minHeight(root.right)

    return Math.min(left, right) + 1
}

function isBalanced(root){
    if(!root){
        return undefined
    }  
    return maxHeight(root) - minHeight(root) <= 1;
}

// Assignment 9. ???


//Searching

function searching(){

  const tree = new BST()

  const arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

  for(let i = 0; i < arr.length; i++) {
    tree.insert(arr[i], arr[i])
  }

  console.log(tree.inOrder())
  console.log(tree.preOrder())
  // console.log(tree.postOrder())
  // console.log(tree.bfs(tree))

}
searching()