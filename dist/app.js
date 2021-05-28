/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Models/Car.js":
/*!***********************!*\
  !*** ./Models/Car.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Car": () => (/* binding */ Car)
/* harmony export */ });
/* harmony import */ var _Transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transport */ "./Models/Transport.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Car = /*#__PURE__*/function (_Transport) {
  _inherits(Car, _Transport);

  var _super = _createSuper(Car);

  function Car(name, engine, fuelTankVolume, length, wheels, engineDisplacement) {
    var _this;

    _classCallCheck(this, Car);

    _this = _super.call(this, name, engine, fuelTankVolume, length);

    _defineProperty(_assertThisInitialized(_this), "wheels", void 0);

    _defineProperty(_assertThisInitialized(_this), "engineDisplacement", void 0);

    _defineProperty(_assertThisInitialized(_this), "getAround", function () {
      console.log("With ".concat(_this.engineDisplacement, " Bugatti's engine displacement you'll always like get around the city "));
    });

    _this.wheels = wheels;
    _this.engineDisplacement = engineDisplacement;
    return _this;
  }

  _createClass(Car, [{
    key: "toString",
    value: function toString() {
      return '(' + this.name + ', ' + this.engine + ', ' + this.fuelTankVolume + ', ' + this.length + ', ' + this.wheels + ', ' + this.engineDisplacement + ')';
    }
  }]);

  return Car;
}(_Transport__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./Models/Plane.js":
/*!*************************!*\
  !*** ./Models/Plane.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plane": () => (/* binding */ Plane)
/* harmony export */ });
/* harmony import */ var _Transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transport */ "./Models/Transport.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Plane = /*#__PURE__*/function (_Transport) {
  _inherits(Plane, _Transport);

  var _super = _createSuper(Plane);

  function Plane(name, engine, fuelTankVolume, length, wingspan, height) {
    var _this;

    _classCallCheck(this, Plane);

    _this = _super.call(this, name, engine, fuelTankVolume, length);

    _defineProperty(_assertThisInitialized(_this), "wingspan", void 0);

    _defineProperty(_assertThisInitialized(_this), "height", void 0);

    _defineProperty(_assertThisInitialized(_this), "makeMove", function () {
      console.log("".concat(_this.name, " now is landing in Airport"));
    });

    _this.wingspan = wingspan;
    _this.height = height;
    return _this;
  }

  _createClass(Plane, [{
    key: "toString",
    value: function toString() {
      return '(' + this.name + ', ' + this.engine + ', ' + this.fuelTankVolume + ', ' + this.length + ', ' + this.wingspan + ', ' + this.height + ')';
    }
  }]);

  return Plane;
}(_Transport__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./Models/Ship.js":
/*!************************!*\
  !*** ./Models/Ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _Transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transport */ "./Models/Transport.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Ship = /*#__PURE__*/function (_Transport) {
  _inherits(Ship, _Transport);

  var _super = _createSuper(Ship);

  function Ship(name, engine, fuelTankVolume, length, displacement, waterTankVolume) {
    var _this;

    _classCallCheck(this, Ship);

    _this = _super.call(this, name, engine, fuelTankVolume, length);

    _defineProperty(_assertThisInitialized(_this), "displacement", void 0);

    _defineProperty(_assertThisInitialized(_this), "waterTankVolume", void 0);

    _defineProperty(_assertThisInitialized(_this), "callAt", function () {
      console.log("".concat(_this.name, " cruise ship will call at several ports"));
    });

    _this.displacement = displacement;
    _this.waterTankVolume = waterTankVolume;
    return _this;
  }

  _createClass(Ship, [{
    key: "toString",
    value: function toString() {
      return '(' + this.name + ', ' + this.engine + ', ' + this.fuelTankVolume + ', ' + this.length + ', ' + this.displacement + ', ' + this.waterTankVolume + ')';
    }
  }]);

  return Ship;
}(_Transport__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./Models/Transport.js":
/*!*****************************!*\
  !*** ./Models/Transport.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transport)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Transport = /*#__PURE__*/function () {
  function Transport(name, engine, fuelTankVolume, length) {
    _classCallCheck(this, Transport);

    _defineProperty(this, "engine", void 0);

    _defineProperty(this, "fuelTankVolume", void 0);

    _defineProperty(this, "length", void 0);

    _defineProperty(this, "makeMove", function () {
      console.log("Some Transport is made move");
    });

    _defineProperty(this, "getAround", function () {
      console.log("The best way to get around the city");
    });

    _defineProperty(this, "callAt", function () {
      console.log("The ship called at one port");
    });

    this.name = name;
    this.engine = engine;
    this.fuelTankVolume = fuelTankVolume;
    this.length = length;
  }

  _createClass(Transport, [{
    key: "toString",
    value: function toString() {
      return '(' + this.name + ', ' + this.engine + ', ' + this.fuelTankVolume + ', ' + this.length + ')';
    }
  }]);

  return Transport;
}();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Models_Transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/Transport */ "./Models/Transport.js");
/* harmony import */ var _Models_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/Car */ "./Models/Car.js");
/* harmony import */ var _Models_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/Ship */ "./Models/Ship.js");
/* harmony import */ var _Models_Plane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/Plane */ "./Models/Plane.js");




new _Models_Transport__WEBPACK_IMPORTED_MODULE_0__.default('', '', '');
var bugatti = new _Models_Car__WEBPACK_IMPORTED_MODULE_1__.Car('Bugatti La Voiture Noire', 'quad-turbo', 100, 4.62);
var aquila36 = new _Models_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship('Aquila36 Sport', 'mercury-verado', 1350, 10.96);
var boeing787 = new _Models_Plane__WEBPACK_IMPORTED_MODULE_3__.Plane('Boeing787-10', 'gas-turbine', 126200, 56.7);
bugatti.wheels = 4;
bugatti.engineDisplacement = 8.0;
aquila36.displacement = 6700;
aquila36.waterTankVolume = 200;
boeing787.wingspan = 60.17;
boeing787.height = 17;
console.log(Object.keys(bugatti));
console.log(bugatti.toString());
console.log(Object.keys(aquila36));
console.log(aquila36.toString());
console.log(Object.keys(boeing787));
console.log(boeing787.toString());
boeing787.makeMove();
bugatti.getAround();
aquila36.callAt();
})();

/******/ })()
;
//# sourceMappingURL=app.js.map