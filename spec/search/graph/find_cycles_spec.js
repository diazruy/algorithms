var Graph = require('../../../src/data_structures/graph.js');
var findCycles = require('../../../src/search/graph/find_cycles.js');

describe('findCycles', function(){
  var graph;

  function setupGraph(edges) {
    graph = new Graph();
    graph.addEdges(edges);
  }

  describe('when the graph has cycles', function(){
    beforeEach(function(){
      //    b--c
      //   /    \
      //  a      d
      //   \    /
      //    f--e
      var edges = [
        ['a', 'b'],
        ['b', 'c'],
        ['c', 'd'],
        ['d', 'e'],
        ['e', 'f'],
        ['f', 'a']
      ];
      setupGraph(edges);
    });

    it('returns true', function(){
      expect(findCycles(graph)).toBeTruthy();
    })
  });

  describe('when the graph has no cycles', function(){
    beforeEach(function(){
      //    b--c
      //   /
      //  a
      //   \
      //    d--e
      var edges = [
        ['a', 'b'],
        ['b', 'c'],
        ['a', 'd'],
        ['d', 'e']
      ];
      setupGraph(edges);
    });

    it('returns false', function(){
      expect(findCycles(graph)).toBeFalsy();
    })
  });

});
