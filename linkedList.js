class _Node{
  constructor(value=null, next=null){
    this.value=value;
    this.next=next;
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
    let previous = this.head;
    while (!previous) {
      previous = previous.next;
    }
    previous.next = new _Node(item, null);
    
  }

  find(item) {
    
  }

  remove(item){
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    // middle 

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

// 2)

function main() {

}

main();
