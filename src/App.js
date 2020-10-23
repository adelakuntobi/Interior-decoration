import React from 'react';
import './App.scss';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery';
import Header from './sections/Header';
import Navbar from './sections/Navbar';
import Services from './sections/Services';


function App() {

  return (
    <div className="App">
      <Navbar className="" />
      <Header />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
