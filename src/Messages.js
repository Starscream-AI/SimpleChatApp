import React, { Component } from 'react'

class Messages extends Component {
  createMessages = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createMessages)

    return <ul className="Messages">{listItems}</ul>
  }
}

export default Messages
