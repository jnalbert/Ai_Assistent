import React from 'react';
import './UserText.css';

function UserText(props) {
    return (
        <div className="message user">
            {props.message}
        </div>
    )
}

export default UserText;