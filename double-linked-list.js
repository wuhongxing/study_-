class DoubleLinkedList {
  #header = new DoubleLinkedNode()
  #last = null

  addVal(key, val) {
    const node = new DoubleLinkedNode(key, val)
    if (!this.#header.next) {
      this.#header.next = node
      node.pre = this.#header
      this.#last = node
    } else {
      this.addNode(node)
    }
    return node
  }

  addNode(node) {
    this.#last.next = node
    node.pre = this.#last
    this.#last = node
  }

  removeNode(node) {
    node.pre.next = node.next
    node.next.pre = node.pre
  }

  moveToLast(node) {
    if (this.#last === node) return

    this.removeNode(node)
    this.addNode(node)
  }

  shift() {
    const first = this.#header.next
    first.pre.next = first.next
    if (first.next) first.next.pre = first.pre

    return first.key
  }
}

class DoubleLinkedNode {
  val = null
  key = null
  next = null
  pre = null
  constructor(key, val, pre, next) {
    this.key = key
    this.val = val
    this.pre = pre
    this.next = next
  }
}

module.exports = { DoubleLinkedList, DoubleLinkedNode }
