import React from "react";
import "./StudioCard.css"
 const StudioCard = ({ image, name, rating, reviews, price }) => {
  return (
    <div className="studio-card">
      <div className="image-wrapper">
      <img src={image} alt={name} className="studio-image" loading="lazy"/>
<div className="studio-overlay"></div>
      </div>
      <div className="studio-details">
        <div className="studio-rating">
          
          <span className="">{"★".repeat(Math.floor(rating))}({rating})</span>
          <span className="studio-reviews">{reviews} Ratings</span>
        </div>
        <h3 className="studio-name">{name}</h3>
        <p className="studio-text">
          Artists search for available studios based on date, time, and gear. They request to join a session or create a new one.
        </p>
        <p className="studio-price">€ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default StudioCard;
