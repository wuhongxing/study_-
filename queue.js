const expect = require("./expect")

class Queue {
  #left = 0
  #right = 0
  #data = []

  enqueue(value) {
    this.#data[this.#right++] = value
  }

  dequeue() {
    return this.#data[this.#left ++]
  }

  get front() {
    return this.#data[this.#left]
  }

  get end() {
    if (this.#left >= this.#right) return
    return this.#data[this.#right - 1]
  }
}

const queue = new Queue()
queue.enqueue(1)
expect(queue.front).toBe(1)
expect(queue.end).toBe(1)
queue.enqueue(2)
expect(queue.front).toBe(1)
expect(queue.end).toBe(2)
const val1 = queue.dequeue()
expect(queue.front).toBe(2)
expect(queue.end).toBe(2)
expect(val1).toBe(1)
const val2 = queue.dequeue()
expect(queue.front).toBe(undefined)
expect(queue.end).toBe(undefined)
expect(val2).toBe(2)
queue.enqueue(1)
expect(queue.front).toBe(1)
expect(queue.end).toBe(1)
