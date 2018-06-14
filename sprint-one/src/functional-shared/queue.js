// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//    var someInstance = {};
//   _.extend(someInstance, queueMethods);
//   var storage = {};
//   var size = 0; 

//   return someInstance;
// };

// var queueMethods = {
// 	// enqueue: function(value) {
// 	//     storage[size+start] = value;
// 	//     size += 1;
// 	// },
// 	// dequeue: function() {
// 	//     if(size === 0){
// 	//       return 0;
// 	//     }, 
// 	//     var deleted = storage[start];
// 	//     delete storage[start];
// 	//     size -= 1;
// 	//     start += 1;
// 	//     return deleted;
//  //    }, 
// 	// size : function() {
//  //    		return size;
// 	// }
// };


var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    counter: 0,
    storage: {},
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size
  };

  return instance;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.counter++] = value;
    console.log("counter", this.counter);
  },
  dequeue: function() {
    if (this.counter > 0) {
      var removed = this.storage[0];
      for (var i = 0; i < this.counter; i++) {
        this.storage[i] = this.storage[i+1];
      }
      delete this.storage[--this.counter];
      return removed;
    }
  },

  size: function(){
    return this.counter;
  }
};
