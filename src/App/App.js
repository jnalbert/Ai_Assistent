import React, {useState} from 'react';
import './App.css';
import MessageBox from '../MessageBox/MessageBox';
import Commands from '../Commands/Commands';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function App() {
  const [messages, setMessages] = useState([
  {person:"AI", message:"Hello my name is Mossimo your virtual assistant. How may I help you today."}]);

  

  const commands = [
    {
      command: 'turn off (the) (lights) (light)',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turing off the lights"}])
      }
    },
    {
      command: 'turn the (lights) (light) off',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turing off the lights"}])
      }
    },
    {
      command: 'turn the (lights) (light) on',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turing on the lights"}])
      }
    },
    {
      command: 'turn on (the) (lights) (light)',
      callback: (food) => {
        setMessages([...messages, {person: "AI", message: "Ok. Turing on the lights"}])
      }
    },
    {
      command: 'Hello (Mossimo)',
      callback: (food) => {
        setMessages([...messages, {person: "AI", message: "Hi there!"}])
      }
    },
    {
      command: 'Turn on the (Green Egg) (Green Eggs)',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turning on the Green Egg"}])
      }
    },
    {
      command: 'get my kid into USC',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. I will set up a fake photo shoot and hide your assets"}])
      }
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  const startRecognition = () => {
    SpeechRecognition.startListening();
    console.log("listening");
  };

  const stopRecognition = () => {
    SpeechRecognition.stopListening();
    console.log("stoped listengin");
    setMessages([...messages, {person: "User", message:transcript}])
    resetTranscript();
  }

  // setMessages(...messages, {person: "AI", message: "This is a test of setMessages"});

  return (
    <div className="center">
    <Commands/>
    <MessageBox stopRecog={stopRecognition} startRecog={startRecognition} messages={messages}/>
  </div>
  );
}

export default App;
