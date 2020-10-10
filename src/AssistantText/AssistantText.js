import React from 'react';
import './AssistantText.css';

function AssistantText (props) {
    return (
            <div className="message assistant">
                {props.message}
            </div>
        )
}

export default AssistantText;