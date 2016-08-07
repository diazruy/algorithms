var Graph = require('../../../src/data_structures/graph.js');
var DFS = require('../../../src/search/graph/depth_first_search.js');

describe('DepthFirstSearch', function(){
  var graph, dfs;
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
    dfs = new DFS(graph, 'a');
  });

  describe('findPath' , function(){
    it('returns the path to a given node', function(){
      expect(dfs.findPath('d')).toEqual(['a','b', 'f', 'e', 'd']);
    })
  });

});
