import React from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';

const VolunteerList = ({ volunteer: { name, email, task, date, _id } }) => {
    const handleDashboardActions = () => {
        fetch(`https://network-volunteer.herokuapp.com/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
            
            });
    };
    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    {name}
                </div>
                <div className="col-md-3">
                    {email}
                </div>
                <div className="col-md-2">
                    {date}
                </div>
                <div className="col-md-4">
                    {task}
                </div>
                <div className="col-md-1">
                    <RiDeleteBinFill className="text-danger" data-toggle="tooltip" title="Click to delete this event" onClick={handleDashboardActions} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <hr />
        </>
    );
};

export default VolunteerList;