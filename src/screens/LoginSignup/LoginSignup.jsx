import React, { useState } from "react";
import "./LoginSignup.css";
import { IoPerson, IoMail, IoLockClosed, IoMaleFemale } from "react-icons/io5";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action} </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <IoPerson className="form-icon" />
          <input type="text" placeholder="Username" />
        </div>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <IoMail className="form-icon" />
            <input type="email" placeholder="Email id" />
          </div>
        )}
        <div className="input">
          <IoLockClosed className="form-icon" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <IoMaleFemale className="form-icon" />
            <input type="gender" placeholder="Gender" />
          </div>
        )}
      </div>
      {action === "Signup" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot password?<span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Signup");
          }}
        >
          Signup
        </div>
        <div
          className={action === "Signup" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
