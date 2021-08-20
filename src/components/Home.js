import "./css/Log.css";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { firebaseApp } from "../Firebase";
import { AuthContext } from "./Auth";

function Home() {

    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseApp.auth().signOut().then(() => {
        }).catch((error) => {
            // An error happened.
        });
    }
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        console.log(currentUser)
        return <Redirect to="/" />;
    }


    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <center>
                    <button className="login-button" id="logbtn" name="login" title="login" style={{ width: 50 + "%" }}>Signout</button>
                </center>
            </form>
            <p>you logged in as {currentUser.email}</p>
        </div>
    );
}

export default Home;