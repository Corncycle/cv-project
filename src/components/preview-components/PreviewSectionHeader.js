import React from 'react'
import PropTypes from 'prop-types'

export class PreviewSectionHeader extends React.Component {
  render() {
    return <div className="pre-section-header">{this.props.content}</div>
  }
}

PreviewSectionHeader.propTypes = {
  content: PropTypes.string,
}
