import "./css/Log.css";
import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { firebaseApp } from "../Firebase";
import validator from 'validator';
import { AuthContext } from "./Auth";

function Signup() {

    const [email, setEmail] = useState("");
    const [emailerror,setEmailerror] = useState("");
    const [displayname, setDisplayname] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordcon, setpasswordcon] = useState("");
    const [error, setError] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const [now, setNow] = useState(true);
    const [userExists, alreadyUserExists] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                setNow(false);
                alert("User added Successfully")
                firebaseApp.firestore().collection(user.user.uid).doc("profile").set({ Email: email, password: password, Displayname: displayname, PhoneNumber: phone,Username:username}).then(() => {
                    firebaseApp.auth().signOut();
                    user.user.sendEmailVerification().then(() => {
                        alert("Verification Email is send");
                        setRedirect(true)
                    }).catch((err) => {
                        setError("Try after some time");
                        alert(err.message)
                    })
                }).catch((err) => {
                    setError(err.message);
                })
            }).catch(err => {
                console.log(err)
                alert("User already existes")
                alreadyUserExists(true)
            });
    }

    if (redirect) {
        return <Redirect to="/Login" />;
    }

    if (currentUser) {
        if (now) {
            return <Redirect to="/login" />;
        }
    }
    
    if (userExists) {
        return <Redirect to="/Login" />;
    }



    function emailchecker() {
        if (email !== "") {

            if (validator.isEmail(email)) {
                var name   = email.substring(0, email.lastIndexOf("@"));
                setUsername(name);

                setEmailerror("✔");

            } else {
                setEmailerror("✘");
            }
        } else {
            setError("")
            document.getElementById("err").innerHTML = "";
        }
    }

    function namechecker() {
        if (displayname.length !== 0) {
            if (displayname.length >= 5) {

                document.getElementById("err1").innerHTML = "✔";


            } else {


                document.getElementById("err1").innerHTML = "✘";
            }
        } else {
            document.getElementById("err1").innerHTML = "";
        }

    }

    function phonechecker() {
        if (phone.length !== 0) {
            if (phone.length === 10) {

                document.getElementById("err2").innerHTML = "✔";


            } else {


                document.getElementById("err2").innerHTML = "✘";
            }
        } else {
            document.getElementById("err2").innerHTML = "";
        }

    }

    function passchecker() {
        if (password.length !== 0) {
            if (password.length >= 6) {

                document.getElementById("err3").innerHTML = "✔";
                if (passwordcon.length !== 0) {
                    if (password === passwordcon) {
                        document.getElementById("err4").innerHTML = "✔";

                        document.getElementById("logbtn").disabled = false;
                    
                    } else {
                      
                        document.getElementById("logbtn").disabled = true;
                        document.getElementById("err4").innerHTML = "✘";
                    }
                } else {
                    document.getElementById("err4").innerHTML = "";
                }

            } else {

                document.getElementById("logbtn").disabled = true;
                document.getElementById("err3").innerHTML = "✘";
            }
        } else {

            document.getElementById("err3").innerHTML = "";
        }
        if ((email !== "") && (displayname.length !== 0) && (password.length!==0)&&(password===passwordcon)) {
            document.getElementById("logbtn").disabled = false;
        } else {
            document.getElementById("logbtn").disabled = true;
        }
    }


    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input id="username" name="emailAdress" type="name" placeholder="Email" onKeyUp={emailchecker} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="username">Email</label>
                        <h5 className="img" id="err">{emailerror}</h5>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="Username" onKeyUp={namechecker} onChange={(e) => setDisplayname(e.target.value)} />
                        <label htmlFor="username">Displayname</label>
                        <h5 className="img" id="err1"></h5>
                    </div>
                    <div className="field">
                        <input id="username" type="name" name="phone" placeholder="Phone number" onKeyUp={phonechecker} onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor="username">Phone number</label>
           
                        <h5 className="img" id="err2"></h5>
                    </div>
                    <div className="field">
                        <input id="password" name="password" type="password" placeholder="Password" onKeyUp={passchecker} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                       
                        <h5 className="img" id="err3"></h5>
                    </div>
                    <div className="field">
                        <input id="password" name="passwordCon" type="password" placeholder="password" onKeyUp={passchecker} onChange={(e) => setpasswordcon(e.target.value)} />
                        <label htmlFor="password">Confirm Password</label>
                        <h5 className="img" id="err4"></h5>
                    </div>
                    <h5 className="error"> {error} </h5>
                    <button className="login-button" id="logbtn" name="signup" disabled>Sign Up</button>
                    <br></br>
                </form>
            </div>
            <div className="box">
                <p>Already have an account? <Link className="signup" to="/login">Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;