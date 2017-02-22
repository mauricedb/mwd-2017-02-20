webpackJsonp([0],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateValue = function (_React$Component) {
  _inherits(UpdateValue, _React$Component);

  function UpdateValue() {
    _classCallCheck(this, UpdateValue);

    var _this = _possibleConstructorReturn(this, (UpdateValue.__proto__ || Object.getPrototypeOf(UpdateValue)).call(this));

    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(UpdateValue, [{
    key: "_onChange",
    value: function _onChange(e) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("input", { value: '', onChange: function onChange(e) {
            return _this2._onChange(e);
          } })
      );
    }
  }]);

  return UpdateValue;
}(_react2.default.Component);

var DisplayValue = function (_React$Component2) {
  _inherits(DisplayValue, _React$Component2);

  function DisplayValue() {
    _classCallCheck(this, DisplayValue);

    return _possibleConstructorReturn(this, (DisplayValue.__proto__ || Object.getPrototypeOf(DisplayValue)).call(this));
  }

  _createClass(DisplayValue, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        "Message: ",
        ''
      );
    }
  }]);

  return DisplayValue;
}(_react2.default.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(UpdateValue, null),
        _react2.default.createElement(DisplayValue, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("app"));

/***/ })

},[177]);