var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var spliced;
  for (var i in this._storage.get(index)) {
    if (this._storage.get(index)[i][0] === k) {
      spliced = i;
    }
  }
  if (this._storage.get(index) === undefined) { 
    this._storage.set(index, []);
  }
  if (this.retrieve(k)) {
    this._storage.get(index)[spliced][1] = v;
    //should somehow use retrieve/get?
  } else {
    this._storage.get(index).push([k, v]);
  }
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i in this._storage.get(index)) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var spliced;
  for (var i in this._storage.get(index)) {
    if (this._storage.get(index)[i][0] === k) {
      spliced = i;
    }
  }
  this._storage.get(index).splice(spliced, 1);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert() is linear --> O(1)
// retrieve() is linear --> O(n)
// remove() is linear --> O(1)