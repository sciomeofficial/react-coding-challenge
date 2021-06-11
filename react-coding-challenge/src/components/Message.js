import React from 'react'

const Message = ({ message, id, priority, clearMessage }) => {
  return (
    <div
      className={`message-item priority-${priority} fadeIn`}
      onClick={() => clearMessage(id)}
    >
      <div>
      {
        message
      }
      </div>
      <button>Clear</button>
    </div>
  );
}



export default Message;
