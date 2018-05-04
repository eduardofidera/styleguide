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

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.handleChange = function (event) {
      _this.props.onChange && _this.props.onChange(event);
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

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          errorMessage = _props.errorMessage,
          error = _props.error,
          label = _props.label,
          helpText = _props.helpText,
          dataAttributes = _props.dataAttributes,
          children = _props.children;
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
      var typography = 'f6 ';
      var padding = 'pv3 ph5';
      var classes = widthClass + ' ' + box + ' ' + padding + ' ' + border + ' ' + typography + ' ';

      if (this.props.disabled) {
        classes += 'bg-base-3 b--base-3 c-base-5 ';
      } else {
        classes += 'hover-b--base-5 bg-base-1 c-base-8 ';
        if (active) {
          classes += 'b--base-6 hover-b--base-2 ';
        } else {
          classes += 'b--base-4 hover-b--base-3 ';
        }
      }

      if (error || errorMessage) {
        classes += 'b--danger hover-b--danger ';
      }

      return _react2.default.createElement(
        'label',
        { className: 'vtex-textarea' },
        label && _react2.default.createElement(
          'span',
          { className: 'vtex-textarea__label db mb3 w-100' },
          label
        ),
        _react2.default.createElement('textarea', Object.assign({}, dataAttrs, {
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          className: classes,
          autoComplete: this.props.autoComplete,
          autoFocus: this.props.autoFocus,
          disabled: this.props.disabled,
          maxLength: this.props.maxLength,
          minLength: this.props.minLength,
          name: this.props.name,
          placeholder: this.props.placeholder,
          readOnly: this.props.readOnly,
          required: this.props.required,
          spellCheck: this.props.spellCheck,
          id: this.props.id,
          rows: this.props.rows,
          defaultValue: children
        })),
        errorMessage && _react2.default.createElement(
          'div',
          { className: 'red f6 mt3 lh-title' },
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

  return Textarea;
}(_react.Component);

Textarea.defaultProps = {
  children: '',
  autoFocus: false,
  dataAttributes: {},
  disabled: false,
  label: '',
  readOnly: false,
  error: false,
  rows: 5
};

Textarea.propTypes = {
  /** Content of the textarea */
  children: _propTypes2.default.string,
  /** Error highlight */
  error: _propTypes2.default.bool,
  /** Error message */
  errorMessage: _propTypes2.default.string,
  /** Help text */
  helpText: _propTypes2.default.node,
  /** Label */
  label: _propTypes2.default.string,
  /** Spec attribute */
  autoComplete: _propTypes2.default.string,
  /** Spec attribute */
  autoFocus: _propTypes2.default.bool,
  /** Spec attribute */
  disabled: _propTypes2.default.bool,
  /** Spec attribute */
  id: _propTypes2.default.string,
  /** Spec attribute */
  maxLength: _propTypes2.default.string,
  /** Spec attribute */
  minLength: _propTypes2.default.string,
  /** Spec attribute */
  name: _propTypes2.default.string,
  /** Spec attribute */
  placeholder: _propTypes2.default.string,
  /** Spec attribute */
  readOnly: _propTypes2.default.bool,
  /** Spec attribute */
  required: _propTypes2.default.string,
  /** Spec attribute */
  rows: _propTypes2.default.number,
  /** Spec attribute */
  spellCheck: _propTypes2.default.string,
  /** Spec attribute */
  wrap: _propTypes2.default.string,
  /** List of data attributes as a object like `{'locale': 'en-US'}` */
  dataAttributes: _propTypes2.default.object,
  /** onChange event */
  onChange: _propTypes2.default.func,
  /** onFocus event */
  onFocus: _propTypes2.default.func,
  /** onBlur event */
  onBlur: _propTypes2.default.func
};

exports.default = Textarea;