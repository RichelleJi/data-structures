var Stack = function() {
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
    // storage.size += 1;
  };

  someInstance.pop = function() {
    var deleted = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return deleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
    // return storage.size;
  };

  return someInstance;
};

// var test = Stack()
// // console.log(test.push('a'))
// test.push('a')
// test.push('b')