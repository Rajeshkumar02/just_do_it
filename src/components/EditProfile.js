import "./css/Log.css";
import { Link } from "react-router-dom";

function EditProfile() {
    return (
        <div className="container">
            <div className="box">
                <h1>Edit Your Profile</h1>
                <form className="login-form" action="./log.php" method="POST">
                    <div className="Null">
                        <input type="file" id="img" name="image" required accept="image/*"/>
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
                </form>
            </div>
            <div className="box">
                <p style={{ width: 40 + '%' }}>
                    <button className="login-button" name="signup" style={{ background: "green" }}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/profile" style={{ color: "white" }}><button className="login-button" name="signup" style={{ background: "red", float: "right" }}>Back</button></Link>
                </p>
            </div>
        </div>
    );
}

export default EditProfile;