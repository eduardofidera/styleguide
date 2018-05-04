'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      !_this.props.disabled && _this.props.onClick && _this.props.onClick(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          block = _props.block,
          primary = _props.primary,
          secondary = _props.secondary,
          disabled = _props.disabled,
          icon = _props.icon;

      var Tag = icon ? 'div' : 'button';

      if (secondary && primary) {
        throw new Error('Button component cannot be primary AND secondary');
      }

      var classes = 'vtex-button bw1 ba fw5 ttu br2 fw4 v-mid ';

      classes += icon ? 'icon-button dib ' : '';

      switch (size) {
        case 'large':
          classes += icon ? 'pa4 ' : 'pv4 ph6 ';
          classes += 'f5 ';
          break;
        case 'x-large':
          classes += icon ? 'pa5 ' : 'pv5 ph7 ';
          classes += 'f4 ';
          break;
        default:
          classes += icon ? 'pa3 ' : 'pv3 ph5 ';
          classes += 'f6 ';
          break;
      }

      if (!secondary && !primary && !disabled) {
        classes += 'c-tertiary hover-c-tertiary bg-tertiary hover-bg-tertiary b--tertiary hover-b--tertiary hover-bg-tertiary ';
      }

      if (secondary && !disabled) {
        classes += 'c-secondary hover-c-secondary bg-secondary hover-bg-secondary b--secondary hover-b--secondary hover-bg-secondary ';
      }

      if (primary && !disabled) {
        classes += 'c-primary hover-c-primary bg-primary hover-bg-primary b--primary hover-b--primary ';
      }

      if (!disabled) {
        classes += 'pointer ';
      }

      if (disabled) {
        classes += 'c-primary--disabled hover-c-primary--disabled bg-primary--disabled hover-bg-primary--disabled b--primary--disabled hover-b--primary--disabled  ';
      }

      if (block) {
        classes += 'w-100 ';
      }

      return _react2.default.createElement(
        Tag,
        {
          id: this.props.id,
          autoFocus: icon ? undefined : this.props.autoFocus,
          disabled: icon ? undefined : this.props.disabled,
          name: icon ? undefined : this.props.name,
          type: icon ? undefined : this.props.type,
          value: icon ? undefined : this.props.value,
          className: classes,
          onClick: this.handleClick,
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave,
          onMouseOver: this.props.onMouseOver,
          onMouseOut: this.props.onMouseOut,
          onMouseUp: this.props.onMouseUp,
          onMouseDown: this.props.onMouseDown,
          ref: this.props.ref,
          style: icon ? { fontSize: 0 } : {}
        },
        this.props.children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.defaultProps = {
  size: 'regular',
  block: false,
  primary: false,
  secondary: false,
  disabled: false,
  autoFocus: false,
  icon: false,
  type: 'button'
};

Button.propTypes = {
  /** Button size  */
  size: _propTypes2.default.oneOf(['regular', 'large', 'x-large']),
  /** Block style */
  block: _propTypes2.default.bool,
  /** Primary style */
  primary: _propTypes2.default.bool,
  /** Secondary style */
  secondary: _propTypes2.default.bool,
  /** If you are using just an Icon component inside, use this as true */
  icon: _propTypes2.default.bool,
  /** (Button spec attribute) */
  id: _propTypes2.default.string,
  /** (Button spec attribute) */
  autoFocus: _propTypes2.default.bool,
  /** (Button spec attribute) */
  autoComplete: _propTypes2.default.string,
  /** (Button spec attribute) */
  disabled: _propTypes2.default.bool,
  /** (Button spec attribute) */
  name: _propTypes2.default.string,
  /** (Button spec attribute) */
  type: _propTypes2.default.string,
  /** (Button spec attribute) */
  value: _propTypes2.default.string,
  /** Label of the Button */
  children: _propTypes2.default.node.isRequired,
  /** onClick event */
  onClick: _propTypes2.default.func,
  /** onMouseEnter event */
  onMouseEnter: _propTypes2.default.func,
  /** onMouseLeave event */
  onMouseLeave: _propTypes2.default.func,
  /** onMouseOver event */
  onMouseOver: _propTypes2.default.func,
  /** onMouseOut event */
  onMouseOut: _propTypes2.default.func,
  /** onMouseUp event */
  onMouseUp: _propTypes2.default.func,
  /** onMouseDown event */
  onMouseDown: _propTypes2.default.func,
  /** ref function */
  ref: _propTypes2.default.func
};

exports.default = Button;