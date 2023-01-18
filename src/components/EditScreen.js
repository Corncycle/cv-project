import React from 'react'
import { EditEducationCard } from './edit-components/EditEducationCard'
import { EditGeneralCard } from './edit-components/EditGeneralCard'
import PropsTypes from 'prop-types'

export class EditScreen extends React.Component {
  render() {
    console.log('im being told to render')
    console.log(this.props)
    return (
      <div>
        <EditGeneralCard
          data={this.props.entryData.general}
          changeFunc={this.props.changeFunc}
        />
        {this.props.entryData.education.map((ed) => {
          return (
            <EditEducationCard
              key={ed.id}
              data={ed}
              changeFunc={this.props.changeFunc}
            />
          )
        })}
      </div>
    )
  }
}

EditScreen.propTypes = {
  entryData: PropsTypes.any,
  changeFunc: PropsTypes.func,
}
