import {Link } from "react-router-dom";

function Login() {
    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <h1>Welcome Back !</h1>
                <form className="login-form">
                    <div className="field">
                        <input id="username" type="name" name="user" placeholder="Phone number or email" />
                        <label htmlFor="username">Phone number or email</label>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="login-button" name="login" title="login">Log In</button>
                    <br></br><br/>
                    <div className="other">
                        <Link className="forgot-password" to="/forgotpassword">Forgot password?</Link>
                    </div>
                </form>
            </div>
            <div className="box">
                <p>Don't have an account? <Link className="signup" to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
}

export default Login;