import "./css/Log.css";
import React, { useState } from "react";
import { firebaseApp } from "../Firebase";
import firebase from 'firebase/app';
import 'firebase/auth';



function Changepassword() {

    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [newpasswordconfirm, setNewpasswordconfirm] = useState("");

    const [otick, setOtick] = useState("");
    const [nptick, setNptick] = useState("");
    const [npctick, setNpctick] = useState("");

    const [error, setError] = useState([]);



    const ReAuthenticate = (props) => {
        var user = firebaseApp.auth().currentUser;
        const email = user.email;
        var cred = firebase.auth.EmailAuthProvider.credential(email, props);
        return user.reauthenticateWithCredential(cred);
      }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("logged")
        ReAuthenticate(oldpassword).then(() => {
            var user = firebaseApp.auth().currentUser;
            user.updatePassword(newpassword).then(() => {
              alert("Password Updated");
            }).catch((err) => {
              alert(err.message);
              setError(err.message);
            })
          }).catch(() => {
            alert("Something Went Wrong");
          });
          
    }

    function oldpasscheck() {
        if (oldpassword !== "") {
            if (oldpassword.length >= 5) {
                setOtick("✔");
            } else {
                setOtick("✘");
            }
        } else {
            setOtick("");
        }
    }

    function inputcheck() {
        if (newpassword.length !== 0) {
            if (newpassword.length >= 6) {

                setNptick("✔");
                if (newpasswordconfirm.length !== 0) {
                    if (newpassword === newpasswordconfirm && newpassword !== oldpassword) {
                        setNpctick("✔");
                    } else {
                        setNpctick("✘");
                        setNptick("✘");
                    }
                } else {
                    setNpctick("");
                }

            } else {
                setNptick("✘");
            }
        } else {

            setNptick("");
        }
        if ((oldpassword !== "" && newpassword.length !== 0 && newpasswordconfirm === newpassword )) {
            document.getElementById("logbtn").disabled = false;
        } else {
            document.getElementById("logbtn").disabled = true;
        }

    }

    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <br /><br />
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={oldpasscheck} onChange={(e) => setOldpassword(e.target.value)} />
                        <label htmlFor="password">Old Password</label>
                        <h5 className="img" >{otick}</h5>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={inputcheck} onChange={(e) => setNewpassword(e.target.value)} />
                        <label htmlFor="password">New Password</label>
                        <h5 className="img" >{nptick}</h5>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={inputcheck} onChange={(e) => setNewpasswordconfirm(e.target.value)} />
                        <label htmlFor="password">Retype New Password</label>
                        <h5 className="img" >{npctick}</h5>
                    </div>
                    <h5 className="error">{error}</h5>
                <center>
                    <button className="login-button" id="logbtn" name="login" title="login" disabled >Change</button>
                </center>
                </form><br></br>

            </div>
        </div>
    );
}

export default Changepassword;