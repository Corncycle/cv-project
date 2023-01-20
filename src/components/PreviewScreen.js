import React from 'react'
import PropsTypes from 'prop-types'

export class PreviewScreen extends React.Component {
  render() {
    return (
      <div className={'information-panel flex ' + this.props.className}>
        <div className="paper-container flex">
          <span>======= PREVIEW SCREEN!!! ==========</span>
          <span>
            General:
            <span>{this.props.entryData.general.name}</span>
          </span>
        </div>
      </div>
    )
  }
}

PreviewScreen.propTypes = {
  entryData: PropsTypes.any,
  className: PropsTypes.string,
}
