import React from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function HomePage() {
  return (
    <div>
      <Header></Header>
      {/* <Hero></Hero> */}
      <Gallery></Gallery>
      <Contact></Contact>
      <Services></Services>
      <About></About>
    </div>
  );
}

export default HomePage;
