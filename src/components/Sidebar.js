import React from 'react'
import PropTypes from 'prop-types'
import { ToggleButton } from './ToggleButton'

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <h3 className="sidebar-title">
          {'Preview mode ' + (this.props.previewing ? 'enabled' : 'disabled')}
        </h3>
        <ToggleButton toggleFunc={this.props.toggleFunc} />
      </div>
    )
  }
}

Sidebar.propTypes = {
  toggleFunc: PropTypes.func,
  previewing: PropTypes.bool,
}
