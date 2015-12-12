/**
 * Imports
 */

var filterObj = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(filterObj(isEven, {a: 1, b: 2, c: 3, d: 4, e: 5}), {b: 2, d: 4})
  t.end()
})

function isEven (n) {
  return n % 2 === 0
}
