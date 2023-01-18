import React from 'react'
import PropTypes from 'prop-types'
import { normalizeClassName } from '../../util'

export class InputField extends React.Component {
  constructor(props) {
    super(props)

    this.inputId =
      this.props.cardId + '-' + normalizeClassName(this.props.label)
  }

  render() {
    return (
      <div>
        <label htmlFor={this.inputId}>{this.props.label + ': '}</label>
        <input id={this.inputId} type="text"></input>
      </div>
    )
  }
}

InputField.propTypes = {
  cardId: PropTypes.string,
  label: PropTypes.string,
}
