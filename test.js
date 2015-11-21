'use strict'

var test = require('tape')
var metaString = require('./')

test(function (t) {
  t.equal(metaString('string'), 'string')
  t.equal(metaString(['foo', 'bar']), 'foo, bar')
  t.equal(metaString({foo: 'bar', baz: 'qux'}), 'foo=bar, baz=qux')
  t.equal(metaString({fooBar: 'baz'}), 'foo-bar=baz')
  t.equal(metaString({spaces: 'foo bar baz'}, 'spaces="foo bar baz"'))
  t.end()
})
