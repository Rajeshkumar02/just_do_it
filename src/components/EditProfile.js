import "./css/Log.css";
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { firebaseApp } from "../Firebase";
import { AuthContext } from "./Auth";

function EditProfile() {

    const [error, setError] = useState([]);
    const [image,setImage] = useState();
    const { currentUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const ref = firebaseApp.storage().ref();
   
    ref.child("images/" +currentUser.uid+"-"+"avatar").put(image)
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            console.log(url);
            alert("uploaded in storage");
            firebaseApp.firestore().collection(currentUser.uid).doc("profile").update({AvatarURL:url}).then(() => {
                alert("image uploaded");
            }).catch((err) => {
                setError(err.message);
            })
        })
        .catch(console.error);

    }


    const imgfile=(e)=>{
        e.preventDefault();
        setImage(e.target.files[0]);
    }


    return (
        <div className="container">
            <div className="box">
                <h1>Edit Your Profile</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="Null">
                        <input type="file" id="img" name="image" onChange={imgfile} required accept="image/*"/>
                    </div>
                    <div className="field">
                        <input id="username" name="emailAdress" type="name" placeholder="email" />
                        <label htmlfor="username">User Name</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" />
                        <label htmlfor="username">Area of Intrest</label>
                    </div>
                    <div className="field">
                        <textarea id="username" name="username" type="name" placeholder="username" />
                        <label htmlfor="username">About</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" />
                        <label htmlfor="username">Github</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" />
                        <label htmlfor="username">Facebook</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" />
                        <label htmlfor="username">Twiter</label>
                    </div>
                    <br></br>
                    <h5 className="error">{error}</h5>
                    <div className="box">
                <p style={{ width: 40 + '%' }}>
                    <button className="login-button" name="signup" style={{ background: "green" }}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/profile" style={{ color: "white" }}><button className="login-button" name="signup" style={{ background: "red", float: "right" }}>Back</button></Link>
                </p>
            </div>
                </form>
            </div>
           
        </div>
    );
}

export default EditProfile;