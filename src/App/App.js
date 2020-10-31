import React, {useState} from 'react';
import './App.css';
import MessageBox from '../MessageBox/MessageBox';
import Commands from '../Commands/Commands';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function App() {
  const [messages, setMessages] = useState([
  {person:"AI", message:"Hello my name is Mossimo your virtual assistant. How may I help you today."}]);

  // useEffect(() => {
  //   setMessages([...messages, {person: "AI", message: "test"}])
  //  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

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
      callback: (food) => {
        setMessages([...messages, {person: "AI", message: "Ok. Turing on the Green Egg"}])
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

// //TTS

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');
// Creates a client
const client = new textToSpeech.TextToSpeechClient();
async function quickStart() {
  // The text to synthesize
  const text = 'My name is Massimo, your personal assistant!';

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'it-IT', name: 'it-IT-Wavenet-C'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
}
quickStart();

export default App;
