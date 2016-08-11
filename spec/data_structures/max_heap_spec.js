var MaxHeap = require('../../src/data_structures/max_heap.js');

describe('MaxHeap', function(){
  var array, heap;

  beforeEach(function(){              //        9              9
    array = [9, 4, 7, 2, 3, 1, 8, 6]; //      /   \          /   \
    heap = new MaxHeap(array);        //     4     7   ->   6     8
  });                                 //    / \   / \      / \   / \
                                      //   2   3 1   8    4   3 1   7
                                      //  /              /
                                      // 6              2

  describe('heapify', function(){
    it('floats down a value to the right place', function(){
      heap = new MaxHeap([5,1,3,4,2]);
      heap.heapify(1);
      expect(heap.array).toEqual([5,4,3,1,2]);
    });

    describe('with no argument', function(){
      it('floats down a value from the root', function(){
        heap = new MaxHeap([1,2,3]);
        heap.heapify();
        expect(heap.array).toEqual([3,2,1]);
      });
    });
  });

  describe('build', function(){
    it('sets the heap size', function(){
      expect(heap.heapSize).toEqual(array.length);
    });

    it('sorts the heap according to heap property', function(){
      heap.buildHeap(array);
      expect(heap.array).toEqual([9, 6, 8, 4, 3, 1, 7, 2]);
    });
  });

  describe('sort', function(){
    it('sorts the array in ascending order', function(){
      heap.sort();
      expect(heap.array).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
    })
  });
});
