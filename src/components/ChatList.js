import styles from './styles.module.css';

import { useChat } from '../context/ChatContext.js';
import ChatItem from './ChatItem.js';

function ChatList() {
  const { messages } = useChat();

  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item, key) => (

          <ChatItem key={key} item={item} />
        ))}
      </div>

    </div>
  );

}

export default ChatList;