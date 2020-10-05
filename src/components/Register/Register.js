import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { eventName } = useParams();
    let today = new Date().toISOString().slice(0, 10);
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
                alert('Registration Complete!');
                history.push('/events')
            })
    };

    return (
        <div className="mx-auto border p-4 rounded" style={{ width: '40%' }}>
            <h3 className="font-weight-bold text-center">Register as a Volunteer</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" defaultValue={loggedInUser.displayName} placeholder="Your full name" name="name" type="text" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Name is required</span>}
                <br />
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" defaultValue={loggedInUser.email} placeholder="Email address" name="email" type="email" ref={register({ required: true })} />
                {errors.name && <span className="text-danger">Email is required</span>}
                <br />
                <label htmlFor="task">Task</label>
                <input className="form-control" id="task" defaultValue={eventName} placeholder="Task name" name="task" type="text" ref={register({ required: true })} />
                {errors.task && <span className="text-danger">Task is required</span>}
                <br />
                <label htmlFor="date">Date</label>
                <input className="form-control" id="date" defaultValue={today} placeholder="Select date" name="date" type="date" ref={register({ required: true })} />
                {errors.date && <span className="text-danger">Date is required</span>}
                <br />
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" placeholder="Write description here..." name="description" type="text" ref={register({ required: true })} />
                {errors.description && <span className="text-danger">Description is required</span>}
                <br />
                <input type="submit" className="btn btn-success mt-2 btn-block" value="Register" />
            </form >
        </div>
    );
};

export default Register;