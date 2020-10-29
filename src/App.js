import React, { useState } from 'react';
// import { Redirect, Route } from 'react-router-dom';
import './App.scss';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery';
import Header from './sections/Header';
import Navbar from './sections/Navbar';
import Services from './sections/Services';


function App() {
  const [isDark, setIsDark] = useState(false)
  const changeMode = () => {
    if (isDark === true) {
      setIsDark(
        darkness => darkness = false
      )
    }
    else {
      setIsDark(
        darkness => darkness = true
      )
    }
  }
  return (
    <div className="App">
      <div className={isDark ? "darkmode" : ""}>
        <Navbar className="" />
        {/* <Route exact path="/" component={Header} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" /> */}
        {/* <Route render={() => <h1>404: page not found</h1>} /> */}
        <Header />
        <About />
        <Gallery />
        <Services />
        <Contact />
        <Footer />
        <h1 className={isDark ? "text-black fixed bg-gray-100 bottom-0 right-0 py-4 px-10 cursor-pointer" :"fixed bg-black bottom-0 right-0 py-4 px-10 text-white cursor-pointer"} onClick={changeMode}>{isDark ? "Light Mode" : "Dark Mode"}</h1>
      </div>
    </div>
  );
}

export default App;
