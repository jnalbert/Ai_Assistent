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
                <div className="message stark">
                    <div className="typing typing-1"></div>
                    <div className="typing typing-2"></div>
                    <div className="typing typing-3"></div>
                </div>
            </div>
            <div className="VoiceButton">
                <button className="audioButton">Click Me</button>
            </div>
        </div>
    )
}

export default MessageBox;