var LinkedList = require('../../src/data_structures/linked_list.js');

describe('LinkedList', function(){
  var list;

  beforeEach(function(){
    list = new LinkedList();
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
      var node;
      list.add('a');
      list.add('b');
      node = list.search('a');
      list.remove(node);
      expect(list.head.key).toEqual('b');
    });
  });
});
