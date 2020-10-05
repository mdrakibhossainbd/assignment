import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';

const AddEvent = () => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://network-volunteer.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Event Created Successfully!');
                history.push('/admin')
            })
    };

    return (
        <div className="mx-auto border p-4 rounded" style={{ width: '40%' }}>
            <h3 className="font-weight-bold text-center">Add a new event</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Host Name</label>
                <input className="form-control" id="name" placeholder="Full name" name="name" type="text" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Name is required</span>}
                <br />
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" placeholder="Email address" name="email" type="email" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Email is required</span>}
                <br />
                <label htmlFor="task">Event Title</label>
                <input className="form-control" id="task" placeholder="Task name" name="task" type="text" ref={register({ required: true })} />
                {errors.task && <span className="text-danger">Event title is required</span>}
                <br />
                <label htmlFor="date">Event Date</label>
                <input className="form-control" id="date" placeholder="Select date" name="date" type="date" ref={register({ required: true })} />
                {errors.date && <span className="text-danger">Event date is required</span>}
                <br />
                <label htmlFor="description">Event Description</label>
                <textarea className="form-control" id="description" placeholder="Write description here..." name="description" type="text" ref={register({ required: true })} />
                {errors.description && <span className="text-danger">Event description is required</span>}
                <br />
                <label htmlFor="img">Event Banner (Optional)</label>
                <input id="img" type="file" ref={register({ required: false })} />
                <br />
                <input type="submit" className="btn btn-success mt-2 btn-block" value="Create Event" />
            </form >
        </div>
    );
};

export default AddEvent;