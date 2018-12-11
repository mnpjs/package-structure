import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import myNewPackage from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await myNewPackage({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
