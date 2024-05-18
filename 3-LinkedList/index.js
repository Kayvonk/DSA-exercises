class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  addNode(value) {
    let currentNode = this.head;

    currentNode.next = new Node(value);
  }
}

const newList = new LinkedList(3);
console.log(newList);

newList.addNode(5);
console.log(newList);
