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
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;

    this.size++;
    return;
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
    node.next = this.head;
    this.head = node;

    this.size++;
  }
  printList() {
    if (!this.head) return "No contents";
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  at(index) {
    if (!this.head) return "No contents";
    if (index === undefined) return "Insert a number";
    if (typeof index !== "number") return "Index numbers only";
    if (index >= this.size || index < 0) return console.log(RangeError);
    let current = this.head;
    let indexCounter = 0;
    while (current) {
      if (indexCounter === index) {
        return current.value;
      }
      current = current.next;
      indexCounter++;
    }
  }
  findIndex(value) {
    if (!this.head) return "No contents";
    let current = this.head;
    let indexCounter = 0;
    while (current) {
      if (current.value === value) {
        console.log(`Item ${current.value} is at index ${indexCounter}`);
        return indexCounter;
      }
      current = current.next;
      indexCounter++;
    }
    return console.log("no item in list.");
  }
  shift() {
    if (!this.head) return "No contents";
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    this.head = this.head.next;
    this.head.previous = null;

    this.size--;
  }
  pop() {
    if (!this.head) return "No contents";

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;

    this.size--;
  }
  contains(value) {
    if (!this.head) return "No contents";
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    let string = "";
    let current = this.head;
    while (current) {
      string += `(${current.value}) -> `;
      current = current.next;
    }

    return string + "null";
  }
  insertAt(index, value) {
    if (!this.head && index === 0) {
      this.append(value);
      return;
    }

    if (index === undefined) return "as follows, (index, item)";
    if (typeof index !== "number") return "Index numbers only";
    if (index > this.size || index < 0) return console.log(RangeError);
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.size) {
      this.append(value);
      return;
    }

    let current = this.head;
    let indexCounter = 0;
    while (current) {
      if (indexCounter === index) {
        // values.forEach((value) => {
        const node = new Node(value);
        node.previous = current.previous;
        node.next = current;
        current.previous.next = node;
        current.previous = node;
        this.size++;
        return;
        // });
      }
      current = current.next;
      indexCounter++;
    }
  }
  removeAt(index) {
    if (!this.head) return "No contents";

    if (index === undefined) return "as follows, (index)";
    if (typeof index !== "number") return "Index numbers only";
    if (index >= this.size || index < 0) return console.log(RangeError);
    if (index === 0) {
      this.shift();
      return;
    } else if (index === this.size - 1) {
      this.pop();
      return;
    }

    let current = this.head;
    let indexCounter = 0;
    while (current) {
      if (indexCounter === index) {
        current.previous.next = current.next;
        current.next.previous = current.previous;
        this.size--;
        return;
      }
      current = current.next;
      indexCounter++;
    }
  }
}

class Node {
  constructor(value) {
    if (value === undefined) {
      throw new Error("Insert a possible item");
    }
    this.previous = null;
    this.value = value;
    this.next = null;
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

bob.printList();

console.log(`Item at index is ${bob.at(3)}`);

console.log(`item at ${bob.findIndex("3")}`);

bob.shift();

bob.printList();

console.log(bob.contains("3"));

bob.toString();

bob.insertAt(0, "7");
bob.insertAt(3, "7");

bob.insertAt(7, "7");

bob.printList();

console.log(bob.contains("3"));

bob.removeAt(3);

bob.printList();

bob.pop();

console.log(bob.contains("3"));

bob.printList();
