import "./css/Log.css";
import React, { useState } from "react";
import validator from 'validator';

function Changepassword() {

    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [newpasswordconfirm, setNewpasswordconfirm] = useState("");

    const handleSubmit = (e) => {
 
    }

    function inputcheck() {
        if (oldpassword >=5 ) {
            if ((newpassword == newpasswordconfirm) && newpassword >=5 && newpasswordconfirm >=5 && (oldpassword!=newpassword)) {
                document.getElementById("logbtn").disabled = false;
            } else {
                document.getElementById("logbtn").disabled = true;
            }
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
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={inputcheck} onChange={(e)=>setOldpassword(e.target.value)} />
                        <label htmlfor="password">Old Password</label>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={inputcheck} onChange={(e)=>setNewpassword(e.target.value)} />
                        <label htmlfor="password">New Password</label>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" onKeyUp={inputcheck} onChange={(e)=>setNewpasswordconfirm(e.target.value)} />
                        <label htmlfor="password">Retype New Password</label>
                    </div>
                </form><br></br>
                <center>
                    <button className="login-button" id="logbtn" name="login" title="login" disabled >Change</button>
                </center>
            </div>
        </div>
    );
}

export default Changepassword;