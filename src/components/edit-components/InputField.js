import React from 'react'
import PropTypes from 'prop-types'
import { normalizeClassName } from '../../util'

export class InputField extends React.Component {
  constructor(props) {
    super(props)

    this.inputId =
      this.props.cardId + '-' + normalizeClassName(this.props.label)

    this.editFunc = this.editFunc.bind(this)
  }

  editFunc(e) {
    this.props.changeFunc(
      'change',
      this.props.cardId,
      normalizeClassName(this.props.label),
      e.target.value
    )
  }

  render() {
    this.classes = 'input-field-input'
    if (this.props.size === 'large') {
      this.classes = this.classes + ' large-text-input'
    } else if (this.props.size === 'small') {
      this.classes = this.classes + ' small-text-input'
    }

    return (
      <div className="input-field-container">
        {/* <label htmlFor={this.inputId}>{this.props.label + ': '}</label> */}
        <input
          id={this.inputId}
          type="text"
          onChange={this.editFunc}
          className={this.classes}
          placeholder={this.props.label}
        ></input>
      </div>
    )
  }
}

InputField.propTypes = {
  cardId: PropTypes.string,
  label: PropTypes.string,
  changeFunc: PropTypes.func,
  size: PropTypes.string,
}
