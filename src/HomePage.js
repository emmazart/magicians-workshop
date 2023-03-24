import React from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Hero from "./components/Hero";

function HomePage() {
  return (
    <div>
      <Header></Header>
      {/* <Hero></Hero> */}
      <Gallery></Gallery>
      <Services></Services>
      <About></About>
    </div>
  );
}

export default HomePage;
