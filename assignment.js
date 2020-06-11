const LinkedList = require('./linkedList');
const DoublyLinkedList = require('./doublyLinkedList');


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