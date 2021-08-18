import "./css/Log.css";
import {Link } from "react-router-dom";

function Forgotpassword() {
    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <br /><br />
                <div className="other">
                    Please Enter your Email to retrieve your password !
                </div><br /><br />
                <form className="login-form" action="./log.php" method="POST">
                    <div className="field">
                        <input id="username" type="name" name="user" placeholder="Phone number or email" />
                        <label for="username">Email</label>
                    </div>
                </form><br /><br />
                <div className="other">
                    <p>Already have an account? <Link className="signup" to="/login">Log in</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Forgotpassword;