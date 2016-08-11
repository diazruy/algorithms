var BaseHeap = require('./base_heap.js');

var MinHeap = function(array){
  this.array = array;
  this.heapSize = array.length;
  return this;
};

MinHeap.prototype = Object.create(BaseHeap.prototype)

MinHeap.prototype.heapify = function(index){
  var l, r, smallest, temp;
  if(typeof index === 'undefined') index = 0;
  l = this.left(index);
  r = this.right(index);

  if(l < this.heapSize && this.array[l] < this.array[index]){
    smallest = l;
  } else {
    smallest = index;
  }
  if(r < this.heapSize && this.array[r] < this.array[smallest]){
    smallest = r;
  }
  if(smallest != index) {
    temp = this.array[smallest];
    this.array[smallest] = this.array[index];
    this.array[index] = temp;
    this.heapify(smallest);
  }
};

module.exports = MinHeap;
