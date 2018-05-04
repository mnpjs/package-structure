import { equal, assert } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import myNewPackage from '../../src'

const myNewPackageTestSuite = {
  context,
  'should be a function'() {
    equal(typeof myNewPackage, 'function')
  },
  'should call package without error'() {
    assert.doesNotThrow(() => {
      myNewPackage()
    })
  },
  /**
   * @param {Context} api
   */
  async 'calls test context method'(api) {
    await api.example()
  },
}

export default myNewPackageTestSuite
