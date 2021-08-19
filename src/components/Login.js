import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from 'validator';
import { auth } from "../Firebase";
import { Redirect} from "react-router-dom";




function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailcheck, passwordcheck)
            .then(user => {
                console.log(user)
                alert("Login Successfully !")
                return <Redirect to="/home" />;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                setError("Check your email id and password");
            });

    }

    const [emailcheck, setEmailcheck] = useState("");
    const [passwordcheck, setPasswordcheck] = useState("");
    const [error, setError] = useState([]);

    function inputcheck() {
        if (emailcheck.length >= 2 && validator.isEmail(emailcheck)) {
            if (passwordcheck.length >= 5) {
                document.getElementById("logbtn").disabled = false;
            } else {
                document.getElementById("logbtn").disabled = true;
            }
        } else {
            document.getElementById("logbtn").disabled = true;
        }
    }

    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <h1>Welcome Back !</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input id="username" type="name" name="user" placeholder="Email" onKeyUp={inputcheck} onChange={(e) => setEmailcheck(e.target.value)} />
                        <label htmlFor="username">Email</label>
                        <h5 className="img" id="err"></h5>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={inputcheck} onChange={(e) => setPasswordcheck(e.target.value)} />
                        <label htmlFor="password">Password</label>
                        <h5 className="img" id="err1"></h5>
                    </div>
                    <h5 className="error">{error}</h5>
                    <button className="login-button" id="logbtn" name="login" title="login" disabled>Log In</button>
                    <br></br><br />
                    <div className="other">
                        <Link className="forgot-password" to="/forgotpassword">Forgot password?</Link>
                    </div>
                </form>
            </div>
            <div className="box">
                <p>Don't have an account? <Link className="signup" to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
}

export default Login;