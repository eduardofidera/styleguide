'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrowDownIcon = require('./ArrowDownIcon');

var _ArrowDownIcon2 = _interopRequireDefault(_ArrowDownIcon);

var _config = require('vtex-tachyons/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;
      var value = e.target.value;


      !disabled && onChange && onChange(e, value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: 'getValueLabel',
    value: function getValueLabel() {
      var _this2 = this;

      var option = this.props.options.find(function (option) {
        return option.value === _this2.props.value;
      });
      if (!option) return null;
      return option.label;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          id = _props.id,
          value = _props.value,
          size = _props.size,
          disabled = _props.disabled,
          options = _props.options,
          error = _props.error,
          errorMessage = _props.errorMessage,
          helpText = _props.helpText,
          placeholder = _props.placeholder,
          preventTruncate = _props.preventTruncate,
          autoFocus = _props.autoFocus,
          form = _props.form,
          name = _props.name,
          required = _props.required;


      var width = void 0;
      var iconSize = void 0;

      var classes = 'bg-transparent bn w-100 ';
      var containerClasses = 'br2 bw1 relative ';
      var selectClasses = 'o-0 absolute top-0 left-0 w-100 bottom-0 ';

      var valueLabel = this.getValueLabel();
      var showCaption = !valueLabel;

      switch (size) {
        case 'large':
          classes += 'f5 pv4 pl6 pr5 ';
          selectClasses += 'f5 ';
          iconSize = 18;
          break;
        case 'x-large':
          classes += 'f4 pv5 pl7 pr6 ';
          selectClasses += 'f4 ';
          iconSize = 22;
          break;
        default:
          classes += 'f6 pv3 pl5 pr4 ';
          selectClasses += 'f6 ';
          iconSize = 16;
          break;
      }

      var containerStyle = { width: width };

      if (disabled) {
        containerClasses += 'bg-base-4 ';
        classes += 'bg-base-3 c-base-3 ';
      } else {
        classes += 'c-base-8 ';
        selectClasses += 'pointer ';
        containerClasses += 'bg-base-1 b--base-4 hover-b--base-5 c-base-8 ';
      }

      if (error || errorMessage) {
        containerClasses += 'ba b--danger hover-b--danger ';
      } else {
        containerClasses += 'ba b--base-2 ';
      }

      return _react2.default.createElement(
        'div',
        { className: 'vtex-dropdown' },
        _react2.default.createElement(
          'label',
          null,
          label && _react2.default.createElement(
            'span',
            { className: 'vtex-dropdown__label dib mb3 w-100' },
            label
          ),
          _react2.default.createElement(
            'div',
            { className: containerClasses, style: containerStyle },
            _react2.default.createElement(
              'div',
              {
                id: id,
                className: 'vtex-dropdown__button ' + classes
              },
              _react2.default.createElement(
                'div',
                { className: 'flex' },
                _react2.default.createElement(
                  'div',
                  { className: 'vtex-dropdown__caption flex-auto tl truncate' },
                  showCaption ? placeholder : valueLabel
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'vtex-dropdown__arrow flex-none flex items-center pl2' },
                  _react2.default.createElement(_ArrowDownIcon2.default, {
                    size: iconSize,
                    color: disabled ? _config2.default.colors['gray'] : _config2.default.colors.blue
                  })
                )
              )
            ),
            _react2.default.createElement(
              'select',
              {
                disabled: disabled,
                className: selectClasses,
                onChange: this.handleChange,
                value: value,
                autoFocus: autoFocus,
                form: form,
                name: name,
                required: required,
                style: {
                  // safari select height fix
                  WebkitAppearance: 'menulist-button'
                }
              },
              preventTruncate && _react2.default.createElement('optgroup', { label: label || helpText || placeholder || '' }),
              options.map(function (option) {
                return _react2.default.createElement(
                  'option',
                  { key: option.value, value: option.value },
                  option.label
                );
              })
            )
          )
        ),
        errorMessage && _react2.default.createElement(
          'div',
          { className: 'c-danger f6 mt3 lh-title' },
          errorMessage
        ),
        helpText && _react2.default.createElement(
          'div',
          { className: 'c-base-7 f6 mt3 lh-title' },
          helpText
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
  size: 'regular',
  options: []
};

Dropdown.propTypes = {
  /** Error highlight */
  error: _propTypes2.default.bool,
  /** Error message */
  errorMessage: _propTypes2.default.node,
  /** Help text */
  helpText: _propTypes2.default.node,
  /** Dropdown label */
  label: _propTypes2.default.node,
  /** Dropdown placeholder value */
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** Dropdown size */
  size: _propTypes2.default.oneOf(['regular', 'large', 'x-large']),
  /** Dropdown options list */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
  })),
  /** Prevent truncating large options texts on some devices/browsers, such as iOS */
  preventTruncate: _propTypes2.default.bool,
  /** Spec attribute */
  id: _propTypes2.default.string,
  /** Spec attribute */
  autoFocus: _propTypes2.default.bool,
  /** Spec attribute */
  value: _propTypes2.default.string,
  /** Spec attribute */
  disabled: _propTypes2.default.bool,
  /** Spec attribute */
  form: _propTypes2.default.string,
  /** Spec attribute */
  name: _propTypes2.default.string,
  /** Spec attribute */
  required: _propTypes2.default.bool,
  /** onChange event */
  onChange: _propTypes2.default.func,
  /** onClose event */
  onClose: _propTypes2.default.func,
  /** onOpen event */
  onOpen: _propTypes2.default.func
};

exports.default = Dropdown;