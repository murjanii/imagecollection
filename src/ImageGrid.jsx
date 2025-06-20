import React from "react";
import "./ImageGrid.css";

const images = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
  "https://picsum.photos/300/200?random=4",
  "https://picsum.photos/300/200?random=5",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",
  "https://images.unsplash.com/photo-1745750747234-9584cbd65358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1746457002269-106424d702e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/18076423/pexels-photo-18076423/free-photo-of-delicious-juicy-pears.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/28942648/pexels-photo-28942648/free-photo-of-assorted-spices-at-a-marseille-market.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/30106229/pexels-photo-30106229/free-photo-of-vibrant-nyhavn-harbor-in-copenhagen-denmark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://picsum.photos/id/237/200/300?random=6",
  "https://picsum.photos/seed/picsum/200/300?random=7",
  "https://images.pexels.com/photos/18308288/pexels-photo-18308288/free-photo-of-lac-d-allos.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
];

export default function ImageGrid() {
  const handleViewClick = (index) => {
    alert(`Viewing image ${index + 1}`);
  };

  return (
    <div className="grid-container">
      {images.map((src  , index) => (
        <div className="image-card" key={index}>
          <div className="image-wrapper">
            <img src={src} alt={`img-${index}`} className="grid-image" />
            <div className="overlay">
              <button className="overlay-button" onClick={() => handleViewClick(index)}>
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
