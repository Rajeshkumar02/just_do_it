import "./css/Log.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import validator from 'validator';
import { Redirect } from "react-router-dom";
import { firebaseApp } from "../Firebase";

function Forgotpassword() {
    const [error, setError] = useState([]);
    const [now,setNow] = useState(false);
    const [emailcheck, setEmailcheck] = useState("");
    const [etick, setEtick] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseApp.auth().sendPasswordResetEmail(emailcheck)
        .then(() => {
    // Password reset email sent!
            alert("Password Reset Email was sent");
            setNow(true);
    // ..
        })
        .catch((error) => {
            var errorMessage = error.message;
            setError(errorMessage);
    // ..
        });

    }

   
    function inputcheck() {
        if (emailcheck !== "") {
            if (validator.isEmail(emailcheck)) {
                document.getElementById("logbtn").disabled = false;
                setEtick("✔");
            }
            else {
                document.getElementById("logbtn").disabled = true;
                setEtick("✘");
            }
        } else {
            setEtick("");
        }
    }

    if(now){
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <br /><br />
                <div className="other">
                    Please Enter your Email to retrieve your password !
                </div><br /><br />
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input id="username" type="name" name="user" placeholder="Phone number or email" onKeyUp={inputcheck} onChange={(e) => setEmailcheck(e.target.value)} />
                        <label htmlFor="username">Email</label>
                        <h5 className="img">{etick}</h5>
                    </div><br></br>
                    <h5 className="error">{error}</h5>
                    <center>
                        <button className="login-button" id="logbtn" name="login" title="login" disabled style={{ width: 50 + "%", }}> Send</button>
                    </center>
                </form><br /><br />
            </div>
            <div className="box">
                <p>Already have an account? <Link className="signup" to="/login">Log in</Link></p>
            </div>
        </div>
    );
}

export default Forgotpassword;