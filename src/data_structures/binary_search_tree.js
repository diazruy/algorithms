var TreeNode = function(key){
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
  return this;
};

var BinarySearchTree = function() {
  this.root = null;
  return this;
};

BinarySearchTree.prototype = {
  insert: function(key) {
    var node = this.root;
    var parent = this.root;
    while(node !== null){
      parent = node;
      if(key == node.key){
        throw new Error("Duplicate key not allowed");
      } else if(key < node.key) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    node = new TreeNode(key);

    if(parent === null) {
      this.root = node;
    } else {
      node.parent = parent;
      if (key <= parent.key) {
        parent.left = node;
      } else {
        parent.right = node;
      }
    }
    return node;
  },

  search: function(key) {
    var node = this.root;
    while(node !== null && node.key !== key) {
      if (key < node.key) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return node;
  },

  min: function() {
    var node = this.root;
    var parent;
    while(node !== null) {
      parent = node;
      node = node.left;
    }
    return parent;
  },

  max: function(){
    var node = this.root;
    var parent;
    while(node !== null) {
      parent = node;
      node = node.right;
    }
    return parent;
  }
};

module.exports = BinarySearchTree;
