import React, {useState} from 'react';
import './App.css';
import MessageBox from '../MessageBox/MessageBox';
import Commands from '../Commands/Commands';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Util from '../util/util.js';

//sound stuff
import useSound from 'use-sound';

import helloAudio from '../Audio_clips/Hello.mp3'
import lightsOffAudio from '../Audio_clips/LightsOff.mp3';
import lightsOnAudio from '../Audio_clips/LightsOn.mp3';

function App() {
  const [messages, setMessages] = useState([
  {person:"AI", message:"Hello my name is Mossimo your virtual assistant. How may I help you today."}]);
  

  const [playHello] = useSound(helloAudio)
  const [playLightsOff] = useSound(lightsOffAudio)
  const [playLightsOn] = useSound(lightsOnAudio)

  // useEffect(() => {
  //   Util.getLights();
  // }, [])

  const commands = [
    {
      command: 'turn off (the) (lights) (light)',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turning off the lights"}])
        playLightsOff();
        Util.togglePower()
      }
    },
    {
      command: 'turn the (lights) (light) off',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turning off the lights"}])
        playLightsOff();
        Util.togglePower();
      }
    },
    {
      command: 'turn the (lights) (light) on',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turning on the lights"}])
        playLightsOn();
        Util.togglePower()
      }
    },
    {
      command: 'turn on (the) (lights) (light)',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ok. Turning on the lights"}])
        playLightsOn();
        Util.togglePower();
      }
    },
    {
      command: 'Hello (Mossimo)',
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Ciao senori! My name is Mossimo your personal assistant."}])
        playHello();
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
    {
      command: "intruder alert",
      callback: () => {
        setMessages([...messages, {person: "AI", message: "Activating Strobe"}])
        Util.intruderAlert();
      }
    }
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  const startRecognition = () => {
    SpeechRecognition.startListening();
    console.log("listening");
  };

  const stopRecognition = () => {
    SpeechRecognition.stopListening();
    console.log("stopped listening");
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
