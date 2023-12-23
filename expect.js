const expect = (val) => {
  return {
    toBe(expect) {
      if (val === expect) return console.log('正确', val)
      console.log(`错误 - val: ${val} expect: ${expect}`)
    },
    toEqual(expect) {
    }
  }
}

module.exports = expect

