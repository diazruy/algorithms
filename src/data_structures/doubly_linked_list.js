var LinkedList = require('./linked_list.js');

var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  return this;
};

DoublyLinkedList.prototype = Object.create(LinkedList.prototype);
DoublyLinkedList.prototype.constructor = DoublyLinkedList;

DoublyLinkedList.prototype.add = function(key) {
  var node = Object.getPrototypeOf(DoublyLinkedList.prototype).add.bind(this)(key);
  node.prev = null;
  if(node.next){
    node.next.prev = node;
  } else {
    this.tail = node;
  }
  return node;
};

DoublyLinkedList.prototype.remove = function(node) {
  var parent, child;
  parent = node.prev;
  child = node.next
  if(parent) {
    parent.next = node.next;
  } else {
    // Head removed
    this.head = child;
  }
  if(child) {
    child.prev = parent;
  } else {
    // Tail removed
    this.tail = parent;
  }
};

module.exports = DoublyLinkedList;
