// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.

//   var someInstance = {
//   	storage: {},
//   	size: 0
//   };
//   _.extend(someInstance, stackMethods);
//   // var storage = {};
//   // var size = 0; 
//   return someInstance;

// };

// var stackMethods = {
// 	push: function(value){
// 	    this.storage[someInstance.size()] = value;	

// 	},
// 	pop: function(){
// 		var deleted = this.storage[someInstance.size() - 1];
// 		delete this.storage[someInstance.size() - 1];
// 		return deleted;
// 	},
// 	size: function(){
// 		return Object.keys(this.storage).length;
// 	}

// };


// var test = Stack();

// test.push('a');
// test.push('b');


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    counter: 0,
  };
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.counter++] = value;
  },
  pop: function(){
    if (this.counter > 0){
      var removed = this.storage[--this.counter];
      delete this.storage[this.counter];
      return removed;
    }
  },
  size: function(){
      return this.counter;
  }
};