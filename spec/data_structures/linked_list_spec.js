var LinkedList = require('../../src/data_structures/linked_list.js');

describe('LinkedList', function(){
  describe('insert', function(){
    it('adds an element to the head of the list', function(){
      var list = new LinkedList();
      list.add('a');
      expect(list.head.key).toEqual('a');
    });

    it('sets up the next pointer to the next element', function(){
      var list = new LinkedList();
      list.add('a');
      list.add('b');
      expect(list.head.next.key).toEqual('a');
    });
  });

  describe('search', function(){
    it('returns the node with the key', function(){
      var list = new LinkedList();
      list.add('a');
      expect(list.search('a').key).toEqual('a');
    });

    describe('when the key is not found', function(){
      it('returns null', function(){
        var list = new LinkedList();
        expect(list.search('a')).toEqual(null);
      });
    });
  });

  describe('remove', function() {
    it('deletes the given node', function(){
      var list = new LinkedList();
      list.add('a');
      list.add('b');
      var node = list.search('a');
      list.remove(node);
      expect(list.head.key).toEqual('b');
    });
  });
});
