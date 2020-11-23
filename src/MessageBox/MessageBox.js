import React from 'react';
import './MessageBox.css'
import AssistantText from '../AssistantText/AssistantText'
import UserText from '../UserText/UserText';

function MessageBox(props) {
    return (
        <div className="chat">
            <div className="contact bar">
                <div className="pic mossimo"></div>
                <div className="name">
                    Mossimo
                </div>
                <div className="seen">
                    Today
                </div>
            </div>
            <div className="messages" id="chat">
                <div className="time">
                    {new Date().toLocaleString()}
                </div>
                {
                    props.messages.map((message) => {
                        if (message.person === "AI") {
                            return <AssistantText message={message.message}/>
                        } else {
                            return <UserText message={message.message}/>
                        }
                    })
                }
            </div>
            <div className="VoiceButton">
                <button className="audioButton" onMouseDown={props.startRecog} onMouseUp={props.stopRecog} >Hold to Speak</button>
            </div>
        </div>
    )
}

export default MessageBox;