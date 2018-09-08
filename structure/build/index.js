const { debuglog } = require('util');

const LOG = debuglog('my-new-package')

/**
 * {{ description }}
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
               async function myNewPackage(config) {
  const {
    type,
  } = config
  LOG('my-new-package called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */


module.exports = myNewPackage
//# sourceMappingURL=index.js.map