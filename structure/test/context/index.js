const example = () => {
  return 'OK'
}

/**
 * @typedef {Object} Context
 * @property {example} example An example method
 */

export default async function context () {
  this.example = example
  this._destroy = async () => {
    console.log('destroy context')
  }
}

/**
 * @type {Context}
 */
export const Context = {}
