var DepthFirstSearch = function(graph, start, callbacks) {
  var discovered = {};
  var parents = {};
  var edge, y, vertex;
  var noop = function(){};
  callbacks = callbacks || {};
  callbacks.onProcessVertexEarly = callbacks.onProcessVertexEarly || noop;
  callbacks.onProcessVertexLate = callbacks.onProcessVertexLate || noop;
  callbacks.onProcessEdge = callbacks.onProcessEdge || noop;
  var stack = [start];
  discovered[start] = true;
  while(stack.length > 0) {
    vertex = stack.pop();
    callbacks.onProcessVertexEarly(vertex);
    edge = graph.vertices[vertex];
    while(edge) {
      y = edge.y;
      callbacks.onProcessEdge(vertex, y);
      if(!discovered[y]) {
        stack.push(y);
        discovered[y] = true;
        parents[y] = vertex;
      }
      edge = edge.next;
    }
  }
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
