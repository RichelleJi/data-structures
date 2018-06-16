var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return (this._storage.hasOwnProperty(item)) ? true : false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.unique = function(string) {
  var count = 0;
  for (var elem in this._storage) {
    if (this._storage[elem] === string) {
      count++;
    }
  }
  return (count === 1) ? true : false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// add is linear --> O(n)
// contains is linear --> O(n)
// remove is constant --> O(1)