import React, { useState,useRef, useEffect } from "react";
import "./Navbar.css";



const Navbar = () => {
  const [isOpen,setIsOpen] =useState(false);
  const navRef = useRef(null);

  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  }

  // Handle click Outside
  useEffect(() => {
    const handleClickOutside = (event) =>{
      if(navRef.current && !navRef.current.contains(event.target)){
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener('scroll',handleClickOutside);
    
    // cleanup
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener('scroll',handleClickOutside);
      
    }
  }, [])
  
  
  return (
    <>
    
     <nav  ref={navRef} >
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className ={`links ${isOpen ? 'show':''}`}>
        <a className ="active" href="/" onClick={()=>setIsOpen(false)}>Home</a>
        <a href="/howitworks" onClick={()=>setIsOpen(false)}>How It Works</a>
        <a href="/features" onClick={()=>setIsOpen(false)}>Features</a>
        <a href="/FAQs" onClick={()=>setIsOpen(false)}>FAQs</a>
      </div>
      <div className={`auth ${isOpen ? 'show':''}`}>
        <a href="/login" onClick={()=>setIsOpen(false)}><button className="login">Login</button></a>
         <a href="/signup" onClick={()=>setIsOpen(false)}><button className="signup">SignUp</button></a>  
        <div>
          <a className="profile-link" href="#">
            <i 
              className="ri-account-circle-line profile-img"></i>
            </a>
        </div>
      </div>
      <i className="ri-menu-fold-line" id="menu-toggle" onClick={toggleMenu}></i>
    </nav>
        
    
    </>
  );
};
export default Navbar;
