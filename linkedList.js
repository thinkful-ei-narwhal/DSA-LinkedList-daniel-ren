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

// 2)

function main() {

  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');
  //SLL.remove('squirrel'); // should print 'Item not found!'

  SLL.insertBefore('Athena', SLL.find('Boomer'));
  SLL.insertAfter('Hotdog', SLL.find('Helo'));
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(findPrevious('Starbuck', SLL));
  console.log(findLast(SLL));

  console.log(reverse(SLL));
  console.log(thirdFromEnd(SLL)); // we reversed this, dont be confused.
  console.log(middleOfList(SLL));

  let cycleList = new LinkedList();
  cycleList.insertFirst('Apollo');
  cycleList.insertLast('Boomer');
  cycleList.insertLast('Jesus');
  cycleList.head.next.next = cycleList.head;

  console.log(isListCycle(cycleList));
  console.log(isListCycle(SLL));
}

main();


// 3) YES I KNOW, IT'S OUT OF ORDER!

function display(sll){
  let current = sll.head;
  let disp = [];
  while (current !== null) {
    disp.push(current.value);
    current = current.next;
  }
  console.log(disp.join(', '));
  return;
}

function size(sll){
  let count = 0;
  let current = sll.head;
  while (current !== null) {
    count ++;
    current = current.next;
  }
  return count;
}

function isEmpty(sll){
  return (!sll.head.value);
}

function findPrevious(item, sll){
  let current = sll.head;
  let previous = sll.head;
  if (isEmpty(sll)) {
    return null;
  }

  while (current !== null && current.next.value !== item) {
    current = current.next;
    previous = current;
  }

  return previous;
}

function findLast(sll){
  let current = sll.head;
  if (isEmpty(sll)) {
    return null;
  }

  while (current.next !== null) {
    current = current.next;
  }

  return current;

}

// 4) It's trying to iterate through the linked list while skipping values
// equivalent to the current value i.e. duplicates.  But this returns nothing!
// if we add a counter, we can return that when it finds it.
// The run time is O(n^2)

// 5)

function reverse(sll) { // head -> starbuck, Apollo -> null, Athena -> apollo, Kat, Boomer, Helo, Hotdog, Husker, Starbuck, null
  if (isEmpty(sll)) {
    return null;
  }

  let head = findLast(sll);
  
  let current = sll.head;
  let reversed = null;
  let temp = current.next;

  while (current !== null) {
    temp = current.next;
    current.next = reversed;
    reversed = current;
    current = temp;
  }

  sll.head = head;

  return sll;
}

// 6)

function thirdFromEnd(sll) { 
  if (isEmpty(sll)) {
    return null;
  }
  let rev = reverse(sll);
  let counter = 1;
  let current = rev.head;
  while (counter < 3){
    current = current.next;
    counter ++;
  }

  return current;

}

// 7)

function middleOfList(sll) {
  if (isEmpty(sll)) {
    return null;
  }
  let num = size(sll); // WHY NOT???
  let newnum = Math.floor((num - 1 )/ 2);
  let current = sll.head;
  let counter = 0;
  while (counter < newnum){
    current = current.next;
    counter ++;
  }
  return current;
}

// 8)

function isListCycle(sll) { //tortise and hare

  let currentOne = sll.head;
  let currentTwo = sll.head;

  while (currentOne !== null && currentTwo !== null && currentTwo.next !== null) {
    currentOne = currentOne.next;
    currentTwo = currentTwo.next.next;

    if (currentOne === currentTwo) {
      return true;
    }
  }
  return false;
}

// 9) 

function mainDLL() {
  const DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');

  console.log(display(dllreverse(DLL)));
}

mainDLL();

// 10)

function dllreverse(dll) { // Aquaria, Caprica, Gemenon, Sagittaron, Tauron -> null
  if (isEmpty(dll)) {
    return null;
  }

  let head = findLast(dll);
  
  let current = dll.head;
  let reversed = current.previous;
  let temp = current.next;

  while (current !== null) {
    temp = current.next;
    current.next = reversed;
    current.previous = temp;
    reversed = current;
    current = temp;
  }

  dll.head = head;

  return dll;
}

// the difference is that the reversed is started off as current.previous.  we then use the two
// temp variables as switches for each other (prev to next, next to prev).




