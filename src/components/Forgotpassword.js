import "./css/Log.css";
import { Link } from "react-router-dom";
import React,{ useState } from "react";
import validator from 'validator';

function Forgotpassword() {

    const handleSubmit = (e) => {
    
    }

    const [emailcheck,setEmailcheck] = useState("");

    function inputcheck(){
        if(emailcheck.length>=2 && validator.isEmail(emailcheck)){
            document.getElementById("logbtn").disabled=false;
            document.getElementById("err").innerHTML = "✔";
        }
        else{
            document.getElementById("logbtn").disabled=true;
        }
    }
    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <br /><br />
                <div className="other">
                    Please Enter your Email to retrieve your password !
                </div><br /><br />
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input id="username" type="name" name="user" placeholder="Phone number or email" onKeyUp={inputcheck} onChange={(e)=>setEmailcheck(e.target.value)} />
                        <label htmlfor="username">Email</label>
                        <h5 className="img" id ="err"></h5>
                    </div><br></br>
                    <center>
                        <button className="login-button" id="logbtn" name="login" title="login" disabled style={{ width: 50 + "%", }}> Send</button>
                    </center>
                </form><br /><br />
            </div>
            <div className="box">
                <p>Already have an account? <Link className="signup" to="/login">Log in</Link></p>
            </div>
        </div>
    );
}

export default Forgotpassword;