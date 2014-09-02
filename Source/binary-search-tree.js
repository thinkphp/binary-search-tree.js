/*
---
description: Data Structure Binary Search Tree implementation in JavaScript MooTools Framework

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.5.1: '*'

provides: BinarySearchTree
...
*/

var Node = new Class({
                      initialize: function( data ) {
                          this.data = data;
                          this.left = null;
                          this.right = null;      
                      } 
});

var BinarySearchTree = new Class({

                      initialize: function() {
     
                          this._root = null;  
                      },

                    /*
                    Appends the data to the appropriate node in the binary search tree. 
                    If there are no nodes in the binary search tree, then the tree is empty root is NULL
                    so the value becames the root, otherwise search in the binary search tree to find out the appropriate node to insert.
                    */
                      add: function( val ) {

                           if(this._root == null) {

                              this._root = new Node( val );

                              this._root.left = null;

                              this._root.right = null;

                           } else {

                              curr = this._root;

                              for(;;) {

                                  if(val < curr.data) {

                                     if(curr.left != null) {

                                        curr = curr.left;
 
                                     } else {

                                       curr.left = new Node( val );

                                       break;
                                     }
                                       
                                  } else {

                                     if(curr.right != null) {

                                        curr = curr.right;
 
                                     } else {

                                       curr.right = new Node( val );

                                       break;
                                     }

                                  }
                              }
                           }
                            
                      },

/*
Determines whether the given value exists or not in the binary search tree using an iterative process.
*/
                      search: function( val ) {

                              var found = 0, curr = this._root;
                               
                              while(curr && !found) {

                                    if(curr.data == val) {

                                       found = 1;

                                    } else if( val < curr.data ) {

                                       curr = curr.left; 

                                    } else {

                                       curr = curr.right;
                                    }
                              }  

                         return found;
                      },  

                      __inorder: function( callback ) {

                          var _inorder = function( node ) {
    
                               if( node.left ) {

                                   _inorder( node.left ) 
                               }

                               callback.call(this, node );

                               if( node.right ) {

                                   _inorder( node.right ) 
                               }
                          }

                          _inorder( this._root ) 
                      },

                      __postorder: function( callback ) {

                          var _postorder = function( node ) {
    
                               if( node.left ) {

                                   _postorder( node.left ) 
                               }

                               if( node.right ) {

                                   _postorder( node.right ) 
                               }

                               callback.call(this, node );
                          }

                          _postorder( this._root ) 
                      },

                      __preorder: function( callback ) {

                          var _preorder = function( node ) {

                               callback.call(this, node );
    
                               if( node.left ) {

                                   _preorder( node.left ) 
                               }


                               if( node.right ) {

                                   _preorder( node.right ) 
                               }
                          }

                          _preorder( this._root ) 
                      },

                      inorder: function() {

                               var arr = [] 

                               this.__inorder(function( node ) {

                                    arr.push(node.data)
                               });

                           return arr;
                      },

                      postorder: function() {

                               var arr = [] 

                               this.__postorder(function( node ) {

                                    arr.push(node.data)
                               });

                           return arr;
                      },

                      preorder: function() {

                               var arr = [] 

                               this.__preorder(function( node ) {

                                    arr.push(node.data)
                               });

                           return arr;
                      },

                      size: function() {

                            var _size = 0;

                            this.__inorder(function( node ){

                                  _size++;
                            }); 

                          return _size
                      }, 

                      toString: function() {

                          return this.inorder().toString() 
                      },
/*
Removes the node with the given value from the binary search tree.
There are three possible cases to consider:
* deleting a leaf (a node with no children)
* deleting a node with one child.
* deleting a node with two children
*/
                      delete: function( val ) {

                              var curr = this._root,

                                  parent = null,

                                  newNode, newNodeParent = null,

                                  found = 0,

                                  childNum = 0; 

                              while(curr && !found) {

                                    if(curr.data == val) {

                                       found = 1;

                                    } else if( val < curr.data ) {

                                       parent = curr;

                                       curr = curr.left; 

                                    } else {

                                       parent = curr;

                                       curr = curr.right;
                                    }
                              }  

                              if( found ) {
                   
                                  //get the number of childs for the node to remove
                                  childNum = childNum + (curr.left != null ? 1 : 0) + (curr.right != null ? 1 : 0);

                                  if(curr == this._root) {

                                     switch( childNum ) {

                                            case 0:

                                            break;
                                            case 1:

                                            break;
                                            case 2: 
                                                  newNode = this._root.left; // or newNode = curr.left, it's the same thing for this case  
                                                  
                                                  //trying to get the mostly right node and make the replacement
                                                  while( newNode.right ) {

                                                          //at each step we store the parent for newNode
                                                          newNodeParent = newNode

                                                          //go next node from right
                                                          newNode = newNode.right; 
                                                  }

                                                  if( newNodeParent != null ) {

                                                     newNodeParent.right = newNode.left;
                                                     newNode.left = this._root.left;  
                                                     newNode.right = this._root.right;
      
                                                  } else {

                                                     newNode.right = this._root.right;
                                                      
                                                  }

                                                  this._root = newNode;
                                     }

                                  } else {


                                     switch( childNum ) {

                                            case 0:
                                            
                                            if(parent.data > curr.data)  parent.left = null;
                                                                    else parent.right = null;

 
                                            break;

                                            case 1:                                               
                                            var next = curr.left!= null ? curr.left : curr.right;
                                              
                                            if(parent.data > curr.data)  parent.left = next;
                                                                    else parent.right = next;

                                            break;


                                            case 2:

                                            newNodeParent = curr;

                                            newNode = curr.left;
                                    
                                            while( newNode.right ) {
                                                 
                                                   newNodeParent = newNode;
                                                   newNode = newNode.right; 
                                            }    

                                            if( newNodeParent != curr ) {
                                               
                                                newNodeParent.right = newNode.left;
                                                newNode.left = curr.left;
                                                newNode.right = curr.right
  
                                            } else {
                                                
                                                newNode.right = curr.right; 
                                            }

                                            if( parent.data > curr.data ) {
                                                      parent.left = newNode
                                            } else    parent.right = newNode
                                     }
                                  }
             
                              }              
                      }
});
