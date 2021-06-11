import React from 'react'
import Message from './Message';
import '../App.css';

const MessageList = ({ title, messages, clearMessage}) => {

  return (
    <div>
      <h1>{title}</h1>
      <div>Count: {messages.length}</div>
      <div className="messages-list">
        {
          messages.reverse().map((message) => <Message clearMessage={clearMessage} key={message.id} {...message} />)
        }
      </div>
    </div>

  )

}

export default MessageList
