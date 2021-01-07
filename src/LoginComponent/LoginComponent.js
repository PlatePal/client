import React from 'react';
import './LoginComponent.css';

const login = (props) => {


    // const [ emailState, setEmailState ] = useState('');
    // const [ passwordState, setPasswordState ] = useState('');

    // const checkFields = () => {
    //     // add code to check with firebase
    //     if (emailState.length != 0 && passwordState.length != 0)
    //         return true;
    //     return false;
    // }

    // const loginAllowed = () => {
    //     if (checkFields)
    //         console.log("Go to next page! Email is: " + emailState + " and password is " + passwordState);
    //     else
    //         console.log("Email or password is incorrect.");
    // }

    return (
        <div className="LoginComponent">
            <br></br>
            <br></br>
            <h1>Login</h1>
            <p className="dontHave">Welcome Back</p>
            <p className="dontHave">Sign in to continue</p>
            <br></br>
            <br></br>
            <form>
                <input placeholder="Email" type="text" id="email" name="Email"></input>
                <button className="forgot">Forgot Email?</button>
                <hr/>
                <br></br>
                <input placeholder="Password" type="text" id="email" name="Password"></input>
                <button className="forgot">Forgot Password?</button>
                <hr/>
                <br></br><br></br><br></br><br></br>
                <button className="loginBtn">Login</button><br></br><br></br>
                <p className="dontHave">Don't have an account?</p> 
                <button className="create">Create account</button>
            </form>
        </div>
    );
}

export default login;