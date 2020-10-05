import React, { useEffect, useState } from 'react';
import VolunteerList from '../VolunteerList/VolunteerList';
import { BiCalendarPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    useEffect(() => {
        fetch('https://network-volunteer.herokuapp.com/register')
            .then(res => res.json())
            .then(data => setVolunteerList(data))
    }, [volunteerList])
    return (
        <div className="container">
            <div className="d-flex justify-content-end mb-2">
                <Link className="btn btn-secondary text-decoration-none" to="/create"><BiCalendarPlus /> Add New Event</Link>
            </div>
            <div className="row bg-light font-weight-bold">
                <div className="col-md-2">
                    <p>Name</p>
                </div>
                <div className="col-md-3">
                    <p>Email</p>
                </div>
                <div className="col-md-2">
                    <p>Date</p>
                </div>
                <div className="col-md-4">
                    <p>Task</p>
                </div>
                <div className="col-md-1">
                    <p>Action</p>
                </div>
            </div>
            {
                volunteerList.map(volunteer => <VolunteerList key={volunteer._id} volunteer={volunteer} />)
            }
        </div>
    );
};

export default Admin;