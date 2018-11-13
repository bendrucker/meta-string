# meta-string [![Build Status](https://travis-ci.org/bendrucker/meta-string.svg?branch=master)](https://travis-ci.org/bendrucker/meta-string) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/meta-string.svg)](https://greenkeeper.io/)

> Convert values into `<meta>` content strings


## Install

```
$ npm install --save meta-string
```


## Usage

```js
var metaString = require('meta-string')

metaString('input')
//=> input

metaString('a', 'b')
//=> a, b

metaString({a: 'b', c: 'd'})
//=> a=b, c=d

metaString({fooBar: 'baz'})
//=> foo-bar=baz
```

## API

#### `metaString(value)` -> `string`

##### value

*Required*  
Type: `string` / `number` / `array` / `object`

A value to transform into the format expected by a `<meta>` tag. Keys will be transformed from camel case to dash-delimeted where applicable.


## License

MIT © [Ben Drucker](http://bendrucker.me)
