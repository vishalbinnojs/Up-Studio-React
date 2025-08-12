import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./Payment.css";
import Navbar from "../Navbar/Navbar";
const PaymentMain = () => {

  const [payment,setPayment] = useState(false);
  const[showMessage,setShowMessage] = useState(false);

  const successfulPayment = ()=>{
    setShowMessage(!showMessage);
    setPayment(!payment);
  }
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
        <button id="pay-button" onClick={()=>setPayment(!payment)}>{`PAY \u00A0\u00A0\u00A0 € 103.63 Eur`}</button>
       </div>
       
      </section>
  
      {payment &&   <div className="modal-container" onClick={()=>setPayment(!payment)}>
        
        <div className="modal-card" onClick={(e)=>e.stopPropagation()}>
    
      <div className="payment-summary">
        <h2>Payments</h2>
        <div className="summary-box">
          <div className="summary-row">
            <span className="label">Studio:</span>
            <span className="value">Sunset Recording</span>
          </div>
          <div className="summary-row">
            <span className="label">Technician:</span>
            <span className="value">John Doe</span>
          </div>
          <div className="summary-row">
            <span className="label">Date:</span>
            <span className="value">May 15, 2025</span>
          </div>
          <div className="summary-row">
            <span className="label">Time:</span>
            <span className="value">3:00 PM - 6:00 PM</span>
          </div>
          <div className="summary-row">
            <span className="label">Duration:</span>
            <span className="value">3 Hours</span>
          </div>
          <hr />
          <div className="summary-row">
            <span className="label">Studio Fee:</span>
            <span className="value">€ 150</span>
          </div>
          <div className="summary-row">
            <span className="label">Technician Fee:</span>
            <span className="value">€ 60</span>
          </div>
          <div className="summary-row total">
            <span className="label">Total:</span>
            <span className="value">€ 210</span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-method">
        <h3>Payment Method</h3>
        <div className="method-buttons">
          <button className="active">Credit or Debit Card</button>
          <button>PayPal</button>
        </div>
      </div>

      {/* Card Payment */}
      <div className="card-payment">
        <h4>Card Payment</h4>
        <input type="text" placeholder="Cardholder Name" />
        <input type="text" placeholder="Card Number" />
        <div className="row">
          <input type="text" placeholder="MM / YY" />
          <input type="text" placeholder="CVC" />
        </div>
      </div>

      {/* Billing Information */}
      <div className="billing-info">
        <h4>Billing Information</h4>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Billing Address" />
        <div className="row">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Zip / Postal Code" />
        </div>
      </div>

      {/* Confirm Button */}
      <button className="confirm-btn" onClick={successfulPayment}>Confirm and Pay</button>
    </div>
    </div>}
 
 {showMessage && (<div className="message-container" onClick={()=>setShowMessage(!showMessage)}>

  <div className="message-card" onClick={(e)=>e.stopPropagation() }>
  <h2>Thank You!</h2>
  <p>We will notify you once the request is accepted.</p>  
 </div>
 </div>)}

    </>
  );
};

export default PaymentMain;
