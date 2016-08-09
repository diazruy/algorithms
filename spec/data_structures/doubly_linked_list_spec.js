var DoublyLinkedList = require('../../src/data_structures/doubly_linked_list.js');

describe('DoublyLinkedList', function(){
  var list;

  beforeEach(function(){
    list = new DoublyLinkedList();
  });

  describe('insert', function(){
    it('adds an element to the head of the list', function(){
      list.add('a');
      expect(list.head.key).toEqual('a');
    });

    it('sets up the next pointer to the next element', function(){
      list.add('a');
      list.add('b');
      expect(list.head.next.key).toEqual('a');
    });

    it('sets up the prev pointer to the previous element', function(){
      list.add('a');
      list.add('b');
      expect(list.head.next.prev).toEqual(list.head);
    });

    it('sets the tail pointer to the last element in the list (first inserted)', function(){
      var nodeA = list.add('a');
      var nodeB = list.add('b');
      expect(list.tail).toEqual(nodeA);
    });

    it('sets the head pointer to the first element in the list (last inserted)', function(){
      var nodeA = list.add('a');
      var nodeB = list.add('b');
      expect(list.head).toEqual(nodeB);
    });
  });

  describe('search', function(){
    it('returns the node with the key', function(){
      list.add('a');
      expect(list.search('a').key).toEqual('a');
    });

    describe('when the key is not found', function(){
      it('returns null', function(){
        expect(list.search('a')).toEqual(null);
      });
    });
  });

  describe('remove', function() {
    it('deletes the given node', function(){
      var nodeA, nodeB;
      nodeA = list.add('a');
      nodeB = list.add('b');
      list.remove(nodeA);
      expect(list.search('a')).toBeUndefined();
    });

    describe('when deleting the first node', function(){
      it('updates the head of the list to the node after the deleted one', function(){
        var nodeA, nodeB;
        nodeA = list.add('a');
        nodeB = list.add('b');
        list.remove(nodeB);
        expect(list.head.key).toEqual('a');
      });

      describe('when it\'s the only node', function() {
        it('sets the head to null', function(){
          var nodeA, nodeB;
          nodeA = list.add('a');
          list.remove(nodeA);
          expect(list.head).toBeNull();
        })
      });
    });

    it('updates the previous pointer of the next node', function(){
      var nodeA, nodeB, nodeC;
      nodeC = list.add('c');
      nodeB = list.add('b');
      nodeA = list.add('a');
      list.remove(nodeB);
      expect(nodeC.prev).toEqual(nodeA);
    });

    describe('when deleting the last node', function(){
      it('moves the last pointer to the previous node', function(){
        var nodeA, nodeB;
        nodeB = list.add('b');
        nodeA = list.add('a');
        list.remove(nodeA);
        expect(list.tail).toEqual(nodeB);
      });

      describe('when it\'s the only node', function(){
        it('sets the last pointer to null', function(){
          var nodeA, nodeB;
          nodeA = list.add('a');
          list.remove(nodeA);
          expect(list.tail).toBeNull();
        });
      });
    });
  });
});
