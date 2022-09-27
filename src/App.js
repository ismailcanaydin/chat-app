import "./App.css";
import Container from "./components/Container";
import { ChatProvider } from "./context/ChatContext.js";

function App() {
	return (
      <ChatProvider>
          <Container />
      </ChatProvider>
	);
}

export default App;
