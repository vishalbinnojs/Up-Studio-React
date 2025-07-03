import React from "react";
import "./How_It_Works.css";
import Navbar from "../Navbar/Navbar";
import Nav_Links from "../Home/Nav_Links";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGear,faFolderOpen,faWrench,faHandshake,faMagnifyingGlass,faUsers, faCalendarDays,faBuilding } from '@fortawesome/free-solid-svg-icons';
const How_It_Works = () => {
  return (
    <>
      <Navbar />
      <section className = "booking-details">
        <div className="booking-text">
          <h1>How Booking Works <br /> — <br />Seamless & Smart</h1>
     
          <p>
            We connect artists, technicians, and studio owners through <br />
            synchronized bookings. Here’s how you make it happen.
          </p>
        </div>
        <div className="box">
          <img className ="profile-img" src="/images/artist-symbol.png" alt="guitar" />
          <h2>For Artists:</h2>
          <ul className="list">
            <li className="list-items"><FontAwesomeIcon icon={faMagnifyingGlass} /> Browse Studios – Use filters like location, price, equipment.</li>
            <li className="list-items"><FontAwesomeIcon icon={faUsers} />See Available Technicians – Choose who you’d like to work with.</li>
            <li className="list-items"><FontAwesomeIcon icon = {faCalendarDays} />Join a Slot – Send a request to match your time.</li>
          </ul>
        <div className="btn-box">
          <button className="btn">GET STARTED ⟶</button>
        </div>
        </div>

        <div className="box">
          <img className ="profile-img" src="/images/technician-symbol.png" alt="technician" />
          <h2>For Technicians:</h2>
          <ul className="list">
            <li className="list-items"> <FontAwesomeIcon icon={faFolderOpen} />Explore Studios – Filter by artist presence or studio setup.</li>
            <li className="list-items"><FontAwesomeIcon icon={faHandshake} /> <span>Accept Artist Requests – Once both agree, session is confirmed.</span></li>
            <li className="list-items"> <FontAwesomeIcon icon={faWrench} />Prepare Equipment Needs – Based on studio setup.</li>
          </ul>
        <div className="btn-box">
          <button className="btn">GET STARTED ⟶</button>
        </div>
        </div>

        <div className="box">
           
          <img className ="profile-img" src="/images/owner-symbol.png" alt="owner" />
          <h2>For Studio Owners:</h2>
          <ul className="list">
            <li className="list-items"><FontAwesomeIcon icon={faBuilding} /> Add Studio Details – Rules, equipment, price.</li>
            <li className="list-items"><FontAwesomeIcon icon = {faCalendarDays} /> Add Time Slots – Set up daily/hourly availability.</li>
            <li className="list-items"><FontAwesomeIcon icon={faGear} /> Enable Auto or Manual Confirm – Choose how bookings finalize.</li>
          </ul>
        <div className="btn-box">
          <button className="btn">GET STARTED ⟶</button>
        </div>
        </div>
        
      </section>
      <section className="booking-flow">
        <img src="/images/booking-flow.png" alt="booking flow" />
      </section>

      <Nav_Links />
    </>
  );
};

export default How_It_Works;
