var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  _.extend(newBST, bstMethods);
  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var added = BinarySearchTree(value);
  var recursive = function(parent, obj) {
    (parent.value > obj.value && !parent.left) ? parent.left = added : 1;
    (parent.value > obj.value && parent.left) ? recursive(parent.left, obj) : 1;
    (parent.value < obj.value && !parent.right) ? parent.right = added : 1;
    (parent.value < obj.value && parent.right) ? recursive(parent.right, obj) : 1;
  };
  recursive(this, added);
};

bstMethods.contains = function(value) {
  var equals = false;
  var recursive = function(obj) {
    if (obj === null) {
      return false;
    }
    if (obj.value && obj.value === value) {
      equals = true;
    } else {
      if (obj.value && obj.value < value) {
        recursive(obj.right);
      } else if (obj.value && obj.value > value) {
        recursive(obj.left);
      }
    }
  };
  recursive(this);
  return equals;
};


bstMethods.depthFirstLog = function(cb) {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
