import React from "react";
import "../cssComponent/Signup.css";
const Signup = () => {
  return (
    <>
      {/* This is the start of login */}
      <div
        className="loginBox"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div id="loginSection">
          <h1 className="LoginText">Login</h1>
          <h1 className="welcomebacktext">Welcome Back</h1>

          <div className="LoginInputPosition">
            <form>
              <input type="text" placeholder=" Email" name="emailinfo"></input>

              <input
                type="text"
                placeholder=" Password"
                name="passwordinfo"
              ></input>
            </form>
          </div>

          <h1 id="SignupAccounttext">
            Don't have an account ?{" "}
            <span
              onClick={() => {
                document.getElementById("loginSection").style.display = "none";
                document.getElementById("SignupSection").style.display =
                  "block";
              }}
              style={{ color: "#E5E5E5", cursor: "pointer" }}
            >
              Sign up
            </span>
          </h1>
          <div id="LoginButtonDiv">
            <button id="LoginButton">Login</button>
          </div>
        </div>
        {/* This is the start of SignUp */}
        <div id="SignupSection">
          <h1 className="SignupText">Sign Up</h1>
          <div className="SignupPosition">
            <form>
              <input
                placeholder=" Name"
                type="text"
                name="SUsernameinfo"
              ></input>

              <input placeholder=" Email" type="text" name="Semailinfo"></input>

              <input
                placeholder=" Password"
                type="text"
                name="Spasswordinfo"
              ></input>

              <input
                placeholder=" Phonenumber"
                name="Snumberinfo"
                type="text"
              ></input>
            </form>
          </div>
          <h1 id="LoginAccounttext">
            Have an account ?{" "}
            <span
              onClick={() => {
                document.getElementById("loginSection").style.display = "block";
                document.getElementById("SignupSection").style.display = "none";
              }}
              style={{ color: "#E5E5E5", cursor: "pointer" }}
            >
              {" "}
              Login
            </span>
          </h1>
          <div id="SignupButtonDiv">
            <button id="SignupButton"> Signup</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
