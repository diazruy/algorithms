var MaxHeap = function(array){
  this.array = array;
  this.heapSize = array.length;
  return this;
};

MaxHeap.prototype = {
  heapify: function(index) {
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
  },

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
  }
};
module.exports = MaxHeap;
