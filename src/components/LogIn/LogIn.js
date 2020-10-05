import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const { email, displayName } = result.user;
                const signedInUser = { email, displayName };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.code);
            });
    }
    return (
        <div className="text-center mt-5 border d-block p-5 rounded w-50 mx-auto border">
            <h4 className="mb-4">Login With</h4>
            <button className="btn rounded-pill border-secondary" onClick={handleGoogleSignIn}><FcGoogle /> Continue with Google</button>
        </div>
    );
};

export default LogIn;