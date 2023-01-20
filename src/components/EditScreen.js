import React from 'react'
import { EditEducationCard } from './edit-components/EditEducationCard'
import { EditGeneralCard } from './edit-components/EditGeneralCard'
import { EditExperienceCard } from './edit-components/EditExperienceCard'
import PropsTypes from 'prop-types'
import { AddButton } from './edit-components/AddButton'
import { SectionHeader } from './edit-components/SectionHeader'

export class EditScreen extends React.Component {
  render() {
    return (
      <div className={'information-panel flex ' + this.props.className}>
        <div className="paper-container flex">
          <SectionHeader content="General Information" />
          <EditGeneralCard
            data={this.props.entryData.general}
            changeFunc={this.props.changeFunc}
          />
          <SectionHeader content="Education" />
          {this.props.entryData.education.map((ed) => {
            return (
              <EditEducationCard
                key={ed.id}
                data={ed}
                changeFunc={this.props.changeFunc}
              />
            )
          })}
          <AddButton changeFunc={this.props.changeFunc} section="education" />
          <SectionHeader content="Experience" />
          {this.props.entryData.experience.map((ex) => {
            return (
              <EditExperienceCard
                key={ex.id}
                data={ex}
                changeFunc={this.props.changeFunc}
              />
            )
          })}
          <AddButton changeFunc={this.props.changeFunc} section="experience" />
        </div>
      </div>
    )
  }
}

EditScreen.propTypes = {
  entryData: PropsTypes.any,
  changeFunc: PropsTypes.func,
  className: PropsTypes.string,
}
