import React from "react";
import "./FAQs.css";
import Navbar from "../Navbar/Navbar";

import message from "../../assets/faq-message.png";
import location from "../../assets/faq-location.png";
import time from "../../assets/faq-time.png";

import Nav_Links from "../Home/Nav_Links";

const contactInfo = [
  {
    icon: message,
    title: "Email",
    text: "info@example.com",
  },
  {
    icon: location,
    title: "Address",
    text: "123 Studio Lane Los Angeles, CA 90011",
  },
  {
    icon: time,
    title: "Office Hours",
    text: "Mon-Fri: 9:00am - 5:00pm",
  },
];
const FAQs = () => {
  return (
    <>
      <Navbar />
      <header className="header-image"></header>

      <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="heading-text">Questions or inquiries?</p>
      <p className="heading-text">Get in touch with us.</p>
      </div>

      <div className="main-container">
        {/* contact-container */}
        <div className="contact-container">
          <h2>Contact Information</h2>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-info">
              {info.icon && <img src={info.icon} alt={info.title} width="50px" height="50px" />}
              <div className="text">
                <h3 style={{ marginBottom: "0.4rem" }}>{info.title}</h3>
                <p>{info.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* contact form */}
        <div className="contact-form-container">
          <h2>Contact Form</h2>
          <form className="contact-form">
            <div className="ip-box">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" />
            </div>

            <div className="ip-box">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div className="ip-box">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Related to?" />
            </div>
            <div className="ip-box">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Nav_Links />
    </>
  );
};

export default FAQs;
