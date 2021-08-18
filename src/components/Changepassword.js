import "./css/Log.css";

function Changepassword() {
    return (
        <div className="container">
            <div className="box">
                <div className="heading"></div>
                <br /><br />
                <form className="login-form" action="./log.php" method="POST">
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" />
                        <label htmlfor="password">Old Password</label>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" />
                        <label htmlfor="password">New Password</label>
                    </div>
                    <div className="field">
                        <input id="password" name="loginPassword" type="password" placeholder="password" />
                        <label htmlfor="password">Retype New Password</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Changepassword;