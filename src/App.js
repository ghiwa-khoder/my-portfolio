import React from 'react';
import NavBar from './components/ NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/ Portfolio';
import Contact from './components/Contact';
import './index.css';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <div>
      <NavBar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
        </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;