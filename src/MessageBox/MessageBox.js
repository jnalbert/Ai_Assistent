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
                    Time/Date
                </div>
            </div>
            <div className="messages" id="chat">
                <div className="time">
                    Today at 11:41
                </div>
                <AssistantText message="test"/>
                <UserText message="shting"/>
                <AssistantText message="hello shting"/>
                <UserText message="you are a shintg"/>
                <div className="message stark">
                    <div className="typing typing-1"></div>
                    <div className="typing typing-2"></div>
                    <div className="typing typing-3"></div>
                </div>
            </div>
            <div className="input">
                <i className="fas fa-camera"></i><i className="far fa-laugh-beam"></i><input placeholder="Type your message here!" type="text" /><i className="fas fa-microphone"></i>
            </div>
        </div>
    )
}

export default MessageBox; 