binary-search-tree.js
=====================

An Implementation Binary Search Tree In MooTools Framework.

![Screenshot](http://farm6.staticflickr.com/5594/14930019990_cfa489e2a5.jpg)

How to use
----------

Include MooTools Framework, binary-search-tree.js into the page:

<script src="http://ajax.googleapis.com/ajax/libs/mootools/1.5.0/mootools-yui-compressed.js"></script>
<script type="text/javascript" src="binary-search-tree-yui-compressed.js"></script>


When DOM is ready:
-----------------

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

   #JS

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

References:

- http://en.wikipedia.org/wiki/Binary_search_tree
