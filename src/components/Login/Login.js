import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const handleFacebookSignIn = () => {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }


    return (
        <div>
            <h1 className="text">Login</h1>
            <div className="login-form">
                <div className="login-id">
                    <GoogleLoginButton onClick={handleGoogleSignIn} />
                    <FacebookLoginButton className="mt-4" onClick={handleFacebookSignIn} />
                </div>
            </div>
        </div>

    );
};

export default Login;