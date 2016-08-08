var LinkedList = function() {
  this.head = null;
  return this;
};

LinkedList.prototype ={
  add: function(key) {
    var node = {
      key: key,
      next: this.head
    };
    this.head = node;
  },

  search: function(key) {
    var node = this.head;
    while(node) {
      if(node.key == key) {
        return node;
      }
      node = node.next;
    }
  },

  remove: function(node){
    var parent = this.head;
    while(parent.next != node) {
      parent = parent.next;
    }
    parent.next = node.next;
  }
};

module.exports = LinkedList;
