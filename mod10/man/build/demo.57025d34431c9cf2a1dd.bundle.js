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

// class Hello extends React.Component {
//     render(){

//         return React.createElement('h1', null, 'Hello')
//     }
// }

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock() {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this));

        _this.state = {
            now: new Date().toLocaleTimeString()
        };

        setInterval(function () {
            // this.state.now = new Date().toLocaleTimeString()
            _this.setState({
                now: new Date().toLocaleTimeString()
            });
        }, 1000);
        return _this;
    }

    _createClass(Clock, [{
        key: 'render',
        value: function render() {
            console.log('Rendering Clock');
            var now = this.state.now;

            return _react2.default.createElement(
                'div',
                null,
                now,
                _react2.default.createElement(Hello, { name: 'from clock' })
            );
        }
    }]);

    return Clock;
}(_react2.default.Component);

var Hello = function (_React$Component2) {
    _inherits(Hello, _React$Component2);

    function Hello() {
        _classCallCheck(this, Hello);

        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
    }

    _createClass(Hello, [{
        key: 'render',
        value: function render() {
            // console.log(this.props)
            console.log('Rendering Hello');
            return _react2.default.createElement(
                'h1',
                null,
                'Hello ',
                this.props.name
            );
        }
    }]);

    return Hello;
}(_react2.default.Component);

Hello.propTypes = {
    name: _react2.default.PropTypes.string.isRequired
};

var Controlled = function (_React$Component3) {
    _inherits(Controlled, _React$Component3);

    function Controlled() {
        _classCallCheck(this, Controlled);

        var _this3 = _possibleConstructorReturn(this, (Controlled.__proto__ || Object.getPrototypeOf(Controlled)).call(this));

        _this3.state = {
            value: '123'
        };

        _this3.onChange = _this3.onChange.bind(_this3);
        return _this3;
    }

    _createClass(Controlled, [{
        key: 'onChange',
        value: function onChange(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('input', { value: this.state.value, onChange: this.onChange });
        }
    }]);

    return Controlled;
}(_react2.default.Component);

var Uncontrolled = function (_React$Component4) {
    _inherits(Uncontrolled, _React$Component4);

    function Uncontrolled() {
        _classCallCheck(this, Uncontrolled);

        var _this4 = _possibleConstructorReturn(this, (Uncontrolled.__proto__ || Object.getPrototypeOf(Uncontrolled)).call(this));

        _this4.input = null;

        setInterval(function () {
            return console.log(_this4.input.value);
        }, 5000);
        return _this4;
    }

    _createClass(Uncontrolled, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement('input', { defaultValue: '123', ref: function ref(e) {
                    return _this5.input = e;
                } });
        }
    }]);

    return Uncontrolled;
}(_react2.default.Component);

var App = function (_React$Component5) {
    _inherits(App, _React$Component5);

    function App() {
        _classCallCheck(this, App);

        var _this6 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this6.state = {
            counter: 0
        };

        _this6.onClick = _this6.onClick.bind(_this6);
        return _this6;
    }

    _createClass(App, [{
        key: 'onClick',
        value: function onClick() {
            console.log('I was clicked');
            this.setState({ counter: this.state.counter + 1 });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('Rendering App');
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Hello, { name: 'Maurice' }),
                _react2.default.createElement(
                    'button',
                    { onClick: this.onClick },
                    'Click me'
                ),
                this.state.counter,
                _react2.default.createElement(Clock, null),
                _react2.default.createElement(Controlled, null),
                _react2.default.createElement(Uncontrolled, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ })

},[177]);