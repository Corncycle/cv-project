import React from 'react'
import PropTypes from 'prop-types'
import { DeleteButton } from './DeleteButton'

export class CardHeader extends React.Component {
  render() {
    let deleteButton
    if (this.props.deletable) {
      deleteButton = (
        <DeleteButton
          changeFunc={this.props.changeFunc}
          cardId={this.props.cardId}
        />
      )
    }
    return (
      <div className="flex card-header-container">
        <h2 className="card-header-title">{this.props.name}</h2>
        {deleteButton}
      </div>
    )
  }
}

CardHeader.propTypes = {
  name: PropTypes.string,
  deletable: PropTypes.bool,
  changeFunc: PropTypes.func,
  cardId: PropTypes.string,
}
