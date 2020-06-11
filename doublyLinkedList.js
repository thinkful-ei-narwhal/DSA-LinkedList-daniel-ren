const _Node = require('./node');

class DoublyLinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head, null);
  }

  insertLast(item){
    let current = this.head;
    let previous = this.head;
    if (this.head === null) { // not necessary to use, but fast
      this.insertFirst(item);
    }
    while (current.next !== null) {
      current = current.next;
      previous = current;
    }
    current.next = new _Node(item, null, previous);
  }

  find(item) {
    let current = this.head;
    if (!this.head) {
      return null;
    }

    while (current.value !== item){ // objects will never be found
      if (current.next === null) {
        return null; // if we didnt find it, also return null
      } else {
        current = current.next;
      }
    }
    return current;
  }

  insertBefore(item, node){
    if (!this.head) {
      return null;
    }
    // if node is first...
    if (this.head.value === node.value) {
      this.insertFirst(item);
      return;
    }

    // if in middle or end...
    let current = this.head;
    let previous = this.head;

    while ((current !== null) && (current.value !== node.value)) {
      previous = current;
      current = current.next;
    }

    previous.next = new _Node(item, current, previous);

  }

  insertAfter(item, node){
    let current = this.find(node.value);
    let after = this.find(current.next.value);
    if (!current){
      return null;
    }
    if (!after){
      this.insertLast(item);
      return;
    }

    current.next = new _Node(item, after, current);
  }

  insertAt(item, position){
    if (position === 0) {
      this.insertFirst(item);
    }

    let counter = 1;
    let current = this.head;
    let previous = this.head;
    while (counter < position){
      current = current.next;
      previous = current;
      counter ++;
    }

    this.insertBefore(item, current, previous);
  }

  remove(item){
    if (!this.head) {
      return null;
    }
    // if node is first...
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    // if in middle or end...
    let current = this.head;
    let previous = this.head;

    while ((current !== null) && (current.value !== item)) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      console.log('Item not Found!');
      return;
    }
    previous.next = current.next;

  }
}

module.exports = DoublyLinkedList;