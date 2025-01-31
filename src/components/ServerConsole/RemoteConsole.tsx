import { useSelector } from 'react-redux';

const RemoteConsole = () => {
  const messages = useSelector((state: { websocket: { messages: { type: string, time: string, from: string, text: string }[] } }) => state.websocket.messages);

  return (
    <div className="console">
      {messages.map((message, index) => (
        <div key={index} className={`console-message ${message.type}`}>
          <span className="console-time">{message.time}</span>
          <span className="console-from">{message.from}</span>
          <span className="console-text">{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default RemoteConsole;
