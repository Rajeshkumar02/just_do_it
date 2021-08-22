import "./css/Profile.css";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../Firebase";

function Home() {

    const handleSubmit = (e) => {
        auth.signOut().then(() => {
            alert("hello");
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <div>

            <div className="navigation">
                <div className="logo">
                    <Link className="no-underline" to="/home">
                        𝓙𝓾𝓼𝓽 𝓘𝓽
                    </Link>
                </div>
                <div className="navigation-search-container">
                    <i className="fa fa-search" />
                    <input className="search-field" type="text" placeholder="Search" />
                    <div className="search-container">
                        <div className="search-container-box">
                            <div className="search-results">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-icons">
                    <Link to="#" className="navigation-link">
                        <i className="far fa-compass" />
                    </Link>
                    <Link to="#" className="navigation-link notifica">
                        <i className="far fa-heart" />
                    </Link>
                    <Link to="/profile" className="navigation-link">
                        <i className="far fa-user-circle" />
                    </Link>
                    <Link to="/" onClick={handleSubmit} id="signout" className="navigation-link" >
                        <i className="fas fa-sign-out-alt" />
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Home;
