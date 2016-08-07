var Graph = require('../../src/data_structures/graph.js');

describe('Graph', function(){
  it('builds the graph from the supplied edges', function(){
    var edges = [
      ['a', 'b'],
      ['a', 'c'],
      ['b', 'c']
    ];
    var graph = new Graph(edges);
    expect(Object.keys(graph.vertices).sort()).toEqual(['a', 'b', 'c']);
  });
});
