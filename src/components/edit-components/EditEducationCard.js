import React from 'react'
import { InputField } from './InputField'
import PropsTypes from 'prop-types'
import { CardHeader } from './CardHeader'

export class EditEducationCard extends React.Component {
  constructor(props) {
    super(props)

    this.cardId = 'education-' + this.props.data.id
  }

  render() {
    return (
      <div>
        <CardHeader
          name="Education Information"
          deletable={true}
          changeFunc={this.props.changeFunc}
          cardId={this.cardId}
        />
        <InputField cardId={this.cardId} label="School Name" />
        <InputField cardId={this.cardId} label="Degree" />
        <InputField cardId={this.cardId} label="Begin" />
        <InputField cardId={this.cardId} label="End" />
      </div>
    )
  }
}

EditEducationCard.propTypes = {
  cardId: PropsTypes.string,
  data: PropsTypes.any,
  changeFunc: PropsTypes.func,
}
