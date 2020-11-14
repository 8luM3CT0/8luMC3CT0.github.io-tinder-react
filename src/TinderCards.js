 import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import db from './firebase';
 import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState([]);
    //Piece of code that runs via a condition
    useEffect(() => {
        //code runs here
        db.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    //^ dependencies
    //^runs once if the array is empty


    //const people = [ ];
    //setPeople([...people, 'sonny', 'qazi'] )

    return (
        <div className="tinderCards">
            <div className="tinderCards__container">
            {
                people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}

                    >
                        <div 
                        style={{backgroundImage: `url(${person.url})`}} 
                        className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
        </div>
    )
}

export default TinderCards
