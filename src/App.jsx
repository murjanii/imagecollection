import React from "react";

import Hero from "./Hero.jsx";
import Navbar from './Navbar.jsx';
import ImageGrid from './ImageGrid.jsx';
import PopularSection from './PopularSection.jsx';
import Footer from './Footer.jsx';



import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageGrid />
       <PopularSection /> 
       <Footer />      
    </div>
  );
}
export default App;
