import React from "react";
import Gallery from "./components/Gallery";
// import logo from './logo.svg';
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Gallery></Gallery>
      <Services></Services>
    </div>
  );
}

export default HomePage;
