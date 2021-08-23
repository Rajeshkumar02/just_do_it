import React from 'react';
import "./css/Sugg.css";
import { useState,useEffect } from "react";
import { firebaseApp } from "../Firebase";
function Suggestionlist() {

    const [info,setInfo] = useState([]);

    useEffect(()=>{
        firebaseApp.firestore().collection("suggestions").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
              var data = element.data();
              setInfo(arr => [
                ...arr,
                data
              ]);
      
            });
          })
    },[]);

    return (
        <div className="body1">
            <div className="profile-container">
                {info.map((data)=>(<Frame imgurl = {data.AvatarURL} name = {data.Username} aoi = {data.AreaofInterest} />))}
            </div>
        </div>
    );
    
}
const Frame = ({imgurl,name,aoi}) => {
    return (
        <div className="profile-card">
            <img src={imgurl} alt="image1" className="profile-icon" />
            <div className="profile-name">{name}</div>
            <div className="profile-position">{aoi}</div>
            <a href="#" className="button">Follow</a>
        </div>
    );
  }

export default Suggestionlist;
