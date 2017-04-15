/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = angular;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function appConfig($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise("/");
}
/* harmony default export */ __webpack_exports__["a"] = (appConfig);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*let constants = {
    //Maneja las constantes de la aplicación, como por ejemplo la url del servicio
     apiServiceBaseUri: 'http://192.168.80.70/PymesPlusWeb/',
     apiServiceBaseUriv2: 'http://localhost:5000/'
//    apiServiceBaseUriv2: 'http://192.168.80.34:5000/'  //DAVID!!
    // apiServiceBaseUri: 'http://tfs.softpymes.com.co:8080/PymesPlusWeb/'
    //apiServiceBaseUri: 'http://192.168.80.70/PymesPlusWeb/',
    // apiServiceBaseUriv2: 'http://192.168.80.43:5000/'
    // apiServiceBaseUriv2: 'http://192.168.81.26:5000/'
    // apiServiceBaseUriv2: 'http://192.168.80.62:5000/'
    //apiServiceBaseUriv2: 'http://192.168.80.17:5000/'
    // apiServiceBaseUri: 'http://192.168.80.70:2378/'


};

export default constants;*/

let constants = {};
/* harmony default export */ __webpack_exports__["a"] = (constants);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/*import angular from 'angular';

let dependenciesModule = angular.module('app.dependencies',[
    'ngMaterial',
    'angular-jwt',
    'ui.bootstrap',
    'ngAria',
    'ngMessages',
    'ngAnimate',
    'ui.router',
    'ui.grid',
    'ui.grid.selection',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.pinning',
    'ui.grid.pagination',
    'ui.grid.grouping',
    'ui.grid.exporter',
    'ui.tree',
    'ngIdle',
    'cfp.hotkeys',
    'vs-repeat',
    'angular-loading-bar',
    'gm.datepickerMultiSelect',
    'oc.lazyLoad']);

export default dependenciesModule;*/



let dependenciesModule = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('app.dependencies', ['ui.router']);

/* harmony default export */ __webpack_exports__["a"] = (dependenciesModule);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*appRun.$inject = ['$rootScope','$window','WindowViewFactory'];

function appRun($rootScope, $window,WindowViewFactory){
    $rootScope.app = {
        theme :'red'
    };
    $rootScope.showPadlock = false;
    console.log("WindowViewFactory.changeRestart(true) del app");
    //WindowViewFactory.changeRestart(true);
    // console.log(angular.copy(WindowViewFactory.getRestart()));
    //$rootScope.online = navigator.onLine;
    //$window.addEventListener("offline", function () {
    //	$rootScope.$apply(function() {
    //		$rootScope.online = false;
    //	});
    //}, false);
    //$window.addEventListener("online", function () {
    //	$rootScope.$apply(function() {
    //		$rootScope.online = true;
    //	});
    //}, false);
}

export default appRun;*/

appRun.$inject = [];
function appRun() {
    // TODO
}
/* harmony default export */ __webpack_exports__["a"] = (appRun);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_controller__ = __webpack_require__(9);


// import homeConfig from './home.config'

let homeModule = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('home.module', []).controller('HomeController', __WEBPACK_IMPORTED_MODULE_1__home_controller__["a" /* default */]);
// .config(homeConfig)

/* harmony default export */ __webpack_exports__["a"] = (homeModule);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_run__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_dependencies__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_module__ = __webpack_require__(6);







let appModule = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('app', [__WEBPACK_IMPORTED_MODULE_4__app_dependencies__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__components_home_home_module__["a" /* default */].name]).constant('ngAuthSettings', __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* default */]).config(__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* default */]).run(__WEBPACK_IMPORTED_MODULE_2__app_run__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (appModule);

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


HomeController.$inject = [];

function HomeController() {}

/* harmony default export */ __webpack_exports__["a"] = (HomeController);

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map