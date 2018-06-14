// class Queue {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   constructor() {
//   }

// }


class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this[0] = {};
    this.length = 0;
  }

  enqueue(value) {
    this.length += 1;
    this[this.length - 1] = value;
  }

  dequeue() {
    var val = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length -= 1;
    return val;
  }

  size() {
    if (this.length < 0) {
      return 0;
    }
    return this.length;
  }
}
