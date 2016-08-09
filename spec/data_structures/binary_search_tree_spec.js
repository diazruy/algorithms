var BinarySearchTree = require('../../src/data_structures/binary_search_tree.js');

describe('BinarySearchTree', function(){
  var tree;

  beforeEach(function(){
    tree = new BinarySearchTree();
  });

  describe('insert', function(){
    describe('on an empty tree', function(){
      it('adds a node at the root', function(){
        var root = tree.insert(4);
        expect(root.parent).toBeNull();
      });
    });

    describe('on a rooted tree', function(){
      var root, node;

      beforeEach(function(){
        root = tree.insert(4);
      });

      describe('when the key is greater than the root', function(){
        beforeEach(function(){
          node = tree.insert(6);
        });

        it('adds to the right', function(){
          expect(root.right).toEqual(node);
        });

        it("sets the node's parent to the root", function() {
          expect(node.parent).toEqual(root);
        });
      });

      describe("when the key is less than the root's", function(){
        beforeEach(function(){
          node = tree.insert(2);
        });

        it('adds to the left', function(){
          expect(root.left).toEqual(node);
        });

        it("sets the node's parent to the root", function() {
          expect(node.parent).toEqual(root);
        });

        describe('when adding a granchild', function(){
          it('inserts a new node as a third level', function(){
            var grandChild = tree.insert(1);
            expect(grandChild.parent).toEqual(node);
          });
        });
      });

      describe("when a duplicate key is added", function(){
        it("throws an error", function(){
          expect(tree.insert.bind(tree,root.key)).toThrow(new Error('Duplicate key not allowed'));
        });
      });
    });
  });

  describe('search', function(){
    it('finds a key on the left', function(){
      var node;
      tree.insert(2);
      node = tree.insert(1);
      expect(tree.search(1)).toEqual(node);
    });
    it('finds a key on the right', function(){
      var node;
      tree.insert(1);
      node = tree.insert(2);
      expect(tree.search(2)).toEqual(node);
    });

    describe('when the key is not found', function(){
      it('returns null', function(){
        expect(tree.search(2)).toBeNull();
      });
    });
  });

  describe('given a tree', function(){
    beforeEach(function(){
      tree.insert(6);
      tree.insert(7);
      tree.insert(2);
      tree.insert(8);
      tree.insert(1);
    });

    describe('min', function(){
      it('returns the smallest node in the tree', function(){
        expect(tree.min().key).toEqual(1);
      });
    });

    describe('max', function(){
      it('returns the largest node in the tree', function(){
        expect(tree.max().key).toEqual(8);
      });
    });
  });

});
