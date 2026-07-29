class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.tail = node;
      this.head = node;
      this.size++;
      return;
    }
    this.tail.nextNode = node;
    node.previous = this.tail;
    this.tail = node;

    this.size++;
  }
}

class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.nextNode = null;
  }
}

var bob = new LinkedList();
bob.append("1");
