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
      this.tail = newNode;
      this.tail.nextNode = newNode;
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
  pop() {} // removes the last element from the list
  contains(value) {} //returns true if the passed in value is in the list and otherwise returns false.
  find(value) {} //returns the index of the node containing value, or null if not found.
  toString() {} //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
