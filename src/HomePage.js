import React from 'react';
import Gallery from './components/Gallery';
// import logo from './logo.svg';
import Header from './components/Header'
import Services from './components/Services';

function HomePage() {
  return (
    <div>
      <Header></Header>
      <section>
        <h2>Bio</h2>
      </section>
      <Gallery></Gallery>
      <Services></Services>
    </div>
  );
}

export default HomePage;
