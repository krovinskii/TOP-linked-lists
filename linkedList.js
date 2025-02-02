class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    //adds a new node containing value to the end of the list
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    //adds a new node containing value to the start of the list
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.head) {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  size() {
    //returns the total number of nodes in the list
    return this.length;
  }
  head() {
    //returns the first node in the list
    return this.head;
  }
  tail() {
    //returns the last node in the list
    return this.tail;
  }
  at(index) {
    //returns the node at the given index
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.nextNode;
      counter++;
    }

    return currentNode.value;
  }
  pop() {
    if (this.length === 0) {
      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== this.tail) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = null;

      this.tail = currentNode;
    }

    this.length--;
  }

  contains(value) {
    //returns true if the passed in value is in the list and otherwise returns false.
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }
  find(value) {
    //returns the index of the node containing value, or null if not found.
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) {
        return i;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }
  toString() {
    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return result + "null";
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list);
console.log(list.toString());
