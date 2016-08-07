var BreadthFirstSearch = function(graph, start, callbacks) {
  var vertex, edge, y;
  var discovered = {};
  var processed={};
  var parents = {};

  var queue = [start];
  var noop = function(){};
  discovered[start] = true;

  callbacks = callbacks || {}
  callbacks.onProcessVertexEarly = callbacks.onProcessVertexEarly || noop;
  callbacks.onProcessVertexLate = callbacks.onProcessVertexLate || noop;
  callbacks.onProcessEdge = callbacks.onProcessEdge || noop;

  while(queue.length > 0) {
    vertex = queue.shift();
    callbacks.onProcessVertexEarly(vertex);
    processed[vertex] = true;
    edge = graph.vertices[vertex]
    while(edge) {
      y = edge.y;
      if(!processed[y] || graph.isDirected) {
        callbacks.onProcessEdge(vertex, y);
      }
      if (!discovered[y]) {
        queue.push(y);
        parents[y] = vertex;
        discovered[y] = true;
      }
      edge = edge.next;
    };
    callbacks.onProcessVertexLate(vertex);
  }
  this.parents = parents;
};

BreadthFirstSearch.prototype = {
  shortestPathTo: function(vertex){
    var path = [vertex];
    var parent = this.parents[vertex];
    while(parent) {
      path.unshift(parent);
      parent =  this.parents[parent];
    }
    return path;
  },

  connectedComponents: function() {
    return 0;
  }
};

module.exports = BreadthFirstSearch;
