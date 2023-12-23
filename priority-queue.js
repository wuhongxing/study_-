const expect = require("./expect")

class PriorityQueue {
  array = []
  constructor(values) {
    if (values) {
      for (const value of values) {
        this.enqueue(value)
      }
    }
  }

  enqueue(value) {
    this.array.push(value)
    let i = this.array.length - 1
    let parent = (i - 1) >>> 1
    while (this.array[i] < this.array[parent]) {
      this.swap(i, parent)
      i = parent
      parent = (i - 1) >>> 1
    }
  }

  get peek() {
    return this.array[0]
  }

  dequeue() {
    const first = this.array[0]
    const newFirst = this.array.pop()
    if (this.array.length === 0) return first
    this.array[0] = newFirst
    let i = 0
    let left = i * 2 + 1
    while (left < this.array.length) {
      const p =
        this.array[left + 1] === undefined
          ? left
          : this.array[left + 1] < this.array[left]
          ? left + 1
          : left
      if (this.array[i] <= this.array[p]) break
      this.swap(i, p)
      i = p
      left = i * 2 + 1
    }
    return first
  }

  swap(i, j) {
    let temp = this.array[i]
    this.array[i] = this.array[j]
    this.array[j] = temp
  }
}

const queue = new PriorityQueue()
queue.enqueue(4)
expect(queue.peek).toBe(4)
queue.enqueue(3)
expect(queue.peek).toBe(3)
queue.enqueue(2)
expect(queue.peek).toBe(2)
queue.enqueue(1)
expect(queue.peek).toBe(1)
