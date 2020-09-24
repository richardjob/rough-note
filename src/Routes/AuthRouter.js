import React from 'react';
import { MDBCard, MDBCardImage } from 'mdbreact';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import authImage from '../Assets/images/auth.png'
import app from '../firebase.js';
import '../App.css';


const AuthRouter = () => {

    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                window.localStorage.setItem('user', JSON.stringify(authResult.user))
                window.location.assign("/dashboard")
                return false;
            }
        },
        signInFlow: 'popup',
        signInOptions: [
            app.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      };

    return (
        <div className="background">
            <div className="auth-container">
                <MDBCard style={{ width: "350px" }}>
                <MDBCardImage className="img-fluid auth-image" src={authImage} waves />
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
                </MDBCard>
            </div>
        </div>
    )

}

export default AuthRouter;