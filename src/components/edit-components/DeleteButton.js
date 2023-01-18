import React from 'react'
import PropTypes from 'prop-types'

export class DeleteButton extends React.Component {
  clickFunc = () => {
    this.props.changeFunc('delete', this.props.cardId)
  }

  render() {
    return <button onClick={this.clickFunc}>Delete</button>
  }
}

DeleteButton.propTypes = {
  deleteFunction: PropTypes.func,
  changeFunc: PropTypes.func,
  cardId: PropTypes.string,
}
