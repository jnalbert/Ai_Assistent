import React from 'react';
import './App.css';
import MessageBox from '../MessageBox/MessageBox';
import Commands from '../Commands/Commands';

function App() {
  return (
    <div className="center">
    <Commands/>
    <MessageBox/>
  </div>
  );
}

export default App;
