const expect = require("./expect")

class DisjointSet {
  #fathers = []
  // 剩余的群数量
  #rest = 0
  constructor(n) {
    for (let i = 0; i < n; i ++) {
      this.#fathers.push(i)
    }
    this.#rest = n
  }

  union(x, y) {
    const fx = this.find(x)
    const fy = this.find(y)
    if (fx === fy) return

    this.#fathers[fx] = fy
    this.#rest -= 1
  }

  find(x) {
    if (x !== this.#fathers[x]) {
      this.#fathers[x] = this.find(this.#fathers[x])
    }
    return this.#fathers[x]
  }

  isSame(x, y) {
    return this.find(x) === this.find(y)
  }

  get rest() {
    return this.#rest
  }
}

const set = new DisjointSet(5)
expect(set.rest).toBe(5)
set.union(1, 2)
expect(set.find(1)).toBe(2)
expect(set.rest).toBe(4)
set.union(2, 3)
expect(set.find(1)).toBe(3)
set.union(1, 3)
expect(set.find(1)).toBe(3)
expect(set.rest).toBe(3)
set.union(4, 0)
expect(set.find(4)).toBe(0)
expect(set.rest).toBe(2)
set.union(4, 1)
expect(set.find(0)).toBe(3)
expect(set.rest).toBe(1)

