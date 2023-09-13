"use client"
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import WebSocketClient from '../components/WebSocketClient';
import NumberDisplay from '../components/NumberDisplay';

const Home = () => (
  <Provider store={store}>
    <div className="w-screen h-screen grid items-center justify-center">
      <WebSocketClient />
      <div className="bg-bgNumbers w-80 h-20 text-center rounded-lg">
        <NumberDisplay />
      </div>
    </div>
  </Provider>
);

export default Home;
