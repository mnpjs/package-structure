import { equal } from 'zoroaster/assert'
import Context from '../context'
import myNewPackage from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof myNewPackage, 'function')
  },
  async 'calls package without error'() {
    await myNewPackage()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
