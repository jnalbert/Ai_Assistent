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

const speechSynthesis = window.speechSynthesis;
const speaker = new SpeechSynthesisUtterance();
speaker.lang = "en-US";


function App() {

  const [key, setKey] = useState(1);
  const [messages, setMessages] = useState([
  {person:"AI", message:"Hello my name is JARVIS your virtual assistant. How may I help you today.", key: 0}]);
  
  

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
        const words = "Ok. Turning off the lights";
        makeMessage("AI", words);

        playLightsOff();
        Util.togglePower()
      }
    },
    {
      command: 'turn the (lights) (light) off',
      callback: () => {
        const words = "Ok. Turning off the lights";
        makeMessage("AI", words);

        playLightsOff();
        Util.togglePower();
      }
    },
    {
      command: 'turn the (lights) (light) on',
      callback: () => {
        const words = "Ok. Turning on the lights";
        makeMessage("AI", words);

        playLightsOn();
        Util.togglePower()
      }
    },
    {
      command: 'turn on (the) (lights) (light)',
      callback: () => {
        const words = "Ok. Turning on the lights";
        makeMessage("AI", words);
        playLightsOn();
        Util.togglePower();
      }
    },
    {
      command: 'Hello (Mossimo)',
      callback: () => {
        const words = "Hello! My name is JARVIS your personal assistant.";
        makeMessage("AI", words);

        playHello();
      }
    },
    {
      command: 'Turn on the (Green Egg) (Green Eggs)',
      callback: () => {
        const words = "Ok. Turning on the Green Egg";
        makeMessage("AI", words);
      }
    },
    {
      command: 'get my kid into USC',
      callback: () => {
        const words = "Ok. I will set up a fake photo shoot and hide your assets";
        makeMessage("AI", words);
      }
    },
    {
      command: "intruder alert",
      callback: () => {
        const words = "Activating Strobe";
        makeMessage("AI", words);

        speaker.text = words;
        speechSynthesis.speak(speaker);
        Util.intruderAlert();
      }
    },
    {
      command: "My name is *",
      callback: (name) => {
        const words = `Hello ${name} how are you doing today`;
        makeMessage("AI", words);
        
        speaker.text = words;
        speechSynthesis.speak(speaker);
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
    makeMessage("User", transcript);
    // setMessages([...messages, {person: "User", message:transcript}])
    resetTranscript();
  }

  // makes a message with the arguments give
  const makeMessage = (user, message) => {
    setMessages([...messages, {person: user, message: message, key: key}])
    setKey(key + 1);
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
