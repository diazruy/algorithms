var DFS = require('./depth_first_search.js')

// Only works on single connected component graph
function findCycles(graph) {
  var start = graph.vertices[Object.keys(graph.vertices)[0]];
  var hasCycles = false;

  var dfs = new DFS(graph, 'a', {
    onProcessEdge: function(x, y, dfs) {
      if(dfs.discovered[y] && dfs.parents[x] != y)  {
        hasCycles = true;
        return true;
      }
    }
  });
  return hasCycles;
};

module.exports = findCycles;
