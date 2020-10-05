import React from 'react';

const RegisteredEvent = ({ regEvent: { regEvent: { task, date, _id, name } } }) => {
    const deleteRegistration = () => {
        fetch(`https://network-volunteer.herokuapp.com/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                
            });
    };
    return (
        <div className="shadow-sm p-3 mb-2 bg-light rounded col-md-3 border m-3">
            <h5>{task}</h5>
            <p className="text-secondary">Hosted by {name}</p>
            <p>Event Date: {date}</p>
            <button onClick={deleteRegistration} className="btn btn-secondary">Cancel Task</button>
        </div>
    );
};

export default RegisteredEvent;