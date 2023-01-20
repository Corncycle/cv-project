import React from 'react'
import PropsTypes from 'prop-types'
import { PreviewEducationCard } from './preview-components/PreviewEducationCard'
import { PreviewExperienceCard } from './preview-components/PreviewExperienceCard'
import { PreviewGeneral } from './preview-components/PreviewGeneral'
import { PreviewSectionHeader } from './preview-components/PreviewSectionHeader'

export class PreviewScreen extends React.Component {
  render() {
    return (
      <div className={'information-panel flex ' + this.props.className}>
        <div className="paper-container paper-preview flex">
          <PreviewGeneral data={this.props.entryData.general} />
          <PreviewSectionHeader content="Education" />
          {this.props.entryData.education.map((ed) => {
            return <PreviewEducationCard key={ed.id} data={ed} />
          })}
          <PreviewSectionHeader content="Experience" />
          {this.props.entryData.experience.map((ex) => {
            return <PreviewExperienceCard key={ex.id} data={ex} />
          })}
        </div>
      </div>
    )
  }
}

PreviewScreen.propTypes = {
  entryData: PropsTypes.any,
  className: PropsTypes.string,
}
