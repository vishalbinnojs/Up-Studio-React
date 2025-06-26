import React, { useState } from "react";
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
            <img src="/images/logo.png" alt="logo" />
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
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            <h6 className="login-with">
              <span>Or login with</span>
            </h6>
            <a className="google-login" href="#">
              <img src="/images/google-icon.svg" alt="Google logo" />
              Google
            </a>
            <p className="p-text">
              Don’t have account? <a href="">SignUp now</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
