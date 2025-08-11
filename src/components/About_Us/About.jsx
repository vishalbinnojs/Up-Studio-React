import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";

const offerList = [
  {   id:1,
      title:"Artist",
      text1:"Discover studios that fit your vibe and your budget.",
      text2:"Book sessions with Confidence.",
      img:"/images/artist-symbol.png"
  },
  {   id:2,
      title:"Technician",
      text1:"Get matched with artists needing your skills.",
      text2:"Set your rates, and let your work speak.",
      img:"/images/technician-symbol.png"
  },
  {   id:3,
      title:"Studio Owner",
      text1:"Showcase your studio, manage availability and earn.",
      text2:"List gear, rules and extras up front.",
      img:"/images/owner-symbol.png"
  }
]
const OfferCard = ({title,img,text1,text2}) =>{
  return(
    <>
    <div class="card">
            <div class="title-box">
              <h4>{title}</h4>
              <img src={img} alt="Artist symbol" />
            </div>
            <ul>
              <li style={{marginBottom:"0.5rem"}}>{text1}</li>
              <li>{text2}</li>
            </ul>
          </div>
    </>
  )
}
const About = () => {
  return (
    <>
      <header className="hero2">
        <Navbar />
        <div class="overlay-box">
          <h1>Connecting Creators, One Session at a Time</h1>
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
          {offerList.map((offer)=>
          <OfferCard key={offer.id} {...offer}/>
          )}
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
            
            {/* <Nav_Links /> */}
    </>
  );
};

export default About;
