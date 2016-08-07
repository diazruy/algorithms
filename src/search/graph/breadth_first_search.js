var BreadthFirstSearch = function(graph, start, callbacks) {
  var vertex, edge, y;
  var discovered = {};
  var parents = {};

  var queue = [start];
  discovered[start] = true;

  if(typeof callbacks == 'undefined') {
    callbacks = {
      onProcessVertexEarly: function(){},
    };
  }
  while(queue.length > 0) {
    vertex = queue.shift();
    if(callbacks.onProcessVertexEarly) callbacks.onProcessVertexEarly(vertex);
    edge = graph.vertices[vertex]
    while(edge) {
      y = edge.y;
      if (!discovered[y]) {
        queue.push(y);
        parents[y] = vertex;
        discovered[y] = true;
      }
      edge = edge.next;
    };
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
