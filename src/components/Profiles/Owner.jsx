import React, { useState } from "react";
import "./Artist.css";
import Navbar from "../Navbar/Navbar";
import Nav_Links from "../Home/Nav_Links";

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

const Owner = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  return (
    <>
      <Navbar />
      <div className="profile-banner profile-banner3"></div>
      <div className="profile-box profile-box2">
        <div className="profile-image profile-image2 profile-image3"></div>
        <div className="profile-text">
          <h1>Breden Eich</h1>
          <span>Studio Owner </span>
        </div>
      </div>
      {/*********  About Section ************/}
      <section>
        <div className="about-container">
          <div className="about">
            <h2>About</h2>
            <p>
              I m a studio owner driven by a passion for providing artists and technicians with the perfect creative space. Based in Amsterdam, I ve built a studio that
blends top tier equipment with a warm, inspiring atmosphere. From vocal booths to mixing consoles, every element is designed to support
productivity and artistic flow. I understand the importance of comfort, acoustics, and seamless scheduling, and I strive to make each session smooth
and rewarding. Whether you re recording a debut single or a full album, my goal is to offer a professional environment where your ideas can thrive.
Let s bring your vision to life.
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

                <a href="#">BredanEich_spotify</a>
              </div>

              <div className="social-item item-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "purple", marginRight: "1rem" }}
                  size="xl"
                />
                <a href="#">BredanEich_instagram</a>
              </div>

              <div className="social-item">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "red", marginRight: "0.6rem" }}
                  size="xl"
                />
                <a href="#">BredanEich_youtube</a>
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
      <Nav_Links />
    </>
  );
};

export default Owner;
