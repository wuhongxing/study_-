const expect = require("./expect")

class MapArray {
  #map = new Set()
  #array = []
  #keyOfObject = null

  constructor(keyOfObject) {
    this.#keyOfObject = keyOfObject
  }

  push(val) {
    if (this.find(val)) return

    const key = this.#getKey(val)
    this.#map.add(key)
    this.#array.push(val)
  }

  find(val) {
    const key = this.#getKey(val)
    return this.#map.has(key)
  }

  remove(val) {
    if (!this.find(val)) return

    const key = this.#getKey(val)
    this.#map.delete(key)
    this.#array = this.#array.filter($0 => this.#getKey($0) !== key)
  }

  #getKey(val) {
    return this.#keyOfObject ? this.#keyOfObject(val) : val
  }

  get array() {
    return this.#array
  }

  get map() {
    return this.#map
  }
}

;(() => {
  const mapArray = new MapArray()
  mapArray.push(1)
  expect(mapArray.find(1)).toBe(true)
  expect(mapArray.find(0)).toBe(false)
  mapArray.push(2)
  expect(mapArray.find(2)).toBe(true)
  mapArray.push(3)
  expect(mapArray.find(3)).toBe(true)
  mapArray.push(1)
  expect(mapArray.find(1)).toBe(true)
  mapArray.remove(2)
  expect(mapArray.find(2)).toBe(false)
  mapArray.push(4)
  expect(mapArray.find(4)).toBe(true)
  mapArray.remove(3)
  expect(mapArray.find(3)).toBe(false)
  mapArray.remove(3)
  mapArray.remove(4)
  expect(mapArray.find(4)).toBe(false)
  expect(mapArray.array.length).toBe(1)
})()

// ;(() => {
//   const mapArray = new MapArray(val => val.id)
//   mapArray.push({ id: 1, val: 1 })
//   expect(mapArray.find({ id: 1 })).toBe(true)
//   expect(mapArray.find({ id: 0 })).toBe(false)
//   mapArray.push({ id: 2, val: 2 })
//   expect(mapArray.find({ id: 2 })).toBe(true)
//   mapArray.push({ id: 3, val: 3 })
//   expect(mapArray.find({ id: 3 })).toBe(true)
//   mapArray.push({ id: 1, val: 1 })
//   expect(mapArray.find({ id: 1 })).toBe(true)
//   mapArray.remove({ id: 2, val: 2 })
//   expect(mapArray.find({ id: 2 })).toBe(false)
//   mapArray.push({ id: 4, val: 4 })
//   expect(mapArray.find({ id: 4 })).toBe(true)
//   mapArray.remove({ id: 3 })
//   expect(mapArray.find({ id: 3 })).toBe(false)
//   mapArray.remove({ id: 3 })
//   mapArray.remove({ id: 4 })
//   expect(mapArray.find({ id: 4 })).toBe(false)
//   expect(mapArray.array.length).toBe(1)
// })()
