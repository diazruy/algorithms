var MinHeap = require('../../src/data_structures/min_heap.js');

describe('MinHeap', function(){
  var array, heap;

  beforeEach(function(){              //        0              1
    array = [9, 4, 7, 2, 3, 1, 8, 6]; //      /   \          /   \
    heap = new MinHeap(array);        //     4     7   ->   2     7
  });                                 //    / \   / \      / \   / \
                                      //   2   3 1   8    4   3 9   8
                                      //  /              /
                                      // 6              6

  describe('parent', function(){
    it('returns the index of the parent of a given index', function(){
      expect(heap.parent(1)).toEqual(0);
      expect(heap.parent(2)).toEqual(0);
      expect(heap.parent(3)).toEqual(1);
    });
  });

  describe('left', function(){
    it('returns the index of the left child of a given index', function(){
      expect(heap.left(0)).toEqual(1);
      expect(heap.left(1)).toEqual(3);
    });
  });

  describe('right', function(){
    it('returns the index of the right child of a given index', function(){
      expect(heap.right(0)).toEqual(2);
      expect(heap.right(1)).toEqual(4);
    });
  });

  describe('heapify', function(){
    it('floats down a value to the right place', function(){
      heap = new MinHeap([5,2,3,4,1]);
      heap.heapify(1);
      expect(heap.array).toEqual([5,1,3,4,2]);
    });

    describe('with no argument', function(){
      it('floats down a value from the root', function(){
        heap = new MinHeap([3,2,1]);
        heap.heapify();
        expect(heap.array).toEqual([1,2,3]);
      });
    });
  });

  describe('leafStart', function(){
    it('returns the index at which leaves start', function(){
      expect(heap.leafStart()).toEqual(4);
    });
  });

  describe('build', function(){
    it('sets the heap size', function(){
      expect(heap.heapSize).toEqual(array.length);
    });

    it('sorts the heap according to heap property', function(){
      heap.buildHeap(array);
      expect(heap.array).toEqual([1, 2, 7, 4, 3, 9, 8, 6]);
    });
  });

  describe('sort', function(){
    it('sorts the array in descending order', function(){
      heap.sort();
      expect(heap.array).toEqual([9,8,7,6,4,3,2,1]);
    })
  });
});
