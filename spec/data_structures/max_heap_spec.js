var MaxHeap = require('../../src/data_structures/max_heap.js');

describe('MaxHeap', function(){
  var array, heap;

  beforeEach(function(){              //        9              9
    array = [9, 4, 7, 2, 3, 1, 8, 6]; //      /   \          /   \
    heap = new MaxHeap([])   ;        //     4     7   ->   6     8
    heap.buildHeap(array);            //    / \   / \      / \   / \
  });                                 //   2   3 1   8    4   3 1   7
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

  describe('pop', function(){
    it('returns the key at the root of the heap', function(){
      expect(heap.pop()).toEqual(9);
    });

    it('removes the key at the root of the heap', function(){
      heap.pop();
      expect(heap.heapSize).toEqual(array.length - 1);
    });

    it('rebalances the heap', function(){
      heap.pop();
      expect(heap.peek()).toEqual(8);
    });

    describe('when the heap is empty', function(){
      it('throws an error', function(){
        heap = new MaxHeap([]);
        expect(function(){heap.pop()}).toThrow(new Error('heap underflow'));
      });
    })
  });

  describe('increase', function(){
    it('moves the given key to the new position', function(){
      heap.increase(7,5);
      expect(heap.array[7]).toEqual(4);
      expect(heap.array[3]).toEqual(5);
    });

    it('raises an error if reducing the value', function(){
      expect(function(){ heap.increase(7, 1); }).toThrow(new Error("can't reduce the value 2 to 1"));
    });
  });

  describe('push', function(){
    it('adds a new item in the right position', function(){
      heap.push(5);
      expect(heap.array[3]).toEqual(5);
      expect(heap.array[8]).toEqual(4);
    });

    it('increases the heapSize', function(){
      heap.push(5);
      expect(heap.heapSize).toEqual(9);
    });
  });
});
