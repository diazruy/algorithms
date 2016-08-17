var BaseHeap = require('./base_heap.js');

var MaxHeap = function(array){
  this.array = array;
  this.heapSize = array.length;
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

MaxHeap.prototype.increase = function(index, key) {
  var temp, parent;
  if(this.array[index] > key) throw new Error("can't reduce the value " + this.array[index] + ' to ' + key);
  this.array[index] = key;
  parent = this.parent(index);
  while(index > 0 && this.array[parent] < this.array[index]) {
    temp = this.array[parent];
    this.array[parent] = this.array[index]
    this.array[index] = temp;
    index = parent;
    parent = this.parent(index);
  }
};

MaxHeap.prototype.push = function(key) {
  this.array[this.heapSize] = -1;
  this.increase(this.heapSize, key);
  this.heapSize++;
};

module.exports = MaxHeap;
