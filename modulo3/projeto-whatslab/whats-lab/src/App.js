import './App.css';
import React from 'react';
import ChatWindow from './components/ChatWindow';
import HeaderComponent from './components/HeaderComponent';

export default () => {
  return (
  <div className='app-window'>
    <HeaderComponent />
    <div className='content-area'>
    
    <ChatWindow />
    
    </div>


  </div>
  )
}
