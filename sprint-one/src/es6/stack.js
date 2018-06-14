// class Stack {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   constructor() {
//   }

// }
class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this[0] = {};
    this.length = 0;
  }
  
  push(value) {
    this[this.length] = value;
    this.length += 1;
  }

  pop() {
    var val = this[this.length - 1];
    if (this.length > 0) {
      this[this.length - 1] = null;
      this.length -= 1;
    }
    return val;
  }

  size() {
    return this.length;
  }
}