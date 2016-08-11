var BaseHeap = require('../../src/data_structures/base_heap.js');

describe('BaseHeap', function(){
  var array, heap;

  beforeEach(function(){              //        9
    array = [9, 4, 7, 2, 3, 1, 8, 6]; //      /   \
    heap = new BaseHeap(array);        //     4     7
  });                                 //    / \   / \
                                      //   2   3 1   8
                                      //  /
                                      // 6

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

  describe('leafStart', function(){
    it('returns the index at which leaves start', function(){
      expect(heap.leafStart()).toEqual(4);
    });
  });

  describe('peek', function(){
    it('returns the key at the root of the heap', function(){
      expect(heap.peek()).toEqual(9);
    });
  });
});
