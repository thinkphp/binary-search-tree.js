Class: BinarySearchTree {#BinarySearchTree}
===========================================

An implementation Binary Search Tree in MooTools Framework

### Syntax:

    var tree = new BinarySearchTree();

### Arguments:

- Void

BinarySearchTree Method: add {#BinarySearchTree: add}
-----------------------------------------------------------

Inserts the specfied value into the binary search tree

### Syntax: tree.add( data );

### Arguments:

- data - the specified data to insert.

### Returns:

- returns `True`


BinarySearchTree Method: delete {#BinarySearchTree: delete}
-----------------------------------------------------------

Inserts the specfied value into the binary search tree.
There are three possible cases to consider:
* deleting a leaf (a node with no children)
* deleting a node with one child.
* deleting a node with two children

### Syntax: tree.delete( data );

### Arguments:

- data - the specified data value to delete.

### Returns:

- returns `True`


BinarySearchTree Method: search {#BinarySearchTree: search}
-----------------------------------------------------------

Searching a binary search tree for a specific key using iterative process.

### Syntax: tree.search( val );

### Arguments:

- val `object` \`Integer` \ `float` \ `mixed`  the specified value to search.

### Returns:

- returns `True`


BinarySearchTree Method: size {#BinarySearchTree: size}
-----------------------------------------------------------

Get the length of the binary search tree.

### Syntax: tree.size();

### Arguments:

- void

### Returns:

- returns `size` the length of the binary search tree


BinarySearchTree Method: inorder {#BinarySearchTree: inorder}
-----------------------------------------------------------

Traversal Inorder

### Syntax: tree.inorder()

### Arguments:

- void

### Returns:

- returns `True`


BinarySearchTree Method: preorder {#BinarySearchTree: preorder}
---------------------------------------------------------------

Traversal Preorder

### Syntax: tree.preorder()

### Arguments:

- void

### Returns:

- returns `True`

BinarySearchTree Method: postorder {#BinarySearchTree: postorder}
-----------------------------------------------------------------

Traversal Postorder

### Syntax: tree.Postorder()

### Arguments:

- void

### Returns:

- returns `True`




# Sample: 

 /*
    Binary Search Tree
    add: 8,3,10,1,2,6,4,7,14,11 


             8
          3    10
        1   6     14
         2 4  7 11

        delete 8
          ||
          \/

             7
          3    10
        1   6     14
         2 4   11

        delete 1

             7
          3    10
        2   6     14
          4   11       

         
 */

   //create an object BinarySearchTree
   var tree = new BinarySearchTree();

       //add elements onto the tree
       tree.add(8);   
       tree.add(3);
       tree.add(10);
       tree.add(1);
       tree.add(2);
       tree.add(6);
       tree.add(4);
       tree.add(7);
       tree.add(14);
       tree.add(11);

       //walk through binary tree search inorder
       console.log("Inorder:");
       console.log ( tree.inorder(tree._root) );

       //walk through binary tree search postorder
       console.log("Postorder:");
       console.log ( tree.postorder(tree._root) );

       //walk through binary tree search preorder
       console.log("Preorder:");
       console.log ( tree.preorder(tree._root) );

       //size of the binary search tree
       console.log ("Size:");        
       console.log ( tree.size() );

      //toString
      console.log ( tree.toString() );

      if(tree.search(11)) {
         console.log("11 Found!");
      } else {
         console.log("11 Not found!");
      }

      if(tree.search(111)) {
         console.log("111 Found!");
      } else {
         console.log("111 Not found!");
      }

      tree.delete(8)
      console.log("Remove 8"); 
      console.log("Inorder:");
      console.log ( tree.inorder(tree._root) );
      console.log ("Size:");        
      console.log ( tree.size() );

      tree.delete(1)
      console.log("Remove 1"); 
      console.log("Inorder:");
      console.log ( tree.inorder(tree._root) );
      console.log ("Size:");        
      console.log ( tree.size() );



