import React from 'react';
import './Commands.css';

function Commands() {
    return (
        <div>
            <div className="contacts">
            <i className="fas fa-bars fa-2x"></i>
            <h2>
                Contacts
            </h2>
            <div className="contact">
                <div className="pic rogers"></div>
                <div className="badge">
                14
                </div>
                <div className="name">
                Steve Rogers
                </div>
                <div className="message">
                That is America's ass 🇺🇸🍑
                </div>
            </div>
            <div className="contact">
                <div className="pic stark"></div>
                <div className="name">
                Tony Stark
                </div>
                <div className="message">
                Uh, he's from space, he came here to steal a necklace from a wizard.
                </div>
            </div>
            <div className="contact">
                <div className="pic banner"></div>
                <div className="badge">
                1
                </div>
                <div className="name">
                Bruce Banner
                </div>
                <div className="message">
                There's an Ant-Man *and* a Spider-Man?
                </div>
            </div>
            <div className="contact">
                <div className="pic thor"></div>
                <div className="name">
                Thor Odinson
                </div>
                <div className="badge">
                3
                </div>
                <div className="message">
                I like this one
                </div>
            </div>
            <div className="contact">
                <div className="pic danvers"></div>
                <div className="badge">
                2
                </div>
                <div className="name">
                Carol Danvers
                </div>
                <div className="message">
                Hey Peter Parker, you got something for me?
                </div>
            </div>
            </div>
        </div>
    )
}

export default Commands;