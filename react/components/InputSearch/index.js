import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import SearchIcon from '../icon/Search'
import FailureIcon from '../icon/Failure'

class InputSearch extends Component {
  handleClickClear = event => {
    this.props.onChange &&
      this.props.onChange({
        ...event,
        target: {
          ...event.target,
          value: '',
        },
      })
  }

  render() {
    const size = this.props.size
    const iconSize = size === 'large' ? 18 : size === 'x-large' ? 20 : 16

    return (
      <Input
        {...this.props}
        type="search"
        suffixIcon={
          <span className="pointer">
            {this.props.value ? (
              <span
                tabIndex={0}
                onClick={this.handleClickClear}
                className="pointer c-on-base"
              >
                <FailureIcon solid size={iconSize} />
              </span>
            ) : (
              <span className="c-muted-2">
                <SearchIcon size={iconSize} />
              </span>
            )}
          </span>
        }
      />
    )
  }
}

const InputSearchWithRef = React.forwardRef((props, ref) => (
  <InputSearch {...props} forwardedRef={ref} />
))

InputSearchWithRef.displayName = 'InputSearch'

InputSearchWithRef.propTypes = {
  onChange: PropTypes.func,
  size: PropTypes.string,
  value: PropTypes.string,
}

InputSearch.propTypes = InputSearchWithRef.propTypes

export default InputSearchWithRef
