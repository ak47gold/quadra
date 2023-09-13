import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const WebSocketClient = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const number = parseInt(event.data, 10);
      dispatch({ type: 'ADD_NUMBER', payload: number });
    };
    

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return null;
};

export default WebSocketClient;