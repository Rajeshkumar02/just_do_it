import React from 'react';
import "./css/Profile.css";
import {Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Card() {
  return (
    <div className="body1">
      <div className="card-container">
      <Link to="/editprofile"><span className="pro">✎ Edit</span></Link>
        <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
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