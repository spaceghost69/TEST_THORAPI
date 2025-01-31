import { Client, IMessage } from '@stomp/stompjs';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FiChevronDown, FiChevronUp, FiTerminal, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll } from 'react-scroll';
import type { AppDispatch, RootState } from '../../thor/redux/store'; // Adjust path as needed
import FullSizeContainer from '../FullSizeContainer';
import { addMessage, addStatus, setConnected } from './websocketSlice';

// Replace with your actual environment variable or fallback:
const WS_BASE_URL = process.env.REACT_APP_WS_SERVICE_ENDPOINT || 'http://localhost:8443';

// Use these for your store-typed hooks
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector = (selector: (state: RootState) => any) => useSelector(selector);

interface ConsolePaneProps {
  callback: () => void;
}

const ConsolePane: React.FC<ConsolePaneProps> = ({ callback }) => {

  const [opened, setOpened] = useState(false);
  const [maxxed, setMaxxed] = useState(false);
  const [chatText, setChatText] = useState('');

  // We'll store our Stomp client in React state
  const [client, setClient] = useState<Client | null>(null);

  const dispatch = useAppDispatch();

  // Pull relevant data from your Redux store
  const { connected, messages, user } = useAppSelector((state: RootState) => ({
    connected: true, // state.ChatMessage.connected,
    messages: state.ChatMessage.data?.messages || [],
    user: state.Principal // or whatever your user slice is
  }));
  
  useEffect(() => {
    // We add "/chat" because in WebSocketConfig you did `registry.addEndpoint("/chat")`
    // If you are using plain WebSocket (no SockJS), use "ws://..." here.
    const socketUrl = `${WS_BASE_URL}/chat`; 

    // Create a new STOMP Client
    const stompClient = new Client({
      brokerURL: socketUrl.replace(/^http/, 'ws'), // convert http -> ws if needed
      // If you want SockJS, you'd do:
      // webSocketFactory: () => new SockJS(socketUrl),
      reconnectDelay: 5000,
      debug: (str) => {
        console.log('[STOMP DEBUG]', str);
      },
      onConnect: () => {
        console.log('Connected to STOMP');
        dispatch(setConnected(true));

        // Subscribe to broadcast messages
        stompClient.subscribe('/topic/messages', (message: IMessage) => {
          if (message && message.body) {
            const parsedMessage = JSON.parse(message.body);
            dispatch(addMessage(parsedMessage));
            scrollToBottom();
          }
        });

        // If you also broadcast statuses on /topic/statuses
        stompClient.subscribe('/topic/statuses', (statusMessage: IMessage) => {
          if (statusMessage && statusMessage.body) {
            const parsedStatus = JSON.parse(statusMessage.body);
            dispatch(addStatus(parsedStatus));
          }
        });
      },
      onDisconnect: () => {
        console.log('Disconnected from STOMP');
        dispatch(setConnected(false));
      },
      onStompError: (frame) => {
        console.error('Broker error: ' + frame.headers['message']);
        console.error('Details: ' + frame.body);
      },
    });

    stompClient.activate();
    setClient(stompClient);

    // Cleanup when the component unmounts
    return () => {
      stompClient.deactivate();
    };
  }, [dispatch]);

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'messages',
    });
  };

  const handleCommandTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatText(e.target.value);
  };

  const sendMessage = () => {
    if (!client) return;

    const from = user?.username || 'anon';
    const message = {
      from,
      text: chatText,
      type: 'chat',
    };

    // IMPORTANT: The `destination` must match your @MessageMapping in your controller
    // In your server code you have: @MessageMapping("/chat") => SendTo("/topic/messages")
    // That means you publish to "/app/chat" at runtime
    client.publish({
      destination: '/app/chat',
      body: JSON.stringify(message),
    });
    setChatText('');
  };

  const maxheight = maxxed ? window.innerHeight - 200 : '200px';

  return (
    <FullSizeContainer>
      {!opened && (
        <Button
          size="sm"
          onClick={() => setOpened(!opened)}
          aria-controls="console-collapse"
          aria-expanded={opened}
        >
          <FiChevronDown />
        </Button>
      )}

      <Card bg="info" style={{ borderRadius: 0 }}>
        <Card.Header style={{ padding: 5 }}>
          <Button
            size="sm"
            onClick={() => setMaxxed(!maxxed)}
            aria-expanded={opened}
          >
            <FiChevronUp />
          </Button>{' '}
          CONSOLE
        </Card.Header>
        <Card.Body
          id="messages"
          style={{
            backgroundColor:'#0d6efd',
            overflowY: 'scroll',
            maxHeight: maxheight,
            minHeight: maxheight,
          }}
        >
          {Array.isArray(messages) && messages.length > 0 ? (
            messages.map((msg: any, index: number) => {
              const { text, time, from, type } = msg;
              const variant = {
                error: 'danger',
                warn: 'warning',
                success: 'success',
              }[type] || 'secondary';

              return (
                <Row key={index}>
                  <Col sm={2} md={2} lg={1}>
                    <Badge bg={variant}>{type}</Badge>
                  </Col>
                  <Col sm={2} md={1} lg={1}>
                    {time}
                  </Col>
                  <Col sm={2} md={3} lg={2}>
                    {from}
                  </Col>
                  <Col sm={6} md={6} lg={8}>
                    {text}
                  </Col>
                </Row>
              );
            })
          ) : (
            <div style={{ color: 'white' }}>No messages available.</div>
          )}
        </Card.Body>
        <Card.Footer style={{ maxHeight: '25px', padding: 0 }}>
          <Row>
            <Col>
              {!connected ? (
                <Button
                  style={{ minWidth: '100%' }}
                  variant="success"
                  size="sm"
                  onClick={() => client?.activate()}
                >
                  <FiToggleRight size={20} />
                </Button>
              ) : (
                <Button
                  style={{ minWidth: '100%' }}
                  variant="danger"
                  size="sm"
                  onClick={() => client?.deactivate()}
                >
                  <FiToggleLeft size={20} />
                </Button>
              )}
            </Col>
            <Col>
              <Form.Control
                type="text"
                value={chatText}
                onChange={handleCommandTextChange}
              />
            </Col>
            <Col>
              {connected && (
                <Button
                  style={{ minWidth: '100%' }}
                  variant="success"
                  size="sm"
                  onClick={sendMessage}
                >
                  <FiTerminal size={20} />
                </Button>
              )}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </FullSizeContainer>
  );
};

export default ConsolePane;
