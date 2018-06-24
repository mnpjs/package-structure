"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = myNewPackage;

var _util = require("util");

const LOG = (0, _util.debuglog)('my-new-package');
/**
 * {{ description }}
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function myNewPackage(config = {}) {
  const {
    type
  } = config;
  LOG('my-new-package called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map