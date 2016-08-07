var DepthFirstSearch = function(graph, start, callbacks) {
  var discovered = {};
  var parents = {};
  var edge, y, vertex;
  var noop = function(){};
  callbacks = callbacks || {};
  callbacks.onProcessVertexEarly = callbacks.onProcessVertexEarly || noop;
  callbacks.onProcessVertexLate = callbacks.onProcessVertexLate || noop;
  callbacks.onProcessEdge = callbacks.onProcessEdge || noop;

  function search(graph, vertex) {
    var y;
    var edge = graph.vertices[vertex];
    while(edge) {
      y = edge.y;
      if(!discovered[y]) {
        discovered[y] = true;
        parents[y] = vertex;
        search(graph, y);
      }
      edge = edge.next;
    }
  }
  search(graph, start);

  this.start = start;
  this.parents = parents;
};

DepthFirstSearch.prototype.findPath = function(vertex) {
  if(vertex == this.start || !this.parents[vertex]){
    return [this.start];
  } else {
    return this.findPath(this.parents[vertex]).concat(vertex);
  }
};

module.exports = DepthFirstSearch;
