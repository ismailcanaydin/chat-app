import React from 'react'

import ChatList from './ChatList.js';
import ChatForm from './ChatForm.js';
 
function Container() {
  return (
    <div className='App'>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container