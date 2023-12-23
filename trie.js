const expect = require('./expect')

class Trie {
  #data = {}

  insert(word) {
      let temp = this.#data
      for (let i = 0; i < word.length; i ++) {
          temp[word[i]] = {
              ...temp[word[i]],
              isEnd: temp[word[i]]?.isEnd || i === word.length - 1
          }
          temp = temp[word[i]]
      }
  }

  search(word) {
      let temp = this.#data
      for (let i = 0; i < word.length; i ++) {
          if (!temp[word[i]]) return false
          if (i === word.length - 1) return temp[word[i]].isEnd
          temp = temp[word[i]]
      }
      return true
  }

  startsWith(prefix) {
      let temp = this.#data
      for (let i = 0; i < prefix.length; i ++) {
          if (!temp[prefix[i]]) return false
          temp = temp[prefix[i]]
      }
      return true
  }
}

const trie = new Trie()
trie.insert('app')
expect(trie.search('app')).toBe(true)
trie.insert('apps')
expect(trie.search('app')).toBe(true)
expect(trie.search('ap')).toBe(false)
expect(trie.startsWith('ap')).toBe(true)
