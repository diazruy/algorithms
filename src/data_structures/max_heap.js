var BaseHeap = require('./base_heap.js');

var MaxHeap = function(array){
  this.array = array;
  this.heapSize = array.length;
  return this;
};

MaxHeap.prototype = Object.create(BaseHeap.prototype)

MaxHeap.prototype.heapify = function(index) {
  var l, r, largest, temp;
  if(typeof index === 'undefined') index = 0;
  l = this.left(index);
  r = this.right(index);

  if(l < this.heapSize && this.array[l] > this.array[index]){
    largest = l;
  } else {
    largest = index;
  }
  if(r < this.heapSize && this.array[r] > this.array[largest]){
    largest = r;
  }
  if(largest != index) {
    temp = this.array[largest];
    this.array[largest] = this.array[index];
    this.array[index] = temp;
    this.heapify(largest);
  }
};
module.exports = MaxHeap;
