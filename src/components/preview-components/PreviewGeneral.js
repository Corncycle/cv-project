import React from 'react'
import PropTypes from 'prop-types'

export class PreviewGeneral extends React.Component {
  constructor(props) {
    super(props)

    this.date = new Date()
  }

  render() {
    return (
      <div className="flex-column pre-general-container">
        <div className="flex pre-general-top-container">
          <h1 className="pre-general-name">{this.props.data.name}</h1>
          <span className="pre-general-update">
            Updated{' '}
            {this.date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
        <span className="pre-general-subtitle">{this.props.data.phone}</span>
        <span className="pre-general-subtitle">{this.props.data.email}</span>
      </div>
    )
  }
}

PreviewGeneral.propTypes = {
  content: PropTypes.string,
  data: PropTypes.object,
}
