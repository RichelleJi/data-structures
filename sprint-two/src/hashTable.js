var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  // this._tuples stores an array of arrays
  // each array within the array holds the k, v pairs entered in insert
  // this._tuples also updates when the k, v pairs are removed from the Hash Table
  this._tuples = [];

  // in order to resize the Hash Table, need to constantly check the length of the _tuples array
  // and compare it to the _limit value
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
  } else {
    this._storage.get(index).push([k, v]);
    if (!this._tuples[index]) {
      this._tuples.push([k, v]);
    }
  }

  // check to see if after inserting, need to resize
  // need stores a boolean value indicating whether or not a resize function needs to be called
  // ._limit has already been altered appropriately
  // the only thing that we need to do is call reSize and create a brand new Hash Table
  var need = this.check(this._tuples);
  if (need === 'DOUBLE') {
    this._limit *= 2;
    this.reSize(this._tuples);
  }
  if (need === 'HALVE') {
    this._limit = this._limit / 2;
    this.reSize(this._tuples);
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
  for (var inc in this._tuples) {
    if (this._tuples[inc][0] === k) {
      this._tuples.splice(inc, 1);
    }
  }
  this._storage.get(index).splice(spliced, 1);

  // check to see after removing, if need to resize
  // need stores a boolean value indicating whether or not a resize function needs to be called
  // ._limit has already been altered appropriately
  // the only thing that we need to do is call reSize and create a brand new Hash Table
  var need = this.check(this._tuples);
  if (need === 'DOUBLE') {
    this._limit *= 2;
    this.reSize(this._tuples);
  }
  if (need === 'HALVE') {
    this._limit /= 2;
    this.reSize(this._tuples);
  }
};

HashTable.prototype.check = function(tuplesArray) {
  if (tuplesArray.length / this._limit >= 0.75) {
    return 'DOUBLE';
  } else if (tuplesArray.length / this._limit < 0.25) {
    return 'HALVE';
  }
  return false;
};

HashTable.prototype.reSize = function(tuplesArray) {
  // this function essentially creates a brand new ._storage based on the new limit
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < tuplesArray.length; i++) {
    this.insert(tuplesArray[i][0], tuplesArray[i][1]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert() is constant --> O(1)
// retrieve() is constant --> O(1)
// remove() is constant --> O(1)