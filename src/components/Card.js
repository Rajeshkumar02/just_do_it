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
  const [name,setName] = useState("");
  const [place,setPlace] = useState("");
  const [about,setAbout] = useState("");
  const [aoi,setAoi] = useState("");
  const [twitter,setTwitter] = useState("");
  const [facebook,setFacebook] = useState("");
  const [github,setGithub] = useState("");

  useEffect(() => {
    firebaseApp.firestore().collection(currentUser.uid).doc("profile").get().then((doc) => {
      setImgURL( doc.data().AvatarURL);
      setName(doc.data().Username);
      setPlace(doc.data().Place);
      setAbout(doc.data().About);
      setAoi(doc.data().AreaofInterest);
      setTwitter(doc.data().Twitter);
      setFacebook(doc.data().Facebook);
      setGithub(doc.data().Github);
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
        <h3>{name}</h3>
        <h6>{place}</h6>
        <p>{aoi}</p>
        <p><SocialIcon url={github} />&nbsp;&nbsp;<SocialIcon url={facebook} />&nbsp;&nbsp;<SocialIcon url={twitter} /></p>
        <div className="About">
          <h6>About</h6>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;