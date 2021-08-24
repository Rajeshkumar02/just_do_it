import "./css/Log.css";
import { Link, Redirect } from "react-router-dom";
import { useState,useContext } from "react";
import { firebaseApp } from "../Firebase";
import { AuthContext } from "./Auth";

function EditProfile() {

    const [error, setError] = useState([]);
    const [image,setImage] = useState();
    const { currentUser } = useContext(AuthContext);
    const [name,setName] = useState("");
    const [place,setPlace] = useState("");
    const [aoi,setAoi] = useState("");
    const [about,setAbout] = useState("");
    const [github,setGithub] = useState("");
    const [facebook,setFacebook] = useState("");
    const [twitter,setTwitter] = useState("");
    const [ redirect,setRedirect]= useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        var firestore = firebaseApp.firestore().collection(currentUser.uid).doc("profile");

        if(image){
            const ref = firebaseApp.storage().ref();
    
            ref.child("images/" +currentUser.uid).put(image)
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then((url) => {
                    console.log(url);
                    alert("uploaded in storage");
                    firestore.set({AvatarURL:url},{merge:true}).then(() => {
                        alert("image uploaded");
                    }).catch((err) => {
                        setError(err.message);
                    })
                    firebaseApp.firestore().collection("suggestions").doc(currentUser.uid).set({AvatarURL:url},{merge:true}).then(() => {
                    }).catch((err) => {
                        setError(err.message);
                    })
                })
            .catch(console.error);
        }
        if(name){
            firestore.set({Displayname:name},{merge:true}).then(() => {
                alert("username changed");
            }).catch((err) => {
                setError(err.message);
            })
            firebaseApp.firestore().collection("suggestions").doc(currentUser.uid).set({Displayname:name},{merge:true}).then(() => {
            }).catch((err) => {
                setError(err.message);
            })
        }
        if(place){
            firestore.set({Place:place},{merge:true}).then(() => {
                alert("place changed");
            }).catch((err) => {
                setError(err.message);
            })

        }
        if(aoi){
            firestore.set({AreaofInterest:aoi},{merge:true}).then(() => {
                alert("aoi updated");
            }).catch((err) => {
                setError(err.message);
            })
            firebaseApp.firestore().collection("suggestions").doc(currentUser.uid).set({AreaofInterest:aoi},{merge:true}).then(() => {
            }).catch((err) => {
                setError(err.message);
            })
        }
        if(about){
            firestore.set({About:about},{merge:true}).then(() => {
                alert("about updated");
            }).catch((err) => {
                setError(err.message);
            })
        }
        if(github){
            firestore.set({Github:github},{merge:true}).then(() => {
                alert("github updated");
            }).catch((err) => {
                setError(err.message);
            })
        }
        if(facebook){
            firestore.set({Facebook:facebook},{merge:true}).then(() => {
                alert("facebook updated");
            }).catch((err) => {
                setError(err.message);
            })
        }
        if(twitter){
            firestore.set({Twitter:twitter},{merge:true}).then(() => {
                alert("twitter updated");
            }).catch((err) => {
                setError(err.message);
            })
        }
        setRedirect(true);
    }


    const imgfile=(e)=>{
        e.preventDefault();
        setImage(e.target.files[0]);
    }

    if(redirect){
        return <Redirect to="/profile" />
    }

    return (
        <div className="container">
            <div className="box">
                <h1>Edit Your Profile</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="Null">
                        <input type="file" id="img" name="image" onChange={imgfile} accept="image/*"/>
                    </div>
                    <div className="field">
                        <input id="username" name="emailAdress" type="name" placeholder="email" onChange={(e)=>setName(e.target.value)}/>
                        <label htmlfor="username">Display Name</label>
                    </div>
                    <div className="field">
                        <input id="username" name="emailAdress" type="name" placeholder="email" onChange={(e)=>setPlace(e.target.value)}/>
                        <label htmlfor="username">Place</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" onChange={(e)=>setAoi(e.target.value)}/>
                        <label htmlfor="username">Area of Interest</label>
                    </div>
                    <div className="field">
                        <textarea id="username" name="username" type="name" placeholder="username" onChange={(e)=>setAbout(e.target.value)}/>
                        <label htmlfor="username">About</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" onChange={(e)=>setGithub(e.target.value)}/>
                        <label htmlfor="username">Github</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" onChange={(e)=>setFacebook(e.target.value)}/>
                        <label htmlfor="username">Facebook</label>
                    </div>
                    <div className="field">
                        <input id="username" name="username" type="name" placeholder="username" onChange={(e)=>setTwitter(e.target.value)}/>
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
