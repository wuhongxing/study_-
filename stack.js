// 用数组实现栈

const expect = require('./expect')

class Stack {
  #top = 0
  #data = []

  push(value) {
    this.#data[this.#top++] = value
  }

  get top() {
    return this.#data[this.#top - 1]
  }

  pop() {
    this.#top -= 1
  }
}

const stack = new Stack()
stack.push(1)
expect(stack.top).toBe(1)
stack.push(2)
expect(stack.top).toBe(2)
stack.pop()
expect(stack.top).toBe(1)

