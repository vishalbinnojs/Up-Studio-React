import React from 'react'
import "./Nav_Links.css";
const Nav_Links = () => {
  return (
    <>
            {/* *********************  Links Navigation Section ****************** */}  

    <section className="navigation-links" >
    <div className="navigation-box">
    <div className="box-child-1">
        
            <img src="/images/Logo2.png" alt="" />
        
    </div>
    <div className="box-child">
        <h5>
            Company
        </h5>
        <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog/News</a></li>
            <li><a href="#">Contact</a></li>
            
        </ul>
    </div>
    <div className="box-child">
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
        
    </div>
</div>
</section> 
    </>
  )
}

export default Nav_Links