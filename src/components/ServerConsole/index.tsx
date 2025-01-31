import * as StompJs from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  Row
} from 'react-bootstrap';
import { FiTerminal, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { animateScroll } from 'react-scroll';
import type { AppDispatch, RootState } from '../../thor/redux/store'; // Adjust to your store
import { addMessage, addStatus, setConnected } from './websocketSlice'; // Ensure these actions are correct

const { Client } = StompJs;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const socketUrl = 'ws://localhost:8443/app/chat';
const stompClient = new Client({
  brokerURL: socketUrl,
  reconnectDelay: 5000,
  onConnect: () => {
    console.log('Connected to WebSocket');
  },
  onDisconnect: () => {
    console.log('Disconnected from WebSocket');
  },
  onStompError: (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
  },
});

stompClient.activate();

const ServerConsole = () => {
  const [maxxed, setMaxxed] = useState(false);
  const [chatText, setChatText] = useState('');
  const dispatch = useDispatch();

  // Adjust your selectors based on your actual state shape.
  // Here we assume ChatMessage reducer has a `messages` array.
  const { connected, messages, user } = useSelector((state: RootState) => ({
    connected: true,
    messages: state.ChatMessage,
    responses: state.ChatResponse,
    user: state.Principal
  }));

  useEffect(() => {
    const socketUrl = process.env.REACT_APP_SG_WS_SERVICE_ENDPOINT + '/chat';
    const stompClient = new Client({
      brokerURL: socketUrl,
      reconnectDelay: 5000,
      onConnect: () => {
        dispatch(setConnected(true));
        stompClient.subscribe('/topic/messages', (message) => {
          const parsedMessage = JSON.parse(message.body);
          dispatch(addMessage(parsedMessage));
          scrollToBottom();
        });
        stompClient.subscribe('/topic/statuses', (status) => {
          const parsedStatus = JSON.parse(status.body);
          dispatch(addStatus(parsedStatus));
        });
      },
      onDisconnect: () => {
        dispatch(setConnected(false));
      },
      onStompError: (frame) => {
        console.error('Broker error: ' + frame.headers['message']);
        console.error('Details: ' + frame.body);
      },
    });

    stompClient.activate();

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
    const from = 'anon';
    const message = {
      from,
      text: chatText,
      type: 'chat',
    };
    stompClient.publish({
      destination: '/app/chat',
      body: JSON.stringify(message),
    });
    setChatText('');
  };

  const maxheight = maxxed ? window.innerHeight - 200 : '200px';

  return (

    <Card bg="primary" style={{ borderRadius: 0 }}>
      <Card.Header style={{ padding: 5 }}>
        VALKYRAI CONSOLE
      </Card.Header>
      <Card.Body
        id="messages"
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          overflowY: 'scroll',
          maxHeight: maxheight,
          minHeight: maxheight,
        }}
      >
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message: any, index: number) => {
            const { text, time, from, type } = message;
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
          <Col lg={1} md={2} sm={2} xs={2}>
            {!connected ? (
              <Button
                style={{ minWidth: '100%' }}
                variant="success"
                size="sm"
                onClick={() => stompClient.activate()}
              >
                <FiToggleRight size={20} />
              </Button>
            ) : (
              <Button
                style={{ minWidth: '100%' }}
                variant="danger"
                size="sm"
                onClick={() => stompClient.deactivate()}
              >
                <FiToggleLeft size={20} />
              </Button>
            )}
          </Col>
          <Col lg={10} md={9} sm={8} xs={8}>
            <Form.Control
              type="text"
              value={chatText}
              onChange={handleCommandTextChange}
            />
          </Col>
          <Col lg={1} md={1} sm={2} xs={2}>
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

  );
};

export default ServerConsole;
