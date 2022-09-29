import { useEffect } from 'react';

import ChatList from './ChatList.js';
import ChatForm from './ChatForm.js';
import { useChat } from '../context/ChatContext.js';

import { init, subscribeChat, subscribeInitialMessages } from '../socketApi.js';

function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => {
      setMessages(messages)
    })

    subscribeChat((message) => {
      setMessages(prevState => [...prevState, { message }]);
    });
  }, []);

  return (
    <div className='App'>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container