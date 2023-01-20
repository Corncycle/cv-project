import React from 'react'
import PropTypes from 'prop-types'

export class AddButton extends React.Component {
  clickFunc = () => {
    this.props.changeFunc('add', this.props.section)
  }

  render() {
    return (
      <button className="standard-button" onClick={this.clickFunc}>
        Add
      </button>
    )
  }
}

AddButton.propTypes = {
  changeFunc: PropTypes.func,
  section: PropTypes.string,
}
