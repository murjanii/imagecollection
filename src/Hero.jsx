import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>What's New</h2>
        <button className="explore-btn">Explore Now &gt;</button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Hero"
        className="hero-image"
      />
    </div>
  );
}