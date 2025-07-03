import React,{useState} from 'react'
import logo from "../../assets/logo.png";
import "./Signup.css";
import Dropdown from "./Dropdown";

const Signup = () => {
  const [showPassword,setShowPassword] = useState(false);

  const togglePassword = ()=>{
    setShowPassword((prev) => !prev);

   
  }
  return (
    
    <>
          <div className="container">
        <div className="box1">
          <div className="logo2">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="box2">
          <div className="form">
            <form action="">
              <h2>Register to UP</h2>
              <input className="input-field" type="text" placeholder="First Name" required />
              <input className="input-field" type="text" placeholder="Last Name" required />
              <input className="input-field" type="email" placeholder="Email" required />
              <div className="password-container">
                <input className="input-field"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  required
                />
                <span className="eye-icon" onClick={togglePassword}>
                  {showPassword ? "🙈" : "👁️"}
                </span>
             </div>
                 
                  <Dropdown />

              <button type="submit" className="signup-btn">
                Signup
              </button>
            </form>
           
            <p className="p-text">
              By clicking 'Sign up' you are in agreement with our <a href="">Terms of use</a>.
            </p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Signup;