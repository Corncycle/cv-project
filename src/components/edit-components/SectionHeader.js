import React from 'react'
import PropTypes from 'prop-types'

export class SectionHeader extends React.Component {
  render() {
    return <h2 className="section-header-title">{this.props.content}</h2>
  }
}

SectionHeader.propTypes = {
  content: PropTypes.string,
}
