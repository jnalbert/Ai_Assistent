import React from 'react';
import './App.css';
import MessageBox from '../MessageBox/MessageBox';
import Commands from '../Commands/Commands';
import {useState, useEffect} from 'react';


function App() {
  const [messages, setMessages] = useState([
  {person: "User", message: "please turn off the lights"},
  {person:"AI", message:"You are a shting"},
  {person: "User", message: "Sgt Shting responds"},
  {person: "AI", message: "Louis is myu friemnd"},
  {person: "AI", message: "you are ashitng who does not undersatnd map"}]);

  useEffect(() => {
    setMessages([...messages, {person: "AI", message: "test"}])
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  // setMessages(...messages, {person: "AI", message: "This is a test of setMessages"});

  return (
    <div className="center">
    <Commands/>
    <MessageBox messages={messages}/>
  </div>
  );
}

export default App;
