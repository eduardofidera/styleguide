'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Deny = require('../icon/Deny');

var _Deny2 = _interopRequireDefault(_Deny);

var _Check = require('../icon/Check');

var _Check2 = _interopRequireDefault(_Check);

var _config = require('vtex-tachyons/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          semantic = _props.semantic,
          disabled = _props.disabled,
          id = _props.id,
          checked = _props.checked,
          label = _props.label;


      var classes = 'flex items-center relative h2 w3 ph1 br4 bg-animate ';
      var circleClasses = 'absolute br-100 pa3 mh2 ';
      var iconDenyClasses = 'absolute mh2 dn c-danger ';
      var iconCheckClasses = 'absolute mh3 dn c-success ';

      if (semantic) {
        if (!disabled && !checked) {
          classes += 'bg-danger ';
          iconDenyClasses += 'flex o-100 ';
          iconCheckClasses += 'flex o-0 ';
        }

        if (!disabled && checked) {
          classes += 'bg-success ';
          iconDenyClasses += 'flex o-0 ';
          iconCheckClasses += 'flex o-100 ';
        }
      } else {
        if (disabled) {
          classes += 'bg-base-2 ';
        } else {
          if (checked) {
            classes += 'bg-primary ';
          } else {
            classes += 'bg-base-6 ';
          }
        }
      }

      if (checked) {
        circleClasses += 'left-2 ';
        iconDenyClasses += 'left-2 ';
        iconCheckClasses += 'left-2 ';
      } else {
        circleClasses += 'left-0 ';
        iconDenyClasses += 'left-0 ';
        iconCheckClasses += 'left-0 ';
      }

      if (disabled) {
        circleClasses += 'bg-base-4 ';
      } else {
        circleClasses += 'bg-base-1 ';
      }

      return _react2.default.createElement(
        'label',
        {
          htmlFor: id || undefined,
          className: 'flex flex-row items-center ' + (!disabled && 'pointer')
        },
        _react2.default.createElement(
          'div',
          { className: 'vtex-toggle ' + classes },
          _react2.default.createElement('div', {
            style: {
              height: '1.5rem',
              width: '1.5rem',
              transition: 'all .2s ease-out',
              boxShadow: disabled ? 'none' : '0 0 10px rgba(0,0,0,0.2)'
            },
            className: '' + circleClasses
          }),
          _react2.default.createElement(
            'div',
            {
              className: iconDenyClasses,
              style: {
                marginLeft: '.5rem',
                transition: 'left .2s ease-out'
              }
            },
            _react2.default.createElement(_Deny2.default, { color: 'currentColor' })
          ),
          _react2.default.createElement(
            'div',
            {
              className: iconCheckClasses,
              style: {
                transition: 'left .2s ease-out'
              }
            },
            _react2.default.createElement(_Check2.default, { color: 'currentColor' })
          )
        ),
        _react2.default.createElement('input', {
          id: id || undefined,
          type: 'checkbox',
          className: 'dn',
          disabled: disabled,
          checked: checked,
          onClick: this.props.onClick,
          onChange: this.props.onChange
        }),
        label && _react2.default.createElement(
          'span',
          { className: 'ml5' },
          label
        )
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  semantic: false,
  label: ''
};

Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  semantic: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func
};

exports.default = Toggle;