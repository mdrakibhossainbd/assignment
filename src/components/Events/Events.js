import React, { useEffect, useState } from 'react';
import RegisteredEvent from '../RegisteredEvent/RegisteredEvent';

const Events = () => {
    const [registeredEvents, setRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch('https://network-volunteer.herokuapp.com/register')
            .then(res => res.json())
            .then(data => setRegisteredEvents(data))
    }, [registeredEvents])
    return (
        <div className="row d-flex justify-content-around">
            {
                registeredEvents.map(regEvent => <RegisteredEvent key={regEvent._id} regEvent={{ regEvent }} />)
            }
        </div>
    );
};

export default Events;