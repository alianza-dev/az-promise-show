# az-promise-show

[![npm version](https://img.shields.io/npm/v/az-promise-show.svg?style=flat-square)](https://www.npmjs.org/package/az-promise-show)
[![npm downloads](https://img.shields.io/npm/dm/az-promise-show.svg?style=flat-square)](http://npm-stat.com/charts.html?package=az-promise-show&from=2015-01-01)
[![Build Status](https://img.shields.io/codeship/65e705f0-f603-0132-fc07-764c17a205db.svg?style=flat-square)](https://codeship.com/projects/85923)
[![Code Coverage](https://img.shields.io/codecov/c/github/alianza-dev/az-promise-show.svg?style=flat-square)](https://codecov.io/github/alianza-dev/az-promise-show)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/alianza-dev/az-promise-show?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Directives to show or hide an element based on the resolved state of an angular promise.

See [the example](http://az-promise-show.surge.sh/) and
[the example code](https://github.com/alianza-dev/az-promise-show/blob/master/demo/index.html)

## Docs

### Usage

#### Install the module

`$ npm install az-promise-show --save`

Or just download it from the dist directory.

#### Depend on the module

```javascript
angular.module('yourModule', ['azPromiseShow']);
```

#### az-promise-show

```html
<div az-promise-show="aPromise">
  I'm only shown when the promise is in flight
</div>
```

#### az-promise-hide

```html
<div az-promise-hide="anotherPromise">
  I'm only show when the promise is not in flight
</div>
```

#### az-promise-show-hide-class

```html
<div az-promise-show="aPromise" az-promise-show-hide-class="display-none">
  By default, azPromiseShow uses 'ng-hide', but you can specify your own if you want.
  Or, you can use the azPromiseShowOptions service.
</div>
```

#### azPromiseShowOptions

```javascript
angular.module('yourModule').run(function(azPromiseShowOptions) {
  azPromiseShowOptions.className = 'display-none';
});
```
