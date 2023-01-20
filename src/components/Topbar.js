import React from 'react'
import cvImage from '../images/cv-image.svg'

export class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar-container">
        <img className="topbar-image" src={cvImage} />
        <span className="topbar-header">CV App</span>
      </div>
    )
  }
}
