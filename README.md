## babel-plugin-atom-demand

[![NPM version](https://img.shields.io/npm/v/babel-plugin-atom-demand.svg?style=flat)](https://npmjs.org/package/babel-plugin-atom-demand)
[![NPM downloads](http://img.shields.io/npm/dm/babel-plugin-atom-demand.svg?style=flat)](https://npmjs.org/package/babel-plugin-atom-demand)

## Example

Converts

```javascript
import { Button } from 'vue-atom-ui';
```

(roughly) to

```javascript
var _button = require('vue-atom-ui/lib/Button');

var _button2 = _interopRequireDefault(_button);

// 待完善
require('vue-atom-ui/lib/css/button.css');
```

## Usage

```bash
npm install babel-plugin-atom-demand --save-dev
```

Via `.babelrc` or babel-loader.

```js
{
  "plugins": ["atom-demand"]
}
```


### Note

babel-plugin-atom-demand will be not working if you add the vue-atom-ui in webpack config **vender**
