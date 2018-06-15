var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.hasOwnProperty(item)) {
    this[item] = item;
  }
};

setPrototype.contains = function(item) {
  return (this.hasOwnProperty(item)) ? true : false;
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// add is linear --> O(n)
// contains is linear --> O(n)
// remove is constant --> O(1)