import React from 'react'
import { InputField } from './InputField'
import PropsTypes from 'prop-types'
import { CardHeader } from './CardHeader'

export class EditGeneralCard extends React.Component {
  render() {
    return (
      <div className="information-card">
        <CardHeader name="General" deletable={false} />
        <InputField
          cardId="general"
          label="Name"
          changeFunc={this.props.changeFunc}
        />
        <InputField
          cardId="general"
          label="Phone"
          changeFunc={this.props.changeFunc}
        />
        <InputField
          cardId="general"
          label="Email"
          changeFunc={this.props.changeFunc}
        />
      </div>
    )
  }
}

EditGeneralCard.propTypes = {
  cardId: PropsTypes.string,
  data: PropsTypes.any,
  changeFunc: PropsTypes.func,
}
