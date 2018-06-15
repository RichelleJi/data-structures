

// Instantiate a new graph
var Graph = function() {
//this = Object.create(Graph.prototype)
  this.addNode, this.contains, this.removeNode, this.hasEdge, this.addEdge, this.removeEdge, this.forEachNode;
//return this;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {'collection': []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.hasOwnProperty(node)) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // var deletedCollection = this[node]['collection'];
  for (var item in this[node]['collection']) {
    // this[item]['collection']
    //splice 
    this.removeEdge(this[node]['collection'][item], node);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var item in this[fromNode]['collection']) {
    for (var item2 in this[toNode]['collection']) {
      if (item === item2) {
        return true;
      }
    }   
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.hasOwnProperty(fromNode) && this.hasOwnProperty(toNode)) {
    this[fromNode]['collection'].push(toNode);
    this[toNode]['collection'].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode] = {'collection': []};
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //input function with a input of the each node
  //output: nothing 
  for (var nodes in this) {
    cb(nodes);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


