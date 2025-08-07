import React from "react";
import Navbar from "../Navbar/Navbar";
import StudioCard from "./StudioCard"
import "./View.css";


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
  {
    id: 4,
    name: "Emerald Studio Inn",
    price: 99,
    rating: 4.5,
    reviews: 68,
    image: "/images/Studio 4.png",
  },
  {
    id: 5,
    name: "Diamond Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 2.png",
  },
  {
    id: 6,
    name: "Ruby Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 5.png",
  },
  {
    id: 7,
    name: "Emerald Studio Inn",
    price: 99,
    rating: 4.5,
    reviews: 68,
    image: "/images/Studio 4.png",
  },
    {
    id: 8,
    name: "Icon Studio Inn",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 1.png", 
  },
   {
    id: 9,
    name: "Ruby Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 5.png",
  },
    {
    id: 10,
    name: "Emerald Studio Inn",
    price: 99,
    rating: 4.5,
    reviews: 68,
    image: "/images/Studio 4.png",
  },
    {
    id: 11,
    name: "Icon Studio Inn",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 1.png", 
  },
   {
    id: 12,
    name: "Diamond Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 2.png",
  },
    {
    id: 13,
    name: "Emerald Studio Inn",
    price: 99,
    rating: 4.5,
    reviews: 68,
    image: "/images/Studio 4.png",
  },
  {
    id: 14,
    name: "Icon Studio Inn",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 1.png", 
  },
   {
    id: 15,
    name: "Diamond Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 2.png",
  },
   
  {
    id: 16,
    name: "Ruby Studio",
    price: 99,
    rating: 5,
    reviews: 68,
    image: "/images/Studio 5.png",
  },
];

// const StudioCard = ({ image, name, rating, reviews, price }) => {
//   return (
//     <div className="studio-card">
//       <div className="image-wrapper">
//       <img src={image} alt={name} className="studio-image" loading="lazy"/>
// <div className="studio-overlay"></div>
//       </div>
//       <div className="studio-details">
//         <div className="studio-rating">
          
//           <span className="">{"★".repeat(Math.floor(rating))}({rating})</span>
//           <span className="studio-reviews">{reviews} Ratings</span>
//         </div>
//         <h3 className="studio-name">{name}</h3>
//         <p className="studio-text">
//           Artists search for available studios based on date, time, and gear. They request to join a session or create a new one.
//         </p>
//         <p className="studio-price">€ {price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

function View() {
  return (
    <>
    <Navbar />
     <div className="studios-page">
      <h2 className="title">Book the perfect studio</h2>
      <div className="studio-grid ">
        {studioList.map((studio) => (
          <StudioCard key={studio.id} {...studio} />
        ))}
      </div>
    </div>
    

    </>
  )
}

export default View;
