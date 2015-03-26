var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){
  var currentTree = this;
  var found = false;

  var checkTree = function(tree) {
    if (tree.value === target || found) {
      found = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        checkTree(tree.children[i]);
      }
    }
  };

  checkTree(currentTree);

  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
