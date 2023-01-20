import React from 'react'
import PropTypes from 'prop-types'

export class PreviewExperienceCard extends React.Component {
  render() {
    return (
      <div className="flex-column">
        <div className="flex pre-card-top-container">
          <h3 className="pre-card-name">{this.props.data.company}</h3>
          <span className="pre-card-dates">
            {this.props.data.begin + '—' + this.props.data.end}
          </span>
        </div>
        <span className="pre-card-subtitle">{this.props.data.position}</span>
        <span>{this.props.data.responsibilities}</span>
      </div>
    )
  }
}

PreviewExperienceCard.propTypes = {
  data: PropTypes.object,
}
