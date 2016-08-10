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
          var grandChild;
          beforeEach(function(){
            grandChild = tree.insert(1);
          });

          it('inserts a new node as a third level', function(){
            expect(node.left).toEqual(grandChild);
          });

          it('sets the parent of the child to the second level', function(){
            expect(grandChild.parent).toEqual(node);
          })
        });
      });

      describe("when a duplicate key is added", function(){
        it("throws an error", function(){
          expect(tree.insert.bind(tree,root.key)).toThrow(new Error('Duplicate key not allowed'));
        });
      });
    });
  });

  describe('remove', function(){
    describe('when the node has no children', function(){
      it('removes the node', function(){
        var node4, node5;
        node5 = tree.insert(5);
        node4 = tree.insert(4);
        tree.remove(node4);
        expect(tree.search(4)).toBeNull();
        expect(node5.left).toBeNull();
      });
    });

    describe('when the node has one child', function(){
      describe('when the child is the left branch', function(){
        var node3, node4, node5;

        beforeEach(function(){    //     5      5
          node5 = tree.insert(5); //    /      /
          node4 = tree.insert(4); //   4  ->  3
          node3 = tree.insert(3); //  /
          tree.remove(node4);     // 3
        });

        it('moves the child to be a child of the grandparent', function(){
          expect(node3.parent).toEqual(node5);
          expect(node5.left).toEqual(node3);
        });
      });

      describe('when the child is the right branch', function(){
        var node3, node4, node5;

        beforeEach(function(){    // 3       3
          node3 = tree.insert(3); //  \       \
          node4 = tree.insert(4); //   4  ->   5
          node5 = tree.insert(5); //    \
          tree.remove(node4);     //     5
        });

        it('moves the child to be a child of the grandparent', function(){
          expect(node5.parent).toEqual(node3);
          expect(node3.right).toEqual(node5);
        });
      });
    });

    describe('when the node has two children', function(){
      var node3, node4, node5, node6, node7;

      beforeEach(function(){    //     7         7
        node7 = tree.insert(7); //    /         /
        node4 = tree.insert(4); //   4    ->   5
        node5 = tree.insert(5); //  / \       / \
        node3 = tree.insert(3); // 3   5     3   6
        node6 = tree.insert(6); //      \
        tree.remove(node4);     //       6
      });

      it('removes the node', function(){
        expect(tree.search(4)).toBeNull();
      });

      it("moves the node's right branch minimum to where the node used to be", function(){
        expect(node7.left).toEqual(node5);
        expect(node5.parent).toEqual(node7);
        expect(node5.left).toEqual(node3);
        expect(node3.parent).toEqual(node5);
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

  describe('searchRecursive', function(){
    it('finds a key on the left', function(){
      var node;
      tree.insert(2);
      node = tree.insert(1);
      expect(tree.searchRecursive(1)).toEqual(node);
    });
    it('finds a key on the right', function(){
      var node;
      tree.insert(1);
      node = tree.insert(2);
      expect(tree.searchRecursive(2)).toEqual(node);
    });

    describe('when the key is not found', function(){
      it('returns null', function(){
        expect(tree.searchRecursive(2)).toBeNull();
      });
    });
  });

  describe('given a tree', function(){
    beforeEach(function(){
      tree.insert(6); //     6
      tree.insert(7); //    / \
      tree.insert(2); //   2   7
      tree.insert(9); //  / \   \
      tree.insert(8); // 1   3   9
      tree.insert(1); //        /
      tree.insert(3); //       8
    });

    describe('min', function(){
      describe('without an argument', function(){
        it('returns the smallest node in the tree', function(){
          expect(tree.min().key).toEqual(1);
        });
      });

      describe('with an argument', function(){
        it('returns the smallest node in the subtree', function(){
          var node = tree.search(9);
          expect(tree.min(node).key).toEqual(8);
        });
      });
    });

    describe('max', function(){
      describe('without an argument', function(){
        it('returns the largest node in the tree', function(){
          expect(tree.max().key).toEqual(9);
        });
      });

      describe('when given a node', function(){
        it('returns the largest node in the subtree', function(){
          var node = tree.search(2);
          expect(tree.max(node).key).toEqual(3);
        });
      });
    });

    describe('pred', function(){
      describe('when the node has a left subtree', function(){
        it('returns the maximum of the subtree', function(){
          var node = tree.search(9);
          expect(tree.pred(node).key).toEqual(8);
        });
      });

      describe('when the node has no left subtree', function(){
        it('returns the first ancestor where the node is in the right branch', function(){
          var node = tree.search(3);
          expect(tree.pred(node).key).toEqual(2);
        });

        describe('when there is no predecessor', function(){
          it('returns null', function(){
            var node = tree.search(1);
            expect(tree.pred(node)).toBeNull();
          });
        });
      });
    });

    describe('succ', function(){
      describe('when the node has a right subtree', function(){
        it('returns the minimum in the subtree', function(){
          var node = tree.search(6);
          expect(tree.succ(node).key).toEqual(7);
        });
      });

      describe('when the node has no right subtree', function(){
        it('returns the first ancestor where the node is in the left branch', function(){
          var node = tree.search(3);
          expect(tree.succ(node).key).toEqual(6);
        });

        describe('when there is no successor', function(){
          it('returns null', function(){
            var node = tree.search(9);
            expect(tree.succ(node)).toBeNull();
          });
        });
      });
    });

    describe('traversal', function(){
      describe('inOrder', function(){
        it('returns an array of keys in order', function(){
          expect(tree.inOrder()).toEqual([1,2,3,6,7,8,9]);
        });
      });

      describe('inOrderRecursive', function(){
        it('returns an array of keys in order', function(){
          expect(tree.inOrderRecursive(tree.root)).toEqual([1,2,3,6,7,8,9]);
        });
      });
    });
  });
});
