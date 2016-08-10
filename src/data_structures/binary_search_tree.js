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

  min: function(subtree) {
    var node = subtree || this.root;
    if (node.left === null) {
      return node;
    } else {
      return this.min(node.left);
    }
  },

  max: function(subtree){
    var node = subtree || this.root;
    if(node.right === null) {
      return node;
    } else {
      return this.max(node.right);
    }
  },

  pred: function(node) {
    var pred, parent;

    if(node.left !== null) {
      pred = this.max(node.left);
    } else {
      parent = node.parent;
      parent = node.parent;
      if (parent === null) return null; // Root node
      while(parent !== null && node === parent.left){
        parent = parent.parent
      }
      pred = parent;
    }
    return pred;
  }
};

module.exports = BinarySearchTree;
