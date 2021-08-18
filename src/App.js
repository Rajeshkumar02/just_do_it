import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Changepassword from "./components/Changepassword";
import Forgotpassword from "./components/Forgotpassword";
import Editprofile from "./components/EditProfile";
import Profile from "./components/Profile"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/changepassword">
            <Changepassword />
          </Route>
          <Route exact path="/forgotpassword">
            <Forgotpassword />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/editprofile">
            <Editprofile />
          </Route>
        </Switch>
      </Router>);
  }
}

export default App;