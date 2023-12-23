interface TrieNode {
  [key: string]: (TrieNode & { isEnd: boolean }) | null
}

type Trie = {
  [key: string]: Trie & { isEnd?: boolean }
}
