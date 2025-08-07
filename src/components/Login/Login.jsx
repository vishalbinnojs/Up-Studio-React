import React, { useState } from "react";
import {Link} from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import "./Login.css";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <div className="box1">
          <div className="logo2">
            <img src={logo1} alt="logo" />
          </div>
        </div>
        <div className="box2">
          <div className="form">
            <form action="">
              <h2>Sign in to UP</h2>
              <input type="email" placeholder="Email" required />
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  required
                />
                <span className="eye-icon" onClick={togglePassword}>
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>

              <div className="options">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember Me
                </label>
                <Link to="#">Forgot Password?</Link>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            <h6 className="login-with">
              <span>Or login with</span>
            </h6>
            <Link className="google-login" to="#">
              <img src="/images/google-icon.svg" alt="Google logo" />
              Google
            </Link>
            <p className="p-text">
              Don’t have account? <Link to="/signup">SignUp now</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
