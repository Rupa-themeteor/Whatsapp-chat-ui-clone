import React from 'react';
import './ChatItem.css';

const ChatItem = ({ avatar, name, lastMessage, time }) => {
  return (
    <div className="container">
      <img src={avatar} alt={name} className="avatar" />
      <div className="content">
        <div className="topRow">
          <span className="name">{name}</span>
          <div className="rightSideColumn">
            <span className="time">{time}</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
        <div className="bottomRow">
          <span className="lastMessage">{lastMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
