import React, { useState } from "react";
import "./Artist.css";
import Navbar from "../Navbar/Navbar";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const bookings = [
  {
    studio: "The Studio One",
    date: "August 1, 2025",
    time: "10:00 AM - 11:00 AM",
    requirements: "Guitarist, Drummer, Recording Engineer",
  },
  {
    studio: "Shepperton Studios",
    date: "August 5, 2025",
    time: "10:00 AM - 11:00 AM",
    requirements: "Sound Technicians",
  },
  {
    studio: "Kennington Podcast Studios",
    date: "August 10, 2025",
    time: "10:00 AM - 11:00 AM",
    requirements: "Sound Technicians, Recording Engineer",
  },
];

const Technician = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  return (
    <>
      <Navbar />
      <div className="profile-banner profile-banner2"></div>
      <div className="profile-box profile-box2">
        <div className="profile-image profile-image2"></div>
        <div className="profile-text">
          <h1>John Walker</h1>
          <span>Technician </span>
        </div>
      </div>
      {/*********  About Section ************/}
      <section>
        <div className="about-container">
          <div className="about">
            <h2>About</h2>
            <p>
              I'm a vocal artist with a deep passion for storytelling through
              music. My journey began in London, and over the years, I've
              explored styles ranging from soul and R&B to pop and experimental
              sounds. I believe in the power of emotion in every note, and I
              strive to connect with listeners on a personal level through my
              voice. Whether I'm in the studio, performing live, or
              collaborating with other creatives, I always aim to bring
              authenticity and feeling to my work. Music is not just what I
              do—it's who I am. Let's create something that moves people.
            </p>
          </div>
          <div className="social-links">
            <h3>Social Links</h3>
            <div className="social-box">
              <div className="social-item">
                <FontAwesomeIcon
                  icon={faSpotify}
                  style={{ color: "green", marginRight: "0.8rem" }}
                  size="xl"
                />

                <a href="#">TechJohnWalker_spotify</a>
              </div>

              <div className="social-item item-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "purple", marginRight: "1rem" }}
                  size="xl"
                />
                <a href="#">TechJohnWalker_instagram</a>
              </div>

              <div className="social-item">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "red", marginRight: "0.6rem" }}
                  size="xl"
                />
                <a href="#">TechJohnWalker_youtube</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}

      <section>
        <div className="bookings-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "bookings" ? "active" : ""}`}
              onClick={() => setActiveTab("bookings")}
            >
              My Bookings
            </div>
            <div
              className={`tab ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </div>
          </div>

          <div className="tab-content">
            {/* Booking content */}
          {activeTab === "bookings" && (
              <div>
                <h3 className="section-title">Upcoming Bookings</h3>

                {bookings.map((item, index) => (
                  <div className="booking-card" key={index}>
                    <div className="booking-info">
                      <strong>{item.studio}</strong>
                      <p style={{ color: "#444" }}>
                        {`Date: ${item.date}\u00A0\u00A0\u00A0\u00A0 Time: ${item.time}`}
                      </p>
                    </div>

                    <div className="booking-requirements">
                      <small>Technician Requirements</small>
                      <p style={{ color: "#444" }}>{item.requirements}</p>
                    </div>
                  </div>
                ))}
              </div>  
              )}     
          </div>

          {/* Setting content */}
          {activeTab === "settings" && (
            <div>
              <h3 className="section-title">Settings</h3>
            </div>
          )}
        </div>
      </section>

    </>
  );
};

export default Technician;
