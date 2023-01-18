import React from 'react'
import { Topbar } from './components/Topbar'
import { EditScreen } from './components/EditScreen'
import { PreviewScreen } from './components/PreviewScreen'
import { Sidebar } from './components/Sidebar'
import produce from 'immer'

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.currId = 0
    this.genId = this.genId.bind(this)
    this.setAppState = this.setAppState.bind(this)
    this.deleteCard = this.deleteCard.bind(this)

    this.state = {
      entryData: {
        general: {
          name: '',
          phone: '',
          email: '',
        },
        education: [{ a: 'A', id: this.genId() }],
        experience: [],
      },
    }
  }

  setAppState(command, location, sublocation, value) {
    if (command === 'delete') {
      this.deleteCard(location)
    } else if (command === 'add') {
      console.log('we want to add a new ' + location)
    } else if (command === 'change') {
      console.log(
        'we want to change ' + sublocation + ' in ' + location + ' to ' + value
      )
    } else {
      throw new Error('Unaccounted for command: ' + command)
    }
  }

  deleteCard(location) {
    const [section, id] = location.split('-')
    let i = 0
    while (this.state.entryData[section][i].id !== id) {
      i += 1
    }
    const newState = produce(this.state, (draftState) => {
      draftState.entryData.education = draftState.entryData.education
        .slice(0, i)
        .concat(draftState.entryData.education.slice(i + 1))
    })
    this.setState(newState)
  }

  genId() {
    this.currId += 1
    return this.currId.toString()
  }

  render() {
    return (
      <div className="app-container">
        <Topbar />
        <div className="content-container">
          <EditScreen
            entryData={this.state.entryData}
            changeFunc={this.setAppState}
          />
          <PreviewScreen />
          <Sidebar />
        </div>
      </div>
    )
  }
}
