import React from 'react'
import Logo2 from "../../assets/Logo2.png"
import "./Nav_Links.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
const Nav_Links = () => {
  return (
    <>
            {/* *********************  Links Navigation Section ****************** */}  

    <section className="navigation-links" >
    <div className="navigation-box">
    <div className="box-child-1">
        
            <img src={Logo2} alt="logo" />
        
    </div>
    <div className="box-child-2">
        <h5>
            Company
        </h5>
        <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/howitworks">How It Works</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog/News</a></li>
            <li><a href="#">Contact</a></li>
            
        </ul>
    </div>
    <div className="box-child-2">
        <h5>
            Explore
        </h5>
        <ul>
            <li><a href="#">Browse Studios</a></li>
            <li><a href="#">Browse Technicians</a></li>
            <li><a href="#">Browse Artists</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Popular Locations</a></li>
            
        </ul>
    </div>
    <div className="box-child-3">
        <h5>Subscribe to our Newsletter</h5>
        <div className="ip-box">
            <input type="text" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>

        </div>
        <p>Subscribe to our monthly newsletter to get latest
            news
        </p>
        <div className="social-media">
      <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
      <a href="https://www.facebook.com/" target='_blank'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
      <a href="https://www.gmail.com/" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
      
        </div>
        
    </div>
</div>
</section> 
    </>
  )
}

export default Nav_Links