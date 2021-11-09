class Stack {
   constructor(...args) {
      this.store = [...args.reverse()];
   }
   peek() {
      return this.store[0];
   }
   push(value) {
      return this.store.unshift(value);
   }
   pop() {
      return this.store.shift();
   }
}

const stack = new Stack(1, 2, 3);
console.log(stack.peek());
stack.push(4);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());