var Edge = function(y, weight) {
  return {
    y: y,
    next: null
  };
};

var Graph = function(isDirected) {
  if(typeof isDirected == 'undefined') isDirected = false;
  this.numVertices = 0;
  this.numEdges = 0;
  this.vertices = {};
  this.outDegrees = {};
  this.isDirected = isDirected;
};

Graph.prototype = {
  addEdges: function(edges) {
    var x, y;
    edges.forEach(function(edgePair){
      x = edgePair[0];
      y = edgePair[1];
      this.addEdge(x, y);
    }, this);
  },

  addEdge: function(x, y, isDirected) {
    var edge = new Edge(y);
    if(this.vertices[x]) {
      edge.next = this.vertices[x];
    } else {
      this.numVertices++;
    }
    if(typeof this.outDegrees[x] == 'undefined'){
      this.outDegrees[x] = 0;
    }
    this.outDegrees[x]++;
    this.vertices[x] = edge;
    if(!isDirected) {
      this.addEdge(y, x, true);
    }
  },

  outDegree: function(vertex) {
    return this.outDegrees[vertex];
  }
}

module.exports = Graph;
