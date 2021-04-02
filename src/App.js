import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import google from "./components/google.png";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { register } from "./apiCalls";

import React, { useContext, useState } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

register("aniketdevarkar98@gmail.com", "1234", "aniket", "devarkar")
  .then((res) => {
    console.log(res.status);
  })
  .catch((err) => console.log(err.message, err.status));

export const WrapperContext = React.createContext({
  user: null,
  token: null,
  isLoggedIn: false,
  logout: () => {},
});

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <header className="App-header image">
          <div>
            <img src={google} />
            <span>GOOGLE DRIVE</span>
          </div>
        </header>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </div>
    </Router>
  );
}

export default App;
