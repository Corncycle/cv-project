import React from 'react'
import PropTypes from 'prop-types'

export class ToggleButton extends React.Component {
  clickFunc = () => {
    this.props.toggleFunc()
  }

  render() {
    return (
      <input
        type="checkbox"
        className="toggle-button"
        onClick={this.clickFunc}
      ></input>
    )
  }
}

ToggleButton.propTypes = {
  toggleFunc: PropTypes.func,
}
