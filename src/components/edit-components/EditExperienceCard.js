import React from 'react'
import { InputField } from './InputField'
import PropsTypes from 'prop-types'
import { CardHeader } from './CardHeader'

export class EditExperienceCard extends React.Component {
  constructor(props) {
    super(props)

    this.cardId = 'experience-' + this.props.data.id
  }

  render() {
    return (
      <div className="information-card">
        <CardHeader
          name="Experience Information"
          deletable={true}
          changeFunc={this.props.changeFunc}
          cardId={this.cardId}
        />
        <InputField
          cardId={this.cardId}
          label="Company"
          changeFunc={this.props.changeFunc}
        />
        <InputField
          cardId={this.cardId}
          label="Position"
          changeFunc={this.props.changeFunc}
        />
        <InputField
          cardId={this.cardId}
          label="Responsibilities"
          changeFunc={this.props.changeFunc}
        />
        <InputField
          cardId={this.cardId}
          label="Begin"
          changeFunc={this.props.changeFunc}
        />
        <InputField
          cardId={this.cardId}
          label="End"
          changeFunc={this.props.changeFunc}
        />
      </div>
    )
  }
}

EditExperienceCard.propTypes = {
  cardId: PropsTypes.string,
  data: PropsTypes.any,
  changeFunc: PropsTypes.func,
}
