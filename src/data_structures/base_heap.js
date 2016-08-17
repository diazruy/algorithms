var BaseHeap = function(array){
  this.array = array;
  this.heapSize = array.length;
};
BaseHeap.prototype = {

  parent: function(index){
    return Math.floor((index + 1)/2) - 1;
  },

  left: function(index) {
    return 2*(index + 1) - 1;
  },

  right: function(index) {
    return this.left(index) + 1;
  },

  leafStart: function(){
    return Math.floor(this.heapSize/2);
  },

  buildHeap: function(array){
    var i;
    this.array = array;
    this.heapSize = array.length;
    for(i = this.leafStart() - 1; i >=0; i--){
      this.heapify(i);
    }
  },

  sort: function() {
    var i, temp;
    this.buildHeap(this.array);
    for(i = 0; i < this.array.length; i++) {
      temp = this.array[0];
      this.array[0] = this.array[this.heapSize - 1];
      this.array[this.heapSize - 1] = temp;
      this.heapSize--;
      this.heapify();
    }
  },

  heapify: function(index) {
    throw "Subclasses must implement";
  },

  peek: function() {
    return this.array[0];
  },

  pop: function() {
    var root, temp;
    if(this.heapSize < 1) throw new Error('heap underflow');
    root = this.array[0];
    this.heapSize--;
    if(this.heapSize > 0) {
      this.array[0] = this.array[this.heapSize];
      this.heapify();
    }
    return root;
  }
};

module.exports = BaseHeap;
