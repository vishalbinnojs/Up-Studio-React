import React from 'react'
import {Link} from "react-router-dom";
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
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/howitworks">How It Works</Link></li>
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Blog/News</Link></li>
            <li><Link to="/FAQs-Contact">Contact</Link></li>
            
        </ul>
    </div>
    <div className="box-child-2">
        <h5>
            Explore
        </h5>
        <ul>
            <li><Link to="/view">Browse Studios</Link></li>
            <li><Link to="/technician">Browse Technicians</Link></li>
            <li><Link to="artist">Browse Artists</Link></li>
            <li><Link to="#">Search</Link></li>
            <li><Link to="#">Popular Locations</Link></li>
            
        </ul>
    </div>
    <div className="box-child-3">
        <h5>Subscribe to our Newsletter</h5>
        <div className="ip-box">
            <input type="text" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>

        </div>
        <p className="subscribe">Subscribe to our monthly newsletter to get latest
            news
        </p>
        <div className="social-media">
      <Link to="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg"/></Link>
      <Link to="https://www.facebook.com/" target='_blank'><FontAwesomeIcon icon={faFacebook} size="lg" /></Link>
      <Link to="https://www.gmail.com/" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="lg" /></Link>
      
        </div>
        
    </div>
</div>
</section> 
    </>
  )
}

export default Nav_Links