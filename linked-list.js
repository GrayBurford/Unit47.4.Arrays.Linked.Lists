// class Node: node for a singly linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let fruits = ['mango', 'pineapple', 'banana']
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
let simpleNums = [1,2,4,5]
let nums = [4, 7, 10, 2, 31, 8, 29, 6]

// LinkedList: chained together nodes
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  traverse() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.val)
      currNode = currNode.next;
    }
  }

  // Appends a new node with value val to the tail. Returns undefined
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1
  }

  // Add new node with value val to the head. Returns undefined
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;      
    }
    this.length += 1;
  }

  // Return and remove last item. Throws error if list is empty.
  pop() {
    if (this.length === 0) {
      throw new Error("List is already empty.")
    }
    let currVal = this.head;
    while (currVal.next !== this.tail) {
      currVal = currVal.next;
    }
    let poppedVal = currVal.next.val;
    this.tail = currVal;
    this.tail.next = null;
    this.length -= 1;
    return poppedVal;
  }

  // Return and remove first item. Throws error if list is empty.
  shift() {
    if (this.length === 0) {
      throw new Error("List is already empty.")
    }
    let shiftVal = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 1) {
      this.tail = this.head;
    }
    return shiftVal;
  }

  // Get value at index position idx. Throws error if index is invalid.
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index argument")
    }

    let currVal = this.head;
    let counter = 0;

    while (currVal) {
      if (counter === idx) {
        return currVal.val;
      } else {
        currVal = currVal.next;
      }
      counter += 1;
    }
  }

  // Self-created function to retreive node at idx.
  getNodeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index argument")
    }

    let currNode = this.head;
    let counter = 0;

    while (currNode) {
      if (counter === idx) {
        return currNode;
      } else {
        currNode = currNode.next;
      }
      counter += 1;
    }
  }

  // Set value of node at index position idx to val. Throws error if index is invalid.
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index argument")
    }
    let node = this.getNodeAt(idx);
    node.val = val;
  }

  // Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index argument")
    }
    if (idx === 0) {
      this.unshift(val);
    }
    if (idx === this.length) {
      this.push(val)
    }
    if (this.length > 1) {
      let newNode = new Node(val);
      let currNode = this.head;
      while (currNode.next !== this.getNodeAt(idx)) {
        currNode = currNode.next;
      }
      let prevNode = currNode;
      let nextNode = currNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length += 1;
    }
  }

  // Return and remove value at position idx. Throws error is index is invalid.
  removeAt(idx) {
    if (this.length === 0) throw new Error("List is empty");
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index argument")
    }

    //remove first index
    if (idx === 0) {
      let removedVal = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length === 1) {
        this.tail = this.head
      }
      return removedVal;
    }

    let prevNode = this.getNodeAt(idx - 1);

    //remove last index
    if (idx === this.length - 1) {
      let removedVal = prevNode.next.val;
      this.tail = prevNode;
      prevNode.next = null;
      this.length -= 1;
      return removedVal;
    }

    //normal case: remove in the middle
    let currNode = this.getNodeAt(idx);
    prevNode.next = currNode.next;
    currNode.next = null;   
    this.length -= 1;
    return currNode.val;
  }

  // Return an average of all values in the list
  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.val)
      total += currNode.val;
      currNode = currNode.next;
    }
    return total / this.length;
  }
}

// module.exports = LinkedList;


// let list = {
//   val : 'mango',
//   next : {
//     val : 'pineapple',
//     next : {
//       val : 'banana',
//       next : {
//         val : 'acai',
//         next : null
//       }
//     }
//   }
// }