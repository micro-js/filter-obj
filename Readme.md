
# filter-obj

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Functional, data-last object filter.

## Installation

    $ npm install @f/filter-obj

## Usage

```js
var filterObj = require('@f/filter-obj')

filterObj(isEven, {a: 1, b: 2, c: 3, d: 4, e: 5}) // -> {b: 2, c: 4}

function isEven (n) {
  return n % 2 === 0
}

```

## API

### filterObj(fn, obj)

- `fn` - The predicate function. Receives `fn(val, key)` for each key/value pair in the object. Returns a bool indicating whether to keep it or not.
- `obj` - The object to filter

**Returns:** A new object containing only the key/value pairs that passed the `fn(val, key)` truth test (that it returned truthy for).

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/filter-obj.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/filter-obj
[git-image]: https://img.shields.io/github/tag/micro-js/filter-obj.svg
[git-url]: https://github.com/micro-js/filter-obj
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/filter-obj.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/filter-obj
