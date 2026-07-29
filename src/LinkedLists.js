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
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.tail = node;
      this.head = node;
      this.size++;
      return;
    }
    this.head.previous = node;
    node.nextNode = this.head;
    this.head = node;

    this.size++;
  }
  printList() {
    if (!this.head) return "No contents";
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
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
bob.prepend("0");
bob.append("2");
bob.prepend("-1");
bob.append("3");
bob.prepend("-2");
bob.prepend("-3");
