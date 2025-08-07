import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import StudioCard from "./StudioCard";
import "./Home.css";

const studioList = [
  {
    id: 1,
    name: "Icon Studio Inn",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 1.png",
  },
  {
    id: 2,
    name: "Diamond Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 2.png",
  },
  {
    id: 3,
    name: "Ruby Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 5.png",
  },
];

const ratingList = [
  {
    id: 1,
    text1: "Alex,",
    text2: "Rap Artist",
    rating: 5,
    para: '"Finally a platform that gets how artists, engineers, and studios work together. Booking is smoother than ever!"',
    img: "/images/quotes-icon.png",
  },
  {
    id: 2,
    text1: "Nina,",
    text2: "Sound Technician",
    rating: 5,
    para: `"I used to spend hours coordinating sessions. Now it's just a few clicks and I'm booked!"`,
    img: "/images/quotes-icon.png",
  },
  {
    id: 3,
    text1: "Diamond Studio,",
    text2: "Studio Owner",
    rating: 5,
    para: '"This helps us keep our studio calender full and manage all incoming requests in one place."',
    img: "/images/quotes-icon.png",
  },
];

const RatingCard = ({ text1, text2, rating, para, img }) => {
  return (
    <>
      <div className="box">
        <div className="content-box2">
          <div className="rate">
            <span style={{ display: "block" }}>
              <span className="star">{"★".repeat(Math.floor(rating))}</span>
            </span>
            <h6>
              {text1}
              <span style={{ fontSize: "1em", fontWeight: "500" }}>
                {" "}
                {text2}
              </span>
            </h6>
          </div>
          <img src={img} alt="quotes" />
        </div>
        <p>{para}</p>
      </div>
    </>
  );
};

const bookingList = [
  {
    id: 1,
    img: "/images/music-icon.png",
    title: "Step 1: The Artist Starts",
    desc: " Artists search for available studios based on the date, time and gear. They request to join a session or create a new one.",
  },
  {
    id: 2,
    img: "/images/headphone-icon.png",
    title: "Step 2: The Technician Joins",
    desc: "Technicians explore sessions that havean artist or available slots. They accept and request to join the same session.",
  },
  {
    id: 3,
    img: "/images/todo-icon.png",
    title: "Step 3: The Studio Syncs",
    desc: "Once a studio, artist, and technician are all matched in the same time slot, the session is auto confirmed or manually approved by the studio.",
  },
];
console.log(bookingList);

const BookingCard = ({ img, title, desc }) => {
  return (
    <>
      
      <div className="box">
        <div className="img-box">
          <img src={img} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <div className="hero">
          <div className="search-Container">
            <div className="text">
              <h1>Where Artists, Technicians & Studios Meet to Create</h1>
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

              <div className="divider">fdvf</div>

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
            <h2>Our Feature Listing</h2>
            <Link to="/view" title="see more">
              View All
            </Link>
          </div>
          <div className="studio-items-box">
            {studioList.map((studio) => (
              <StudioCard key={studio.id} {...studio} />
            ))}
          </div>
        </section>

        {/* ************  features section  ************** */}
        <section className="features">
          <h2>More Than a Booking Tool - It's a Creative Network</h2>
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

        {/* ***********  Booking section  ************ */}

        <section className="booking-box">
          <h2>How Booking Works - Smart, Synchronized, Seamless</h2>
          <div className="main-box">
            {bookingList.map((booking) => {
              return <BookingCard key={booking.id} {...booking} />;
            })}
          </div>
        </section>
      
        {/* *****************  Rating Section********************** */}

        <section className="rating-section">
          <h2>Trusted by Creators & Studios Alike</h2>
          <div className="rating-box">
            {ratingList.map((rating) => (
              <RatingCard key={rating.id} {...rating} />
            ))}
          </div>
        </section>

        {/* *********************  Links Navigation Section ****************** */}
      </main>
    </>
  );
};

export default Home;
