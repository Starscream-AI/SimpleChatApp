import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Messages from './Messages'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      Thread: [],
      selectedMessage: {
        text: '',
        timeStamp: '',
      },
    }
  }
  deleteItem = timeStamp => {
    const filteredItems = this.state.Thread.filter(item => {
      return item.timeStamp !== timeStamp
    })
    this.setState({
      Thread: filteredItems,
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const selectedMessage = { text: itemText, timeStamp: Date.now() }
    this.setState({
      selectedMessage,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.selectedMessage
    if (newItem.text !== '') {
      const Thread = [...this.state.Thread, newItem]
      this.setState({
        Thread: Thread,
        selectedMessage: { text: '', timeStamp: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Input
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          selectedMessage={this.state.selectedMessage}
        />
        <Messages entries={this.state.Thread} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
