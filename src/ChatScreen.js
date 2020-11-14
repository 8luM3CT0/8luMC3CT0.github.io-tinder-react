import React from 'react'
import './ChatScreen.css'
import Chat from './Chat';

function ChatScreen() {
    return (
        <div className="chatScreen">
        <Chat 
        name="Bruce Wayne"
        message="Test code for chat"
        timestamp="50 seconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg/330px-Robert_Pattinson_Premiere_of_The_Lost_City_of_Z_at_Zoo_Palast_Berlinale_2017_02.jpg"
        />
        <Chat 
        name="Carol Danvers"
        message="I have no idea how to use this. But it's fun. I think"
        timestamp="30 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Captain_Marvel_trailer_at_the_National_Air_and_Space_Museum_4_%28cropped%29.jpg/330px-Captain_Marvel_trailer_at_the_National_Air_and_Space_Museum_4_%28cropped%29.jpg"
        />
        <Chat 
        name="Wanda Maximoff"
        message="Moping isn't gonna help and I want to learn a bit of this"
        timestamp="2 hours ago"
        profilePic="https://upload.wikimedia.org/wikipedia/en/d/d9/Elizabeth_Olsen_as_Wanda_Maximoff.jpg"
        />
        <Chat 
        name="Jeff Bezos"
        message="Go away."
        timestamp="10 hours ago"
        profilePic="https://img.mensxp.com/media/content/2018/May/how-amazon-ceo-jeff-bezos-transformed-from-skinny-to-buff-600x900-1527071958_600x900.jpg"
        />            
        </div>
    )
}

export default ChatScreen
