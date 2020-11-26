import React, {useEffect, useRef} from 'react';
import './MessageBox.css'
import AssistantText from '../AssistantText/AssistantText'
import UserText from '../UserText/UserText';

function MessageBox({messages, startRecog, stopRecog}) {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"})
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])
    
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
                <div className="messageWrapper">
                    {
                        messages.map(({person, message, key}) => {
                            if (person === "AI") {
                                return <AssistantText message={message} key={key}/>
                            } else {
                                return <UserText message={message} key={key}/>
                            }
                        })
                    }
                    <div ref={messagesEndRef}/>
                </div>
            </div>
            <div className="VoiceButton">
                <button className="audioButton" onMouseDown={startRecog} onMouseUp={stopRecog} >Hold to Speak</button>
            </div>
        </div>
    )
}

export default MessageBox;