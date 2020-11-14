import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./ChatPage2.css"

function ChatPage2() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Carol Danvers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Captain_Marvel_trailer_at_the_National_Air_and_Space_Museum_4_%28cropped%29.jpg/330px-Captain_Marvel_trailer_at_the_National_Air_and_Space_Museum_4_%28cropped%29.jpg',
            message: 'Hello there hehehehe'
        },
        {
            message: 'General Kenobi! Hope you get that reference.'
        },
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatPage">
            <p className="chatPage__timestamp">YOU MATCHED WITH BRUCE ON 10/20/2020</p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatPage__message">
                        <Avatar 
                        className="chatPage__image"
                        alt={message.name}
                        src={message.image}
                        />
                        <p className="chatPage__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatPage__message">
                        <p className="textUser">{message.message}</p>
                    </div>
                )
            )
        }
            <form className="input">
                <input
                value={input}
                onChange={e => setInput(e.target.value)} 
                className="inputField" 
                type="text" 
                placeholder="send a message....."/>
                <button onClick={handleSend} type="submit" className="input__btn">SEND</button>
            </form>
        </div>
    )
}

export default ChatPage2
