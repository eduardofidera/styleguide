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

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.handleChange = function (event) {
      _this.props.onChange && _this.props.onChange(event);
    };

    _this.handleKeyPress = function (event) {
      _this.props.onKeyPress && _this.props.onKeyPress(event);
    };

    _this.handleFocus = function (event) {
      _this.setState({ active: true });
      _this.props.onFocus && _this.props.onFocus(event);
    };

    _this.handleBlur = function (event) {
      _this.setState({ active: false });
      _this.props.onBlur && _this.props.onBlur(event);
    };

    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          errorMessage = _props.errorMessage,
          error = _props.error,
          label = _props.label,
          size = _props.size,
          token = _props.token,
          helpText = _props.helpText,
          dataAttributes = _props.dataAttributes;
      var active = this.state.active;


      var dataAttrs = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(dataAttributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          dataAttrs['data-' + key] = dataAttributes[key];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var widthClass = 'w-100';
      var box = 'ma0 border-box';
      var border = 'bw1 br2 b--solid outline-0';
      var classes = widthClass + ' ' + box + ' ' + border + ' ';

      if (token) {
        classes += 'code ';
      }

      if (this.props.disabled) {
        classes += 'bg-base-3 b--base-3 c-base-5 ';
      } else {
        classes += 'hover-b--base-5 bg-base-1 c-base-8 ';
        if (active) {
          classes += 'b--base-6 ';
        } else {
          classes += 'b--base-4 ';
        }
      }

      if (error || errorMessage) {
        classes += 'b--danger hover-b--danger ';
      }

      switch (size) {
        case 'large':
          classes += 'f5 pv4 ph6 ';
          // iconSize = 18
          break;
        case 'x-large':
          classes += 'f4 pv5 ph7 ';
          // iconSize = 22
          break;
        default:
          classes += 'f6 pv3 ph5 ';
          // iconSize = 16
          break;
      }

      return _react2.default.createElement(
        'label',
        { className: 'vtex-input' },
        label && _react2.default.createElement(
          'span',
          { className: 'vtex-input__label db mb3 w-100' },
          label
        ),
        _react2.default.createElement('input', Object.assign({}, dataAttrs, {
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          onKeyPress: this.handleKeyPress,
          className: classes,
          disabled: this.props.disabled,
          accept: this.props.accept,
          autoComplete: this.props.autoComplete,
          autoCorrect: this.props.autoCorrect,
          autoFocus: this.props.autoFocus,
          autoSave: this.props.autoSave,
          defaultValue: this.props.defaultValue,
          inputMode: this.props.inputMode,
          list: this.props.list,
          max: this.props.max,
          maxLength: this.props.maxLength,
          min: this.props.min,
          minLength: this.props.minLength,
          multiple: this.props.multiple,
          name: this.props.name,
          pattern: this.props.pattern,
          placeholder: this.props.placeholder,
          readOnly: this.props.readOnly,
          required: this.props.required,
          spellCheck: this.props.spellCheck,
          src: this.props.src,
          step: this.props.step,
          tabIndex: this.props.tabIndex,
          type: this.props.type,
          value: this.props.value,
          id: this.props.id
        })),
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

  return Input;
}(_react.Component);

Input.defaultProps = {
  autoFocus: false,
  token: false,
  dataAttributes: {},
  disabled: false,
  label: '',
  multiple: false,
  readOnly: false,
  error: false,
  size: 'regular'
};

Input.propTypes = {
  /** Error highlight */
  error: _propTypes2.default.bool,
  /** Error message */
  errorMessage: _propTypes2.default.string,
  /** If the input is an API Key, App Key or App Token */
  token: _propTypes2.default.bool,
  /** Help text */
  helpText: _propTypes2.default.node,
  /** Input size */
  size: _propTypes2.default.oneOf(['regular', 'large', 'x-large']),
  /** Label */
  label: _propTypes2.default.string,
  /** Spec attribute */
  accept: _propTypes2.default.string,
  /** Spec attribute */
  disabled: _propTypes2.default.bool,
  /** Spec attribute */
  autoComplete: _propTypes2.default.string,
  /** Spec attribute */
  autoCorrect: _propTypes2.default.string,
  /** Spec attribute */
  autoFocus: _propTypes2.default.bool,
  /** Spec attribute */
  autoSave: _propTypes2.default.string,
  /** List of data attributes as a object like `{'locale': 'en-US'}` */
  dataAttributes: _propTypes2.default.object,
  /** Spec attribute */
  defaultValue: _propTypes2.default.string,
  /** Spec attribute */
  id: _propTypes2.default.string,
  /** Spec attribute */
  inputMode: _propTypes2.default.string,
  /** Spec attribute */
  list: _propTypes2.default.string,
  /** Spec attribute */
  max: _propTypes2.default.string,
  /** Spec attribute */
  maxLength: _propTypes2.default.string,
  /** Spec attribute */
  min: _propTypes2.default.string,
  /** Spec attribute */
  minLength: _propTypes2.default.string,
  /** Spec attribute */
  multiple: _propTypes2.default.bool,
  /** Spec attribute */
  name: _propTypes2.default.string,
  /** Spec attribute */
  pattern: _propTypes2.default.string,
  /** Spec attribute */
  placeholder: _propTypes2.default.string,
  /** Spec attribute */
  readOnly: _propTypes2.default.bool,
  /** Spec attribute */
  required: _propTypes2.default.string,
  /** Spec attribute */
  spellCheck: _propTypes2.default.string,
  /** Spec attribute */
  src: _propTypes2.default.string,
  /** Spec attribute */
  step: _propTypes2.default.string,
  /** Spec attribute */
  tabIndex: _propTypes2.default.string,
  /** Spec attribute */
  type: _propTypes2.default.string,
  /** Spec attribute */
  value: _propTypes2.default.string,
  /** onChange event */
  onChange: _propTypes2.default.func,
  /** onKeyPress event */
  onKeyPress: _propTypes2.default.func,
  /** onFocus event */
  onFocus: _propTypes2.default.func,
  /** onBlur event */
  onBlur: _propTypes2.default.func
};

exports.default = Input;