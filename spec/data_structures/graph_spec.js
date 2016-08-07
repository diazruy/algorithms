var Graph = require('../../src/data_structures/graph.js');

describe('Graph', function(){
  var graph;

  beforeEach(function() {
    var edges = [
      ['a', 'b'],
      ['a', 'c'],
      ['b', 'c']
    ];
    graph = new Graph();
    graph.addEdges(edges);
  });

  it('builds the graph from the supplied edges', function(){
    expect(Object.keys(graph.vertices).sort()).toEqual(['a', 'b', 'c']);
  });

  describe('numVertices', function(){
    it('returns the total number of vertices', function() {
      expect(graph.numVertices).toEqual(3);
    });
  });

  describe('outDegree', function(){
    it('returns the number of edges connecting to a vertex', function(){
      expect(graph.outDegree('a')).toEqual(2);
    });
  });
});
