import React from 'react';
import './AssistantText.css';

function AssistantText ({message}) {
    return (
            <div className="message assistant">
                {message}
            </div>
        )
}

export default AssistantText;