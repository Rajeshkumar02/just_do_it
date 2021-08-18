import "./css/Log.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import validator from 'validator';

function Signup() {

    const [log, setLog] = useState([]);
    const [loading, setLoading] = useState(false);


    const[email,setEmail] = useState("");
    const[username,setUsername] = useState("");
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    const[passwordcon,setpasswordcon] = useState("");
    const [error,setError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                alert("User added Successfully")
            }).catch(err => {
                console.log(err)
                setError(err.message);
        });
    }


    if (loading) {
        return <h1>Loading.....</h1>;
    }


    function emailchecker(){
        if(email !== ""){

            if(validator.isEmail(email)){

                document.getElementById("err").innerHTML = "✔";
               
            }else{
             
                document.getElementById("err").innerHTML = "✘";
            }
        }else{
            setError("")
            document.getElementById("err").innerHTML = "";
        }
    }

    function namechecker(){
        if(username.length !== 0){
            if(username.length >=5){
            
                document.getElementById("err1").innerHTML = "✔";
                
                
            }else{
                
               
                document.getElementById("err1").innerHTML = "✘";
            }
        }else{
            document.getElementById("err1").innerHTML = "";
        }

    }

    function phonechecker(){
        if(phone.length !==0){
            if(phone.length === 10){
               
                document.getElementById("err2").innerHTML = "✔";
                
                
            }else{
               
                
                document.getElementById("err2").innerHTML = "✘";
            }
        }else{
            document.getElementById("err2").innerHTML = "";
        }

    }

    function passchecker(){
        if(password.length!==0){
            if(password.length>=6){
                
                document.getElementById("err3").innerHTML = "✔";
                if(passwordcon.length!==0){
                    if(password===passwordcon){
                        document.getElementById("err4").innerHTML = "✔";
                       
                            document.getElementById("logbtn").disabled=false;
                        
                    }else{
        
                        document.getElementById("logbtn").disabled=true;
                        document.getElementById("err4").innerHTML = "✘";
                    }
                }else{
                    document.getElementById("err4").innerHTML = "";
                }
                
            }else{
               
                document.getElementById("logbtn").disabled=true;
                document.getElementById("err3").innerHTML = "✘";
            }
        }else{
            
            document.getElementById("err3").innerHTML = "";
        }
        if((email !== "")&&(username.length !== 0)&&(phone.length !==0)&&(password.length!==0)&&(passwordcon.length!==0)){
            document.getElementById("logbtn").disabled=false;
        }else{
            document.getElementById("logbtn").disabled=true;
        }
    }


    return (
        <div className="container">
            <div className="box">
                <div className="heading">{ error &&
                    <h5 className="error"> { error } </h5> }</div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <input id="username" name="emailAdress" type="name" placeholder="Email" onKeyUp={emailchecker} onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor="username">Email</label>
                        <h5 className="img" id ="err"></h5>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="Username" onKeyUp={namechecker} onChange={(e)=>setUsername(e.target.value)}/>
                        <label htmlFor="username">Username</label>
                        <h5 className="img" id="err1"></h5>
                    </div>
                    <div className="field">
                        <input id="username" type="number" name="phone" placeholder="Phone number" onKeyUp={phonechecker} onChange={(e)=>setPhone(e.target.value)}/>
                        <label htmlFor="username">Phone number</label>
                        <h5 className="img" id="err2"></h5>
                    </div>
                    <div className="field">
                        <input id="password" name="password" type="password" placeholder="Password" onKeyUp={passchecker} onChange={(e)=>setPassword(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <h5 className="img" id="err3"></h5>
                    </div>
                    <div className="field">
                        <input id="password" name="passwordCon" type="password" placeholder="password" onKeyUp={passchecker} onChange={(e)=>setpasswordcon(e.target.value)}/>
                        <label htmlFor="password">Confirm Password</label>
                        <h5 className="img" id="err4"></h5>
                    </div>
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