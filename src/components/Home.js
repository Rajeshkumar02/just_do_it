import "./css/Log.css";
import React, { useState } from "react";
import { Redirect} from "react-router-dom";
import { auth } from "../Firebase";

function Home() {

    const handleSubmit = (e) => {
        auth.signOut().then(() => {
            return <Redirect to="/login" />;
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <center>
                <button className="login-button" id="logbtn" name="login" title="login" style={{width:50+"%"}}>Signout</button>
            </center>
        </form>
    );
}

export default Home;