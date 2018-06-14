var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { 
    var tailnode = Node(value);
    if (this.tail) {
      this.tail.next = tailnode;
    } 
    this.tail = tailnode;
    if (this.head === null) {
      this.head = tailnode;
    }
  };

  list.removeHead = function() {
    // if (this.head) {
      
    // }
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target) {
    var current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
