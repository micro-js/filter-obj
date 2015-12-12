/**
 * Modules
 */

/**
 * Expose filterObj
 */

module.exports = filterObj['default'] = filterObj

/**
 * filterObj
 */

function filterObj (fn, obj) {
  var keys = Object.keys(obj)
  var newObj = {}

  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i]
    var val = obj[key]

    if (fn(val, key)) {
      newObj[key] = val
    }
  }

  return newObj
}
