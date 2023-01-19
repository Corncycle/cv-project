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
    this.changeData = this.changeData.bind(this)

    this.state = {
      entryData: {
        general: {
          name: '',
          phone: '',
          email: '',
        },
        education: [],
        experience: [],
      },
    }
  }

  setAppState(command, location, sublocation, value) {
    if (command === 'delete') {
      this.deleteCard(location)
    } else if (command === 'add') {
      this.addCard(location)
    } else if (command === 'change') {
      this.changeData(location, sublocation, value)
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
      draftState.entryData[section] = draftState.entryData[section]
        .slice(0, i)
        .concat(draftState.entryData[section].slice(i + 1))
    })
    this.setState(newState)
  }

  addCard(location) {
    const newState = produce(this.state, (draftState) => {
      let emptyCard
      if (location === 'education') {
        emptyCard = {
          schoolname: '',
          degree: '',
          begin: '',
          end: '',
          id: this.genId(),
        }
      } else if (location === 'experience') {
        emptyCard = {
          company: '',
          position: '',
          responsibilities: '',
          begin: '',
          end: '',
          id: this.genId(),
        }
      } else {
        throw new Error('Unknown location: ' + location)
      }
      draftState.entryData[location].push(emptyCard)
    })
    this.setState(newState)
  }

  changeData(location, sublocation, value) {
    const newState = produce(this.state, (draftState) => {
      let loc
      if (location === 'general') {
        loc = draftState.entryData.general
      } else {
        const [section, id] = location.split('-')
        let i = 0
        while (draftState.entryData[section][i].id !== id) {
          i += 1
        }
        loc = draftState.entryData[section][i]
      }
      loc[sublocation] = value
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
          <PreviewScreen entryData={this.state.entryData} />
          <Sidebar />
        </div>
      </div>
    )
  }
}
