import React, { Component } from 'react'

class Input extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="Input">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Message"
              ref={this.props.inputElement}
              value={this.props.selectedMessage.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Message </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Input
