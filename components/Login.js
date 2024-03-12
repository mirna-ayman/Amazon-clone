import React, { useState } from "react";
import Logo from "../images//login-logo.png";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  
} from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    const provider = await new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-signInBtn"
            type="submit"
            onClick={
              email && password
                ? signIn
                : () => alert("Your Email or Password is incorrect!")
            }
          >
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button
            className="login-registerBtn"
            onClick={
              email && password
                ? register
                : () => alert("Please type your email & password")
            }
          >
            Create your Amazon Account
          </button>
          <button className="login-registerBtn" onClick={signInWithGoogle}>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
