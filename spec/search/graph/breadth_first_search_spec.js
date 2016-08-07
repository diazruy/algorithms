var Graph = require('../../../src/data_structures/graph.js');
var BFS = require('../../../src/search/graph/breadth_first_search.js');

describe('BreadthFirstSearch', function(){
  var graph, bfs;
  beforeEach(function(){
    //    b--f------g
    //   /   \     /
    //  a     \   /
    //   \     \ /
    //    c--d--e
    var edges = [
      ['a', 'b'],
      ['a', 'c'],
      ['b', 'f'],
      ['f', 'g'],
      ['c', 'd'],
      ['d', 'e'],
      ['e', 'f'],
      ['e', 'g']
    ];
    graph = new Graph();
    graph.addEdges(edges);
    bfs = new BFS(graph, 'a');
  });

  describe('#shortestPathTo', function() {
    it('returns the shortest path to a given node', function(){
      expect(bfs.shortestPathTo('g')).toEqual(['a', 'b', 'f', 'g']);
    });
  });

});
