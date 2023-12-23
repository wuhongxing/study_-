const expect = require("./expect")

class LinkedNode {
  data = null
  next = null

  constructor(data, next) {
    this.data = data
    this.next = next
  }

  setNext(next) {
    this.next = next
  }

  [Symbol.iterator]() {
    let current = this
    return {
      next: () => {
        const result = current
        current = current.next
        return result.data
      },
      hasNext: () => {
        if (!current || current.next !== null) return false
        return true
      }
    }
  }
}

const node1 = new LinkedNode(10)
const node2 = new LinkedNode(20)
const node3 = new LinkedNode(30)
const node4 = new LinkedNode(40)
node1.setNext(node2)
node2.setNext(node3)
node3.setNext(node4)

const iterator = node1[Symbol.iterator]()
expect(iterator.next()).toBe(10)
expect(iterator.next()).toBe(20)
expect(iterator.next()).toBe(30)
expect(iterator.next()).toBe(40)
expect(iterator.hasNext()).toBe(false)
