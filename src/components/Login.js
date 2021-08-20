import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import validator from 'validator';
import { firebaseApp } from "../Firebase";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";




function Login() {

    const [now,setNow] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(emailcheck, passwordcheck)
            .then(user => {
                console.log(user)
                if(user.user.emailVerified){
                    setNow(true);
                    console.log("Login Successfully !")
                }else{
                    setNow(false);
                    setError("Your emai is not verified. Please do verified.")
                }
                
            })
            .catch((error) => {
                console.log(error.message);
                setError("Check your email id and password");
            });

    }

    const [emailcheck, setEmailcheck] = useState("");
    const [passwordcheck, setPasswordcheck] = useState("");
    const [error, setError] = useState([]);
    const [etick, setEtick] = useState("");
    const [ptick, setPtick] = useState("");

    function inputcheck() {
        if (emailcheck !== "") {
            if (validator.isEmail(emailcheck)) {
                setEtick("✔");
                if (passwordcheck.length !== 0) {
                    if (passwordcheck.length >= 6) {
                        setPtick("✔");
                    } else {
                        setPtick("✘");
                    }
                } else {

                    setPtick("");
                }

            } else {
                setEtick("✘");
            }
        } else {
            setEtick("");
        }
        if (emailcheck.length !== 0 && passwordcheck.length !== 0) {
            document.getElementById("logbtn").disabled = false;
        } else {
            document.getElementById("logbtn").disabled = true;
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        if(now){
            console.log(currentUser)
            return <Redirect to="/home" />;
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
                        <h5 className="img" >{etick}</h5>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={inputcheck} onChange={(e) => setPasswordcheck(e.target.value)} />
                        <label htmlFor="password">Password</label>
                        <h5 className="img">{ptick}</h5>
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