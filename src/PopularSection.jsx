import React from "react";
import "./PopularSection.css";

const categories = [
  "Family", "Business", "Jewellery", "Couples", "Wedding", "Farmer", "Kitchen",
  "Doctor", "Celebration", "Office", "Travel", "Shopping", "Education", "Students",
  "Insurance", "Mobile", "Computer", "Food", "Festivals"
];

export default function PopularSection() {
  return (
    <div className="popular-section">
      <div className="why-box">
        <h2>WHY IMAGESBAZAAR?</h2>
        <p>
          India's diversity and complexity can be witnessed through its people, traditions and values
          associated with distinctive regional customs, habits, lifestyle and festivals. That's why
          our content reflects the innate expressions of deep-rooted feelings of individuals through which
          spring their day-to-day actions. From contemporary concepts and ideas to the broadest range of
          categories depicting Indians in virtually all walks of life, age groups and expressions – you will
          find it all here!{" "}
          <a href="#" className="know-more">Know More</a>
        </p>
      </div>

      <div className="search-grid">
        <h3>Popular Searches</h3>
        <div className="search-buttons">
          {categories.map((cat, index) => (
            <button key={index} className="category-btn">{cat}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
