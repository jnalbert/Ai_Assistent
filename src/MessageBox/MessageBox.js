import React from 'react';
import './MessageBox.css'
import AssistantText from '../AssistantText/AssistantText'
import UserText from '../UserText/UserText';

function MessageBox({messages, startRecog, stopRecog}) {
    return (
        <div className="chat">
            <div className="contact bar">
                <div className="pic mossimo"></div>
                <div className="name">
                    JARVIS
                </div>
            </div>
            <div className="messages" id="chat">
                <div className="time">
                    {new Date().toLocaleString()}
                </div>
                {
                    messages.map(({person, message, key}) => {
                        if (person === "AI") {
                            return <AssistantText message={message} key={key}/>
                        } else {
                            return <UserText message={message} key={key}/>
                        }
                    })
                }
            </div>
            <div className="VoiceButton">
                <button className="audioButton" onMouseDown={startRecog} onMouseUp={stopRecog} >Hold to Speak</button>
            </div>
        </div>
    )
}

export default MessageBox;