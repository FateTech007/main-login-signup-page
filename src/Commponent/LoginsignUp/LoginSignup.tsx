import React from "react";
import "../LoginsignUp/LonginSignup.css";
import UserEmail from "../Assets/email.png";
import UserPassword from "../Assets/password.png";
import User from "../Assets/person.png";
const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={User} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={UserEmail} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={UserPassword} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forget-password">
        <p>
          Lost password? <span>Click here!</span>
        </p>
      </div>
      <div className="buttons">
        <button>SignUp</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;
