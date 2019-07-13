////////////// Stacks ///////////////

// functions: push, pop, peek, length
// included on th array object

// Implement a stack class with these methods:
// print: print the collection
// push: push something to the top of the stack
// pop: remove item from the top of the stack
// peek: view the item at the top of the stack
// isEmpty: check if the stack is empty
// clear: removes all the elements in the stack

// class STACK {
//   constructor(...arr) {
//     // added to allow for entries
//     this.collection = [...arr];
//   }

//   print() {
//     return this.collection;
//   }

//   push(item) {
//     return this.collection.push(item);
//   }

//   pop() {
//     return this.collection.pop();
//   }

//   peek() {
//     return this.collection[this.collection.length - 1];
//   }

//   isEmpty() {
//     return this.collection.length === 0;
//   }

//   clear() {
//     this.collection = [];
//   }
// }

// let newStack = new STACK();

// // Sample usage
// newStack.push("miya");
// newStack.push("steven");
// newStack.push("shit");
// newStack.push("poop");

// console.log(newStack.print());
// newStack.clear();
// console.log(newStack.print());
// console.log(fuckStack.isEmpty());

////////// Queues ////////////////

// Implement a queue class with these methods:
// enqueue: adds item to the end of the queue
// dequeue: returns and removes the first item in the queue
// front: shows the first item in the queue
// size: returns the size of the queue
// isEmpty: check if the queue is empty

// class QUEUE {
//   constructor() {
//     this.collection = [];
//   }

//   print() {
//     console.log(this.collection);
//   }

//   enqueue(element) {
//     this.collection.push(element);
//   }

//   dequeue() {
//     return this.collection.shift();
//   }

//   front() {
//     return this.collection[0];
//   }

//   size() {
//     return this.collection.length;
//   }

//   isEmpty() {
//     return this.collection.length === 0;
//   }
// }

/////////// Priority Queue Class //////////////

// Implement a priority queue class with these methods:
// enqueue: adds item to the end of the queue
// dequeue: returns and removes the first item in the queue
// front: shows the first item in the queue
// size: returns the size of the queue
// isEmpty: check if the queue is empty

// class PRIORITYQUEUE {
//   constructor() {
//     this.collection = [];
//   }

//   print() {
//     console.log(this.collection);
//   }

//   enqueue(element) {
//     if (this.collection.length === 0) {
//       this.collection.push(element);
//     } else {
//       for (let i = 0; i < this.collection.length; i++) {
//         let itemPriority = element[1];
//         let collectionPriority = this.collection[i][1];

//         if (itemPriority < collectionPriority) {
//           this.collection.splice(i, 0, element);
//           break;
//         } else {
//           this.collection.push(element);
//           break;
//         }
//       }
//     }
//   }

//   dequeue() {
//     return this.collection.shift();
//   }

//   front() {
//     return this.collection[0];
//   }

//   size() {
//     return this.collection.length;
//   }

//   isEmpty() {
//     return this.collection.length === 0;
//   }
// }

///////// Iterating through Objects ////////////

// let testObj = {
//   firstName: "Steven",
//   lastName: "Watson",
//   phone: "7575133042"
// };

// let values = Object.entries(testObj);

// for (const [key, value] of values) {
//   console.log(`The key is ${key} and the value is ${value}`);
// }

////////// Hash Table //////////////////

// Run time O(1)

// const hash = (key, size) => {
//   let hashedKey = 0;

//   for (let i = 0; i < key.length; i++) {
//     console.log(hashedKey);
//     hashedKey += key.charCodeAt(i);
//   }
//   console.log(hashedKey % size);
//   return hashedKey % size;
// };

// class HashTable {
//   constructor(size) {
//     this.size = size;
//     this.buckets = Array(this.size);

//     for (let i = 0; i < this.buckets.length; i++) {
//       this.buckets[i] = new Map();
//     }
//   }

//   insert(key, value) {
//     let idx = hash(key, this.size);
//     this.buckets[idx].set(key, value);
//   }

//   remove(key) {
//     let idx = hash(key, this.size);
//     let deleted = this.buckets[idx].get(key);
//     this.buckets[idx].delete(key);
//     return deleted;
//   }

//   search(key) {
//     let idx = hash(key, this.size);
//     return this.buckets[idx].get(key);
//   }
// }

// const hashTable = new HashTable(40);

// hashTable.insert("manager", "Steven");

// console.log(hashTable);

///////////// Bubble Sort ////////////////////////

// This method slowly bubbles the highest values to the end of the array

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let k = 0; k < array.length - 1 - i; k++) {
//       if (array[k] > array[k + 1])
//         [array[k], array[k + 1]] = [array[k + 1], array[k]];
//     }
//   }
//   return array;
// }

// let test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

// console.log(bubbleSort(test));

////////////// Selection Sort ///////////////////

// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let minimum = array[i];
//     let minimumIndex = i;

//     for (let k = i; k < array.length; k++) {
//       if (array[k] < minimum) {
//         minimum = array[k];
//         minimumIndex = k;
//       }
//     }

//     [array[i], array[minimumIndex]] = [array[minimumIndex], array[i]];
//   }

//   return array;
// }

// let test = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

// console.log(selectionSort(test));
