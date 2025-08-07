import React, { useState,useRef, useEffect } from "react";
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import "./Navbar.css";



const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  console.log(isOpen)
  const navRef = useRef(null);
  console.log(navRef)
  // Transparent Navbar
  const location = useLocation();
  console.log(location)
 const [isTransparent,setIsTransparent] = useState(true);
 
// Logo switch
 const Logo = ['/','/about'].includes(location.pathname) ?  logo1 : logo2;

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
        // checks if navRef is attached to the DOM element nav && !navRef.current checks if click and scroll is not inside the nav element, otherwise it closes the menu. It should be outside the nav element.
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
        <Link className ={`${isTransparent ? 'white':'black'} ${isActive('/') ? 'active':''}` } to="/" >Home</Link>
        <Link className ={`${isTransparent ? 'white':'black'} ${isActive('/howitworks') ? 'active':''}`} to="/howitworks" >How It Works</Link>
        <Link className ={`${isTransparent ? 'white':'black'} ${isActive('/featrues') ? 'active':''}`} to="/features" >Features</Link>
        <Link className ={`${isTransparent ? 'white':'black'} ${isActive('/FAQs-Contact') ? 'active':''}`} to="/FAQs-Contact" >FAQs</Link>
      </div>
      <div className={`auth ${isOpen ? 'show':''}`}>
        <Link to="/login" ><button className="login">Login</button></Link>
         <Link to="/signup" ><button className="signup">SignUp</button></Link>  
        <div>
          <Link className="profile-link" to="#">
            <i 
              className="ri-account-circle-line profile-img"></i>
            </Link>
        </div>
      </div>
      <i className="ri-menu-fold-line" id="menu-toggle" onClick={toggleMenu}></i>
    </nav>
        
    
    </>
  );
};
export default Navbar;
