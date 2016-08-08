var DepthFirstSearch = function(graph, start, callbacks) {
  var edge, y, vertex;
  var noop = function(){};
  var finishEarly = false;
  callbacks = callbacks || {};
  callbacks.onProcessVertexEarly = callbacks.onProcessVertexEarly || noop;
  callbacks.onProcessVertexLate = callbacks.onProcessVertexLate || noop;
  callbacks.onProcessEdge = callbacks.onProcessEdge || noop;

  this.start = start;
  this.parents = {};
  this.discovered = {};
  this.processed = {};

  var search = (function (graph, vertex) {
    var y;
    var edge = graph.vertices[vertex];
    if(finishEarly) return;
    this.discovered[vertex] = true;
    finishEarly = finishEarly || callbacks.onProcessVertexEarly(vertex);
    while(edge) {
      y = edge.y;
      if(!this.discovered[y]) {
        finishEarly = callbacks.onProcessEdge(vertex, y, this);
        this.parents[y] = vertex;
        search(graph, y);
      } else if(!this.processed[y] || graph.isDirected){
        finishEarly = finishEarly || callbacks.onProcessEdge(vertex, y, this);
      }
      edge = edge.next;
    }
    finishEarly = finishEarly || callbacks.onProcessVertexLate(vertex);
  }).bind(this);
  search(graph, start);

};

DepthFirstSearch.prototype.findPath = function(vertex) {
  if(vertex == this.start || !this.parents[vertex]){
    return [this.start];
  } else {
    return this.findPath(this.parents[vertex]).concat(vertex);
  }
};

module.exports = DepthFirstSearch;
