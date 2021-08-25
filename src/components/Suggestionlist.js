import React from 'react';
import "./css/Sugg.css";
import { useState, useEffect,useContext } from "react";
import { firebaseApp } from "../Firebase";
import { AuthContext } from "./Auth";


function Suggestionlist() {

    const [info, setInfo] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const [error, setError] = useState([]);

    useEffect(() => {
        var username=""
        var firestore = firebaseApp.firestore().collection(currentUser.uid).doc("profile");
        firestore.get().then((doc) => {
            username = doc.data().Username;
        }).catch((err) => {
            setError(err.message);
        })
        firebaseApp.firestore().collection("suggestions").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                if(username !== data.Username){
                setInfo(arr => [
                    ...arr,
                    data
                ]);
            }
            });
        })
    }, []);

    return (
        <div className="body2">
            <div className="profile-container">
                {info.map((data) => (<Frame imgurl={data.AvatarURL} name={data.Username} displayname={data.Displayname} aoi={data.AreaofInterest} />))}
            </div>
            <h5 className="error">{error}</h5>
        </div>
    );

}
const Frame = ({ imgurl, displayname, name, aoi }) => {
    return (
        <div className="profile-card">
            <img src={imgurl} alt="image1" className="profile-icon" />
            <div className="profile-name">{displayname}</div>
            <div className="display-name">@{name}</div>
            <div className="profile-position">{aoi}</div>
            
            <div className="button">View Profile</div>
        </div>
    );
}

export default Suggestionlist;
