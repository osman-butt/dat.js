"use strict";

// Stack class
class Stack {
  #arr;
  constructor() {
    this.#arr = [];
  }

  push(value) {
    this.#arr.push(value);
  }
  peek() {
    return this.#arr[this.#arr.length - 1];
  }
  pop() {
    return this.#arr.pop();
  }
  count() {
    return this.#arr.length;
  }

  set arr(value) {
    this.#arr = value;
  }
}

// const myStack = new Stack([2, 3, 4, 5]);
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack);
console.log(myStack.peek());
console.log(myStack);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.count());

// EXTRA

class StackResetable extends Stack {
  constructor() {
    super();
  }

  reset() {
    this.arr = [];
  }
}

const s2 = new StackResetable();
console.log(s2);
