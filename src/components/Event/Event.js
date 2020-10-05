import { Link } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({ event: { name, img } }) => {
    return (
        <Card className="col-md-2 text-center m-3 p-2" >
            <Link className="text-decoration-none" to={`/event/${name}`}>
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title color='danger' >{name} </Card.Title>
                </Card.Body>
            </Link>
           
        </Card>
    );
};

export default Event;