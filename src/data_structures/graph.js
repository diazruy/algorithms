var Edge = function(y, weight) {
  return {
    y: y,
    next: null
  };
};

var Graph = function(edges, isDirected) {
  if(typeof isDirected == 'undefined') isDirected = false;
  var x, y, edge, vertices;
  vertices = {};
  edges.forEach(function(edgePair){
    x = edgePair[0];
    y = edgePair[1];
    Graph.addEdge(vertices, x, y, isDirected);
  });
  return {
    numVertices: 0,
    numEdges: 0,
    vertices: vertices
  };
};

Graph.addEdge = function(vertices, x, y, isDirected) {
  var edge = new Edge(y);
  if(vertices[x]) {
    edge.next = vertices[x];
  }
  vertices[x] = edge;
  if(!isDirected) {
    Graph.addEdge(vertices, y, x, true);
  }
};

module.exports = Graph;
