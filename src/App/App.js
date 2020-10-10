import React from 'react';
import './App.css';
import MessageBox from '../MessageBox/MessageBox';
import Commands from '../Commands/Commands';
// import {useState} from 'react';

function App() {
  // const [messages, setMessages] = useState([{}, {}, {}, {}]);


  return (
    <div className="center">
    <Commands/>
    <MessageBox/>
  </div>
  );
}

export default App;
