import React from "react";
import Navbar from "../Navbar/Navbar";
import Nav_Links from "./Nav_Links";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <div className="hero">
          <div className="search-Container">
            <div className="text">
              <h2>Where Artists, Technicians & Studios Meet to Create</h2>
              <p className="para">
                Book your next creative session - smart,synchronized, and
                studio-ready.
              </p>
            </div>
            <form className="search-bar" action="#" method="GET">
              <div className="search-field">
                <i className="ri-map-pin-line"></i>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  required
                />
              </div>

              <div className="divider"></div>

              <div className="search-field">
                <i className="ri-calendar-2-line"></i>
                <input type="date" name="date" required />
              </div>

              <div className="divider"></div>

              <div className="search-field">
                <i className="ri-timer-line"></i>
                <input type="time" name="time" required />
              </div>

              <button type="submit" className="search-button">
                Search
              </button>
            </form>

            <p className="para">
              Find the perfect Studio. Connect with creators, and bring your
              vision to life.
            </p>
          </div>
        </div>
      </header>

      <main>
        {/*   ************  Studio Box Section ***************   */}
        <section className="studio-box">
          <div className="title">
            <h3>Our Feature Listing</h3>
            <span>View All</span>
          </div>
          <div className="studio-items-box">
            <div className="item item1">
              <div className="img-box">
                <img src="/images/img1.png" alt="" />
              </div>
              <div className="detail-box">
                <div className="rating-box">
                  <span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    (5)
                  </span>
                  <span className="rating">68 Ratings</span>
                </div>
                <div className="studio-info">
                  <h5>Icon Studio Inn</h5>
                  <p>
                    Artists search for available studios based on date, time and
                    gear. They request to join a session or create a new one.
                  </p>
                  <h6>{"\u20AC"} 99.00</h6>
                </div>
              </div>
            </div>

            <div className="item item2">
              <div className="img-box">
                <img src="/images/Studio 2.png" alt="" />
              </div>
              <div className="detail-box">
                <div className="rating-box">
                  <span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    (5)
                  </span>
                  <span className="rating">68 Ratings</span>
                </div>
                <div className="studio-info">
                  <h5>Soundlab Studios</h5>
                  <p>
                    Artists search for available studios based on date, time and
                    gear. They request to join a session or create a new one.
                  </p>
                  <h6>{"\u20AC"} 99.00</h6>
                </div>
              </div>
            </div>
            <div className="item item3">
              <div className="img-box">
                <img src="/images/img1.png" alt="" />
              </div>
              <div className="detail-box">
                <div className="rating-box">
                  <span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    (5)
                  </span>
                  <span className="rating">68 Ratings</span>
                </div>
                <div className="studio-info">
                  <h5>Diamond Studio</h5>
                  <p>
                    Artists search for available studios based on date, time and
                    gear. They request to join a session or create a new one.
                  </p>
                  <h6>{"\u20AC"} 99.00</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ************  features section  ************** */}
        <section className="features">
          <h3>More Than a Booking Tool - It's a Creative Network</h3>
          <div className="content-box">
            <div className="content1">
              <div className="txts">
                <h5>
                  <img
                    src="/images/calender.png"
                    alt="calender"
                    width="15px;"
                  />
                  Smart Calender Sync
                </h5>
                <p>
                  Book sessions with synced schedule for artists, techs and
                  studios.
                </p>
              </div>
              <div className="txts">
                <h5>
                  <img
                    src="/images/handshake.png"
                    alt="handshake"
                    width="15px;"
                    style={{ backgroundColor: "#FD8000", marginRight: "3px" }}
                  />
                  Triple-Sided Matching
                </h5>
                <p>Sessions are confirmed only when all parties agree.</p>
              </div>
              <div className="txts">
                <h5>
                  <img
                    src="/images/messaging.png"
                    alt="messaging"
                    width="15px;"
                  />
                  Integrated Messaging
                </h5>
                <p>Sessions are confirmed only when all parties agree.</p>
              </div>
              <div className="txts">
                <h5>
                  <img src="/images/rate.png" alt="label" width="15px;" />
                  Flexible Rates
                </h5>
                <p>Studio & technician hourly pricing made transparent.</p>
              </div>
              <div className="txts">
                <h5>
                  <img
                    src="/images/headphone.png"
                    alt="headphone"
                    width="12px;"
                    style={{
                      backgroundColor: "transparent",
                      mixBlendMode: "color-burn",
                      marginRight: "3px",
                    }}
                  />
                  Gear-Ready Studios
                </h5>
                <p>View equipment before booking - no surprises.</p>
              </div>
              <div className="txts">
                <h5>
                  <img
                    src="/images/notification-icon.png"
                    alt="notification"
                    width="20px;"
                    style={{
                      backgroundColor: "transparent",
                      mixBlendMode: "color-burn",
                    }}
                  />
                  Notifications & Alerts
                </h5>
                <p>Real-time updates on session status and new requests.</p>
              </div>
            </div>

            <div className="content2">
              <img src="/images/fle-1.png" alt="" />
            </div>
          </div>
        </section>

        {/* ***********  booking section  ************ */}

        <section className="booking-box">
          <h3>How Booking Works - Smart, Synchronized, Seamless</h3>
          <div className="main-box">
            <div className="box">
              <div className="img-box">
                <img src="/images/music-icon.png" alt="" />
              </div>

              <h5>Step 1: The Artist Starts</h5>

              <p>
                Artists search for available studios based on the date, time and
                gear. They request to join a session or create a new one.
              </p>
            </div>

            <div className="box">
              <div className="img-box">
                <img src="/images/headphone-icon.png" alt="" />
              </div>

              <h5>Step 1: The Technician Joins</h5>

              <p>
                Technicians explore sessions that have an artist or available
                slots. They accept and request to join the same session.
              </p>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="/images/todo-icon.png" alt="" />
              </div>

              <h5>Step 1: The Artist Starts</h5>

              <p>
                Once a studio,artist, and technician are all matched in the same
                time slot, the session is auto-confirmed or maually approved by
                the studio.
              </p>
            </div>
          </div>
        </section>
        {/* *****************  Rating Section********************** */}
        <section className="rating-section">
          <h3>Trusted by Creators & Studios Alike</h3>
          <div className="rating-box">
            <div className="box">
              <div className="content-box2">
                <div className="rate">
                  <span style={{ display: "block" }}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </span>
                  <h6>
                    Alex,
                    <span style={{ fontSize: "1em", fontWeight: "400" }}>
                      Rap Artist
                    </span>
                  </h6>
                </div>

                <img src="/images/quotes-icon.png" alt="" />
              </div>
              <p>
                "Finally a platform that gets how artists, engineers, and
                studios work together. Booking is smoother than ever!"
              </p>
            </div>

            <div className="box">
              <div className="content-box2">
                <div className="rate">
                  <span style={{ display: "block" }}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </span>
                  <h6>
                    Nina,
                    <span style={{ fontSize: "1em", fontWeight: "400" }}>
                      Sound Technician
                    </span>
                  </h6>
                </div>

                <img src="/images/quotes-icon.png" alt="" />
              </div>
              <p>
                "I used to spend hours coordinating sessions. Now it's just a
                few clicks and I'm booked!"
              </p>
            </div>

            <div className="box">
              <div className="content-box2">
                <div className="rate">
                  <span style={{ display: "block" }}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </span>
                  <h6>
                    Diamond Studios,
                    <span style={{ fontSize: "1em", fontWeight: "400" }}>
                      Studio Owner
                    </span>
                  </h6>
                </div>

                <img src="/images/quotes-icon.png" alt="" />
              </div>
              <p>
                "This helps us keep our studio calender full and manage all
                incoming requests in one place."
              </p>
            </div>
          </div>
        </section>

        {/* *********************  Links Navigation Section ****************** */}

        <Nav_Links />
      </main>
    </>
  );
};

export default Home;
