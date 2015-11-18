'use strict'

var toDash = require('camel-2-dash')

module.exports = metaString

function metaString (value) {
  if (typeof value !== 'object') return String(value)
  if (Array.isArray(value)) return value.join(', ')
  return metaString(Object.keys(value).map(function keyVal (key) {
    return [toDash(key), value[key]].join('=')
  }))
}
