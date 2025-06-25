import React from "react";
import Navbar from "../Navbar/Navbar";
import Nav_Links from "../Home/Nav_Links";
import "./About.css";
const About = () => {
  return (
    <>
      <header className="hero2">
        <Navbar />
        <div class="overlay-box">
          <h2>Connecting Creators, One Session at a Time</h2>
          <p class="para">
            We bring together Artists, Technicians, and Studios to simplify
            creative collaboration in the entertainment industry.
          </p>
        </div>
      </header>

      {/*---------------- section Mission --------------------*/}

      <section className="mission">
        <h2>Our Mission</h2>
        <p className="para">
          We’re here to revolutionize how music artists, photographers, and
          studio owners connect. No more scattered bookings or missed
          collaborations — just seamless networking, clear communication, and
          stress-free sessions. Whether you’re an upcoming artist, a seasoned
          technician, or a studio offering space — our platform ensures everyone
          is in sync.
        </p>
      </section>
      {/* ---------------   Offers Section ------------ */}
      <section class="offers">
        <h2>What We Offer</h2>
        <div class="offers-menu">
          <div class="card">
            <div class="title-box">
              <h5>Artist</h5>
              <img src="/images/artist-symbol.png" alt="Artist symbol" />
            </div>
            <ul>
              <li>Discover studios that fit your vibe and your budget.</li>
              <li>Book sessions with Confidence.</li>
            </ul>
          </div>
          <div class="card">
            <div class="title-box">
              <h5>Technician</h5>
              <img src="/images/technician-symbol.png" alt="Technician symbol" />
            </div>
            <ul>
              <li>Get matched with artists needing your skills.</li>
              <li>Set your rates, and let your work speak.</li>
            </ul>
          </div>
          <div class="card">
            <div class="title-box">
              <h5>Studio Owner</h5>
              <img src="/images/owner-symbol.png" alt="Owner symbol" />
            </div>
            <ul>
              <li>Showcase your studio, manage availability and earn.</li>
              <li>List gear, rules and extras up front.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* *****************  Our story section ********************* */}
      <section class="our-story">
        <div class="story-container">
          <div class="story-text">
            <h2>Our Story</h2>
            <p>
              We saw a gap in the creative process. Artists struggled to find
              reliable studios. Photographers had no way to connect with
              potential clients. Studios lacked exposure and coordination. So we
              built a platform where these three forces could work together in
              harmony — with trust, clarity, and technology at their side.
            </p>
          </div>
          <div class="story-image">
            <img
              src="/images/success.jpg"
              alt="Person celebrating with a backdrop of cityscape"
            />
          </div>
        </div>
      </section>

                  {/* *********************  Links Navigation Section ****************** */}  
            
            <Nav_Links />
    </>
  );
};

export default About;
