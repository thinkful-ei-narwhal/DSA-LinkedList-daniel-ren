class _Node{
  constructor(value=null, next=null, previous=null){
    this.value=value;
    this.next=next;
    this.previous=previous; // only for doubly linked lists
  }
}

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

  display(){

  }

  size(){

  }

  isEmpty(){

  }

  findPrevious(){

  }

  findLast(){

  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){

  }

  insertLast(item){
    
  }

  insertBefore(item){
    
  }

  insertAfter(item){
    
  }

  insertAt(item){
    
  }

  remove(item){

  }

  find(item){

  }
}


// 2)

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');

  
}

main();

// 4)

// 5)

// 6)

// 7)

// 8)

// 9) 

function mainDLL() {

}

mainDLL();

// 10)

