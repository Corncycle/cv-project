import React from 'react'
import PropTypes from 'prop-types'

export class PreviewEducationCard extends React.Component {
  render() {
    return (
      <div className="flex-column">
        <div className="flex pre-card-top-container">
          <h3 className="pre-card-name">{this.props.data.schoolname}</h3>
          <span className="pre-card-dates">
            {this.props.data.begin + '—' + this.props.data.end}
          </span>
        </div>
        <span>{this.props.data.degree}</span>
      </div>
    )
  }
}

PreviewEducationCard.propTypes = {
  data: PropTypes.object,
}
