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

var Node=new Class({initialize:function(t){this.data=t,this.left=null,this.right=null}}),BinarySearchTree=new Class({initialize:function(){this._root=null},add:function(t){if(null==this._root)this._root=new Node(t),this._root.left=null,this._root.right=null;else for(curr=this._root;;)if(t<curr.data){if(null==curr.left){curr.left=new Node(t);break}curr=curr.left}else{if(null==curr.right){curr.right=new Node(t);break}curr=curr.right}},search:function(t){for(var r=0,i=this._root;i&&!r;)i.data==t?r=1:i=t<i.data?i.left:i.right;return r},__inorder:function(t){var r=function(i){i.left&&r(i.left),t.call(this,i),i.right&&r(i.right)};r(this._root)},__postorder:function(t){var r=function(i){i.left&&r(i.left),i.right&&r(i.right),t.call(this,i)};r(this._root)},__preorder:function(t){var r=function(i){t.call(this,i),i.left&&r(i.left),i.right&&r(i.right)};r(this._root)},inorder:function(){var t=[];return this.__inorder(function(r){t.push(r.data)}),t},postorder:function(){var t=[];return this.__postorder(function(r){t.push(r.data)}),t},preorder:function(){var t=[];return this.__preorder(function(r){t.push(r.data)}),t},size:function(){var t=0;return this.__inorder(function(){t++}),t},toString:function(){return this.inorder().toString()},"delete":function(t){for(var r,i=this._root,e=null,o=null,n=0,l=0;i&&!n;)i.data==t?n=1:t<i.data?(e=i,i=i.left):(e=i,i=i.right);if(n)if(l=l+(null!=i.left?1:0)+(null!=i.right?1:0),i==this._root)switch(l){case 0:break;case 1:break;case 2:for(r=this._root.left;r.right;)o=r,r=r.right;null!=o?(o.right=r.left,r.left=this._root.left,r.right=this._root.right):r.right=this._root.right,this._root=r}else switch(l){case 0:e.data>i.data?e.left=null:e.right=null;break;case 1:var h=null!=i.left?i.left:i.right;e.data>i.data?e.left=h:e.right=h;break;case 2:for(o=i,r=i.left;r.right;)o=r,r=r.right;o!=i?(o.right=r.left,r.left=i.left,r.right=i.right):r.right=i.right,e.data>i.data?e.left=r:e.right=r}}});