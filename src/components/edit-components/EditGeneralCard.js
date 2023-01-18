import React from 'react'
import { InputField } from './InputField'
import PropsTypes from 'prop-types'
import { CardHeader } from './CardHeader'

export class EditGeneralCard extends React.Component {
  render() {
    return (
      <div>
        <CardHeader name="General" deletable={false} />
        <InputField cardId="general" label="Name" />
        <InputField cardId="general" label="Phone" />
        <InputField cardId="general" label="Email" />
      </div>
    )
  }
}

EditGeneralCard.propTypes = {
  cardId: PropsTypes.string,
  data: PropsTypes.any,
}
