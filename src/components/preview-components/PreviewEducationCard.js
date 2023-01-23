import React from 'react'
import PropTypes from 'prop-types'

export class PreviewEducationCard extends React.Component {
  render() {
    let yearString
    if (this.props.data.begin !== '' || this.props.data.end !== '') {
      yearString = this.props.data.begin + '—' + this.props.data.end
    } else {
      yearString = ''
    }

    return (
      <div className="flex-column">
        <div className="flex pre-card-top-container">
          <h3 className="pre-card-name">{this.props.data.schoolname}</h3>
          <span className="pre-card-dates">{yearString}</span>
        </div>
        <span>{this.props.data.degree}</span>
      </div>
    )
  }
}

PreviewEducationCard.propTypes = {
  data: PropTypes.object,
}
