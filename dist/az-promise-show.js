//! az-promise-show version 1.1.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kentcdodds.com) (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var root = { angular: _angular2['default'] };

	/* istanbul ignore next */
	if (!_angular2['default'].version) {
	  root = window;
	}

	exports['default'] = root.angular.module('azPromiseShow', []).constant('azPromiseShowOptions', { className: 'ng-hide' }).directive('azPromiseShow', azPromise(true)).directive('azPromiseHide', azPromise(false)).name;
	// <-- exported property

	function azPromise(show) {
	  var attr = show ? 'azPromiseShow' : 'azPromiseHide';
	  var changeTo = show ? 'removeClass' : 'addClass';
	  var changeFrom = show ? 'addClass' : 'removeClass';
	  return ( /* @ngInject */["$log", "azPromiseShowOptions", function azPromiseShowDefinition($log, azPromiseShowOptions) {
	      return {
	        restrict: 'A',
	        link: function link(scope, el, attrs) {
	          scope.$watch(attrs[attr], function (newVal) {
	            var displayNone = attrs.azPromiseShowHideClass || azPromiseShowOptions.className;
	            if (newVal) {
	              if (!newVal['finally']) {
	                $log.error('Passed ', newVal, 'to', el, 'on scope', scope);
	                throw new Error('must pass a promise to az-promise-show');
	              }
	              el[changeTo](displayNone);
	              newVal['finally'](function () {
	                el[changeFrom](displayNone);
	              });
	            } else {
	              el[changeFrom](displayNone);
	            }
	          });
	        }
	      };
	    }]
	  );
	}
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;