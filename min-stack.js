const expect = require('./expect')

class MinStack {
  #data = []
  #miniData = []

  push(val) {
    this.#data.push(val)
    if (this.min === undefined || val < this.min) {
      this.#miniData.push(val)
    } else {
      this.#miniData.push(this.min)
    }
  }

  pop() {
    this.#data.pop()
    this.#miniData.pop()
  }

  get min() {
    return this.#miniData.at(-1)
  }
}

const stack = new MinStack()
stack.push(1)
expect(stack.min).toBe(1)
stack.push(1)
expect(stack.min).toBe(1)
stack.push(0)
expect(stack.min).toBe(0)
stack.push(-1)
expect(stack.min).toBe(-1)
stack.pop()
expect(stack.min).toBe(0)
stack.pop()
expect(stack.min).toBe(1)
stack.push(2)
expect(stack.min).toBe(1)
