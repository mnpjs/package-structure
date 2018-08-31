const { debuglog } = require('util');

const LOG = debuglog('my-new-package')

/**
 * {{ description }}
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
               async function myNewPackage(config = {}) {
  const {
    type,
  } = config
  LOG('my-new-package called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */


module.exports = myNewPackage
//# sourceMappingURL=index.js.map