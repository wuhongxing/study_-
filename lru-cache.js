const { DoubleLinkedList } = require("./double-linked-list")
const expect = require("./expect")

class LRUCache {
  #capacity = 0
  #map = {}
  #list = new DoubleLinkedList()
  #count = 0
  constructor(capacity) {
    this.#capacity = capacity
  }

  get(key) {
    const node = this.#map[key]
    if (node) {
      this.#list.moveToLast(node)
    }
    return node?.val ?? -1
  }

  put(key, value) {
    const node = this.#map[key]
    if (node) {
      node.val = value
      this.#list.moveToLast(node)
    } else {
      if (this.#count >= this.#capacity) {
        const key = this.#list.shift()
        delete this.#map[key]
        this.#count -= 1
      }
      const node = this.#list.addVal(key, value)
      this.#map[key] = node
      this.#count += 1
    }
  }
}

const cache = new LRUCache(1)
cache.put(1, 0)
expect(cache.get(1)).toBe(0)
