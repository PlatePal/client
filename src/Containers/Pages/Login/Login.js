import React, {useState} from 'react';
import './Login.css';
import logo from "./googleicon.png";
import firebase from '../../../firebase'
  
//   import { config } from "./test-credentials";

class Login extends React.Component {

    // not used for now
    state = {
        signedIn: false,
        user: null,
    }

    googleSignIn () {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
        console.log("Google Sign In Page");
    }

    helpNeeded () {
        console.log("Help is needed");
    }

    render () {
        return(
            <div className="loginComponent">
                <h1 className="loginTitle">Login</h1>
                <p className="loginParagraph">Welcome Back</p>
                <p className="loginParagraph">Sign in to continue</p>
                <img className="loginLogo" src={logo} alt="Google Logo"></img>
                <button className="loginButton" onClick={this.googleSignIn}>Sign in with Google</button>
                <p className="loginParagraphOrange" onClick={this.helpNeeded}>Need Help?</p>
            </div>
        );
    }
}

export default Login;