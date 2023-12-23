class Graph {
  constructor(nodes) {

  }
}

const graph = [[0, 1], [1, 2], [1, 3], [1, 4], [3, 5], [4, 5]]
const n = 6
const data = new Array(6).fill(0).map(() => [])
const indegrees = new Array(6).fill(0)
for (let i = 0; i < n; i ++) {
  const [from, to] = graph[i]
  data[from].push(to)
  indegrees[to] += 1
}
const zeroData = []
for (let i = 0; i < indegrees.length; i ++) {
  if (indegrees[i] === 0) {
    zeroData.push(i)
  }
}

const res = []
while (zeroData.length) {
  const val = zeroData.shift()
  res.push(val)
  for (const v of data[val]) {
    indegrees[v] -= 1
    if (indegrees[v] === 0) zeroData.push(v)
  }
}

console.log(res)
