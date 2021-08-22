import React from 'react';
import "./css/Profile.css";
import {Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import { AuthContext } from "./Auth";
import { useContext, useState,useEffect } from "react";
import { firebaseApp } from "../Firebase";

function Card() {

  const { currentUser } = useContext(AuthContext);
  const [error, setError] = useState([]);
  const [imgURL,setImgURL] = useState("");

  useEffect(() => {
    firebaseApp.firestore().collection(currentUser.uid).doc("profile").get().then((doc) => {
      setImgURL( doc.data().AvatarURL);
    }).catch((err) => {
      setError(err.message);
    });
  }, [currentUser.uid])
  return (
    <div className="body1">
       <h5 className="error">{error}</h5>
      <div className="card-container">
      <Link to="/editprofile"><span className="pro">✎ Edit</span></Link>
        <img className="round" src={imgURL} alt="user" />
        <h3>Ricky Park</h3>
        <h6>New York</h6>
        <p>User interface designer and <br /> front-end developer</p>
        <p><SocialIcon url="https://github.com/Ramya4447" />&nbsp;&nbsp;<SocialIcon url="https://github.com/Ramya4447" />&nbsp;&nbsp;<SocialIcon url="https://github.com/Ramya4447" /></p>
        <div className="About">
          <h6>About</h6>
          <p>Hello Everyone Im Hena I love working on the front-end designing and Im also expert in it.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;