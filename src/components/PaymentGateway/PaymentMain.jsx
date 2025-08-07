import React from "react";
import {Link} from "react-router-dom";
import "./Payment.css";
import Navbar from "../Navbar/Navbar";
const PaymentMain = () => {
  return (
    <>
      <header className="payment-banner">
      <Navbar />

      </header>
      <section className="payment-section">
        <h2>Online Payment</h2>

        <div className="payment-container">
          <div className="studio-details">
            <div className="img-box">
              <img src="/images/Studio 1.png" alt="Icon Studio Inn" />
              <div className="text-box">
                <span className="deal">Recommend-ed Deal</span>
                <h5>Icon Studio Inn</h5>
              </div>
            </div>
            <div className="more-details">
              <div className="services">
                <span style={{ color: "red" }}>Non-refundable</span>
                <span>Complimentary Wifi</span>
                <Link to="#">More Details</Link>
              </div>
              <div className="services" id="price-tag">
                <span className="price">€ 109.63 Eur</span>
                <span style={{ color: "#111" }}>
                  € 103.63 Eur + Extra Charges
                </span>
              </div>
            </div>

            <div className="studio-btns">
              <button className="same-style">
                Reserve One <br /> Studio
              </button>
              <button className="same-style" id="opaque-btn">
                View More <br />
                Studios
              </button>
            </div>
          </div>
{/* pay with debit or credit card */}
          <div className="form-section">
            <h2>Pay With Credit or Debit Card</h2>
            <form action="">
             <div className="card-info-section">
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <h3>Card Information</h3>

              <div className="form-group">
                <input type="text" placeholder="Card Number" />
              </div>

              <div className="date-group">
                <div className="form-group">
                  <input type="text" placeholder="Date of Issue" />
                </div>
                <div className="form-group">   
                  <input type="text" placeholder="Date of Expiry" />
                </div>
              </div>
            </div>
              <h3>Name on Card</h3>
            <div className="form-group">
              <input type="text" placeholder="Cardholder Name" />
            </div>
              
              <h3> Country</h3>
            <div className="form-group">
              <input type="text" placeholder="Your Country Name" />
            </div>
            </form>
          </div>
        </div>
               <div className="payment-btn-container">
        <button id="pay-button">{`PAY \u00A0\u00A0\u00A0 € 103.63 Eur`}</button>
                </div>
      </section>
    </>
  );
};

export default PaymentMain;
