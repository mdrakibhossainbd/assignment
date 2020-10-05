import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut = () => {
        firebase.auth().signOut()
            .then(() => {
                setLoggedInUser('');
            })
            .catch((error) => {
                // An error happened.
            });
    }
    return (
        <Navbar bg="white" className="sticky-top" expand="lg">
            <Navbar.Brand><Link to="/"><img src={logo} alt="" className="icon" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/" className="btn m-1">Home</Link>
                    <Link to="#" className="btn m-1">Donation</Link>
                    <Link to="/events" className="btn m-1">Events</Link>
                    <Link to="#" className="btn m-1">Blog</Link>
                    
                    {
                        loggedInUser.email ?
                            <Link to="/" className="btn m-1 btn-warning" onClick={handleLogOut}>Log Out</Link>
                            :
                            <Link to="/register" className="btn m-1 btn-info text-white">Register</Link>
                    }
                    <Link to="/admin" className="btn m-1 btn-dark text-white">Admin</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;