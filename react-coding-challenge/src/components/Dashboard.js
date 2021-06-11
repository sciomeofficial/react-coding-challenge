import React, { useState, useEffect, useRef } from 'react'
import Api from '../api';
import MessageList from './MessageList';
import '../App.css';

const Dashboard = () => {

  const [messages, setMessages] = useState([]);
  const stateRef = useRef()

  stateRef.current = messages

  const api = useRef(new Api({
    messageCallback: (message) => {
      messageCallback(message)
    },
  }));
  const isApiStarted = api.current.isStarted();

  useEffect(() => {
    api.current.start()
  }, []);

  const messageCallback = (message) => {
    setMessages([
      ...stateRef.current,
      message,
    ]);
  }

  const toggleStart = () => {
    if (isApiStarted) {
      api.current.stop()
    } else {
      api.current.start()
    }
    setMessages([...messages]);
  }

  const clearMessages = () => {
    setMessages([]);
  }

  const clearMessage = (id) => {
    setMessages(
      messages.filter((message) => message.id !== id)
    );
  }

  const createMessageMap = () => {
    let map = {
      1: [],
      2: [],
      3: []
    };
    messages.forEach((message) => {
      map[message.priority].push(message);
    })

    return map;
  }

  const messageMap = createMessageMap();

  return (
    <div>
      <div className="controls-container">
        <button
          onClick={toggleStart}
          className="primary-button"
        >
          {isApiStarted ? 'STOP' : 'START'}
        </button>
        <button
          className="primary-button"
          onClick={clearMessages}
        >
          CLEAR
          </button>
      </div>
      <div className="messages-container">
        <MessageList
          title="Error Type 1"
          messages={messageMap[1]}
          clearMessage={clearMessage}
        />
        <MessageList
          title="Warning Type 2"
          messages={messageMap[2]}
          clearMessage={clearMessage}
        />
        <MessageList
          title="Info Type 3"
          messages={messageMap[3]}
          clearMessage={clearMessage}
        />
      </div>
    </div >
  )

}

export default Dashboard
