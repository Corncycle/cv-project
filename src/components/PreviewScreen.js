import React from 'react'
import PropsTypes from 'prop-types'

export class PreviewScreen extends React.Component {
  render() {
    return (
      <div>
        <span>======= PREVIEW SCREEN!!! ==========</span>
        <span>
          General:
          <span>{this.props.entryData.general.name}</span>
        </span>
      </div>
    )
  }
}

PreviewScreen.propTypes = {
  entryData: PropsTypes.any,
}
