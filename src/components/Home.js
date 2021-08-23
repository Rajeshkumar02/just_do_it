import "./css/Profile.css";
import React, { useContext } from "react";
import { Redirect,Link } from "react-router-dom";
import { firebaseApp } from "../Firebase";
import { AuthContext } from "./Auth";
import { confirm } from "react-confirm-box";


function Home() {
    const options = {
        labels: {
          confirmable: "Confirm",
          cancellable: "Cancel"
        }
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await confirm("Are you sure?", options);
            if (result) {
                firebaseApp.auth().signOut().then(() => {
                    
                }).catch((error) => {
                    console.log(error.message);
                });
                return;
            }
    }

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        console.log(currentUser)
        return <Redirect to="/" />;
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
                    <Link to="/home" onClick={handleSubmit} id="signout" className="navigation-link" >
                        <i className="fas fa-sign-out-alt" />
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Home;
