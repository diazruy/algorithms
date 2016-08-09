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
      });

      describe("when a duplicate key is added", function(){
        it("throws an error", function(){
          expect(tree.insert.bind(tree,root.key)).toThrow(new Error('Duplicate key not allowed'));
        });
      });
    });
  });
});
