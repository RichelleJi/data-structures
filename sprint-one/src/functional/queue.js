var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0
  var start = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // storage[someInstance.size()] = vaue;
    // var added = value;
    storage[size+start] = value;
    size += 1;

  };

  someInstance.dequeue = function() {
    if(size === 0){
      return 0;
    }

    var deleted = storage[start];
    delete storage[start];
    size -= 1;
    start += 1;
    return deleted;
    };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};