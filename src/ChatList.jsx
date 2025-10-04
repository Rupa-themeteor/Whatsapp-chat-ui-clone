import React, { useState } from 'react';
import ChatItem from './ChatItem';

const sampleChats = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Jessica Koel',
    lastMessage: 'Hey, Joel, I here to help you out please ...',
    time: '11:26',
    isStarred: true,
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Komeial Bolger',
    lastMessage: 'I will send you all documents as soon a...',
    time: '12:26',
    isStarred: true,
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Tamaara Suiale',
    lastMessage: 'Are you going to business trip next week',
    time: '8:26',
    isStarred: false,
  },
  {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Sam Nielson',
    lastMessage: 'I suggest to start new business soon',
    time: '7:16',
    isStarred: true,
  },
  {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Caroline Nexon',
    lastMessage: 'We need to start new research center.',
    time: '9:26',
    isStarred: true,
  },
  {
    id: 6,
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Patrick Koeler',
    lastMessage: 'May be yes',
    time: '3:26',
    isStarred: true,
  },
];

const ChatList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChats = sampleChats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.list}>
        {filteredChats.map(chat => (
          <ChatItem
            key={chat.id}
            avatar={chat.avatar}
            name={chat.name}
            lastMessage={chat.lastMessage}
            time={chat.time}
            isStarred={chat.isStarred}
          />
        ))}
      </div>
      <div style={styles.playButton}>&#9658;</div>
    </div>
  );
};

const styles = {
  container: {
    width: 320,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
  },
  searchInput: {
    width: '100%',
    padding: '8px 12px',
    marginBottom: 10,
    borderRadius: 8,
    border: '1px solid #ddd',
    fontSize: 14,
    outline: 'none',
  },
  list: {
    maxHeight: 360,
    overflowY: 'auto',
    backgroundColor: '#fff',
    borderRadius: 12,
    boxShadow: 'inset 0 0 5px #eee',
  }
};

export default ChatList;
