const _Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    let current = this.head;
    if (this.head === null) { // not necessary to use, but fast
      this.insertFirst(item);
    }
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new _Node(item, null);
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

    previous.next = new _Node(item, current);

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

    current.next = new _Node(item, after);
  }

  insertAt(item, position){
    if (position === 0) {
      this.insertFirst(item);
    }

    let counter = 1;
    let current = this.head;
    while (counter < position){
      current = current.next;
      counter ++;
    }

    this.insertBefore(item, current);
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

  // i'd like to add these to my linked list =]

  display(){
    let current = this.head;
    let disp = [];
    while (current !== null) {
      disp.push(current.value);
      current = current.next;
    }
    console.log(disp.join(', '));
    return;
  }
  
  size(){
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count ++;
      current = current.next;
    }
    return count;
  }
  
  isEmpty(){
    return (!this.head.value);
  }
  
  findPrevious(item){
    let current = this.head;
    let previous = this.head;
    if (!this.head) {
      return null;
    }
  
    while (current !== null && current.next.value !== item) {
      current = current.next;
      previous = current;
    }
  
    return previous;
  }
  
  findLast(){
    let current = this.head;
    if (!this.head) {
      return null;
    }
  
    while (current.next !== null) {
      current = current.next;
    }
  
    return current;
  
  }
}

module.exports = LinkedList;