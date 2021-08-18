import "./css/Log.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FireBase } from "../Firebase";

function Signup() {

    const [log, setLog] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("ADD");
        let today = new Date();
        let counter = today.getTime();
        let id = counter += 1;
        const {emailAdress, username,phone,password} = e.target.elements;
        FireBase.collection("log").doc("_"+id).set({
            email: emailAdress.value,
            username :username.value,
            phone: phone.value,
            password : password.value,

        }); alert("Added")
    }


    if (loading) {
        return <h1>Loading.....</h1>;
    }

    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input id="username" name="emailAdress" type="name" placeholder="email" />
                        <label htmlFor="username">email</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" />
                        <label htmlFor="username">username</label>
                    </div>
                    <div className="field">
                        <input id="username" type="number" name="phone" placeholder="Phone number" />
                        <label htmlFor="username">Phone number</label>
                    </div>
                    <div className="field">
                        <input id="password" name="password" type="password" placeholder="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="field">
                        <input id="password" name="passwordCon" type="password" placeholder="password" />
                        <label htmlFor="password">Confirm Password</label>
                    </div>
                    <button className="login-button" name="signup">Sign Up</button>
                    <br></br>
                </form>
            </div>
            <div className="box">
                <p>Already have an account? <Link className="signup" to="/login">Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;