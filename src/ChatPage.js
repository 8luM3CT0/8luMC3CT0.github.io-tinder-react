import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./ChatPage.css"

function ChatPage() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Bruce Wayne',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg/330px-Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg',
            message: 'Here I am'
        },
        {
            name: 'Bruce Wayne',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg/330px-Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg',
            message: 'Honestly did this cause I was bored'
        },
        {
            message: 'Hello there! Hope you get that reference.'
        },
        {
            message: "You're not the only one, Bruce"
        },
        {
            name: 'Bruce Wayne',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg/330px-Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg',
            message: 'Do what ?'
        }
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

export default ChatPage
