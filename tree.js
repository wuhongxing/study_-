const expect = require("./expect")

class Tree {
  val = null
  left = null
  right = null

  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }

  [Symbol.iterator]() {
    const _vals = this.vals
    let index = 0
    return {
      next: () => {
        return _vals[index++]
      },
      hasNext: () => {
        return index < _vals.length
      }
    }
  }

  get vals() {
    const result = []
    const nodes = [this]
    while (nodes.length) {
      const n = nodes.length
      for (let i = 0; i < n; i++) {
        const node = nodes.shift()
        if (node && node.left) {
          nodes.push(node.left)
        }
        if (node && node.right) {
          nodes.push(node.right)
        }
        result.push(node.val)
      }
    }
    return result
  }
}

const node1 = new Tree(1)
const node2 = new Tree(2)
const node3 = new Tree(3)
const node4 = new Tree(4)
const node5 = new Tree(5)
const node6 = new Tree(6)
const node7 = new Tree(7)
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

const it = node1[Symbol.iterator]()
expect(it.hasNext()).toBe(true)
expect(it.next()).toBe(1)
expect(it.next()).toBe(2)
expect(it.next()).toBe(3)
expect(it.next()).toBe(4)
expect(it.next()).toBe(5)
expect(it.next()).toBe(6)
expect(it.next()).toBe(7)
expect(it.hasNext()).toBe(false)

const it1 = node1[Symbol.iterator]()
while (it1.hasNext()) {
  console.log(it1.next())
}
