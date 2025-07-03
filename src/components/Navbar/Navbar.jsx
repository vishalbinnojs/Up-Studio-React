import React, { useState,useRef, useEffect } from "react";
import {useLocation} from "react-router-dom";
import logo from "../../assets/logo.png";
import Logo2 from "../../assets/Logo2.png";
import "./Navbar.css";



const Navbar = () => {
  const [isOpen,setIsOpen] =useState(false);
  const navRef = useRef(null);
  // Transparent Navbar
  const location = useLocation();
 const [isTransparent,setIsTransparent] = useState(true);
 
// Logo switch
 const Logo = ['/','/about'].includes(location.pathname) ?  logo : Logo2;

 // Active color on desired link
 const isActive = (path) => location.pathname === path;

useEffect(() => {
  if(location.pathname === '/' || location.pathname === '/about'){
    setIsTransparent(true);
  }else{
    setIsTransparent(false);
  }
}, [location]);


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
    
     <nav ref={navRef} className = {`navbar ${isTransparent ? 'transparent':'white'}`}>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className ={`links ${isOpen ? 'show':''}`}>
        <a className ={`${isTransparent ? 'white':'black'} ${isActive('/') ? 'active':''}` } href="/" onClick={()=>setIsOpen(false)}>Home</a>
        <a className ={`${isTransparent ? 'white':'black'} ${isActive('/howitworks') ? 'active':''}`}href="/howitworks" onClick={()=>setIsOpen(false)}>How It Works</a>
        <a className ={`${isTransparent ? 'white':'black'} ${isActive('/featrues') ? 'active':''}`}href="/features" onClick={()=>setIsOpen(false)}>Features</a>
        <a className ={`${isTransparent ? 'white':'black'} ${isActive('/FAQs') ? 'active':''}`}href="/FAQs" onClick={()=>setIsOpen(false)}>FAQs</a>
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
