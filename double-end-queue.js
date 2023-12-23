const expect = require("./expect")

class DoubleQueue {
  #left = 0
  #right = 0
  #data = []

  pushFront() {

  }

  pushEnd() {

  }

  popFront() {

  }

  popEnd() {

  }

  get front() {

  }

  get end() {

  }
}

const queue = new DoubleQueue()
queue.pushFront(1)
expect(queue.front).toBe(1)
expect(queue.end).toBe(1)
queue.pushFront(2)
expect(queue.front).toBe(2)
expect(queue.end).toBe(1)
const val1 = queue.popFront()
expect(queue.front).toBe(1)
expect(queue.end).toBe(1)
expect(val1).toBe(2)
const val = queue.popFront()
expect(queue.front).toBe(undefined)
expect(queue.end).toBe(undefined)
expect(val).toBe(1)
