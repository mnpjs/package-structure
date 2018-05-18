import { equal, assert } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import myNewPackage from '../../src'

/** @type {Object.<string, (ctx: Context)>} */
const T = {
  context,
  'is a function'() {
    equal(typeof myNewPackage, 'function')
  },
  'calls package without error'() {
    assert.doesNotThrow(() => {
      myNewPackage()
    })
  },
  async 'calls test context method'(api) {
    await api.example()
  },
}

export default T
