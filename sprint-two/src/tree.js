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
  var equals = false;
  var recursive = function(tree) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i].value === target) {
        equals = true;
      } else {
        recursive(tree[i].children);
      }
    }
  };
  recursive(this.children);
  return equals;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild(value) is linear --> O(n)
// contains(target) is linear --> O(n)