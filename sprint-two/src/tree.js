var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {};
  _.extend(child, Tree(value));
  this.children.push(child);
};

treeMethods.contains = function(target) {
  for (var elem in this.children) {
    if (this.children[elem].value === target) {
      return true;
    }
    for (var element in this.children[elem].children) {
      if (this.children[elem].children[element].value === target) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild(value) is linear --> O(n)
// contains(target) is linear --> O(n)