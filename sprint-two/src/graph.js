

var Graph = function(){
  this.vertices = {};
};

Graph.prototype.addNode = function(node){
  this.vertices[node] = {};
};

Graph.prototype.contains = function(node){
  return !!this.vertices[node];
};

Graph.prototype.removeNode = function(node){
  if(this.vertices[node]){
    delete this.vertices[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!this.vertices[fromNode][toNode] && !!this.vertices[toNode][fromNode]
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.vertices[fromNode] && this.vertices[toNode] && this.vertices[toNode] !== this.vertices[fromNode]){
    this.vertices[fromNode][toNode] = fromNode;
    this.vertices[toNode][fromNode] = fromNode;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.vertices[fromNode][toNode] && this.vertices[toNode][fromNode]){
    delete this.vertices[fromNode][toNode];
    delete this.vertices[toNode][fromNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.vertices, function(item, i){
    cb(i);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



