import React from "react";

import Hero from "./Hero.jsx";
import Navbar from './navbar.jsx';
import ImageGrid from './Imagegrid.jsx';
import PopularSection from './Popularsection.jsx';
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