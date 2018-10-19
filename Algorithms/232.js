// Implement Queue using Stacks

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.arr = [];
  this.stashArr = [];
  this.first = null;
  this.size = 0;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if (!this.arr.length) {
    this.first = x;
  }
  this.arr.push(x);
  this.size++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while(this.arr.length > 1) {
    this.stashArr.push(this.arr.pop());
  }
  this.size--;
  const result = this.arr.pop();
  if (this.stashArr.length) {
    this.first = this.stashArr[this.size - 1];
  }
  while (this.stashArr.length) {
    this.arr.push(this.stashArr.pop());
  }
  return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.first;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.size === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
