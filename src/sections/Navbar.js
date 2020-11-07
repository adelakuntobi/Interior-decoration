import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll'

function Navbar() {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("scroll")
    } else {
      document.querySelector(".navbar").classList.remove("scroll")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {

    }
  }, [])
  const [isResponsive, setIsResponsive] = useState(true)
  const closeNav = () => {
    if (isResponsive === true) {
      setIsResponsive(
        Opennav => Opennav = false
      )
    }
    else {
      setIsResponsive(
        Opennav => Opennav = true
      )
    }
  }
  return (
    <div className="nav-div">
      <nav className="navbar flex fixed 
      bg-white items-center justify-between container container-fluid lg:pr-20 mx-auto">
        <div className="logo flex items-center">
          <h1 className="ml-5 lg:ml-24 font-extrabold text-2xl lg:text-3xl">FAYDECOR</h1>
        </div>
        <GiHamburgerMenu onClick={closeNav} className="flex lg:hidden cursor-pointer text-3xl mr-5" />
        <ul className={"hidden lg:grid grid-flow-col flex-row gap-8"}>
          <Link activeClass="active-nav" to="home" spy={true} smooth={true} offset={-70} duration={500}>
            <li>Home</li>
          </Link>
          <Link activeClass="active-nav" to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <li>About</li>
          </Link>
          <Link activeClass="active-nav" to="gallery" spy={true} smooth={true} offset={-70} duration={500}>
            <li>Gallery</li>
          </Link>
          <Link activeClass="active-nav" to="services" spy={true} smooth={true} offset={-70} duration={500}>
            <li>Services</li>
          </Link>
          <Link activeClass="active-nav" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <ul className={isResponsive ? "hidden" :
        "text-center grid lg:hidden gap-4 shadow-lg py-8 fixed top-70 z-20 w-full bg-white"}>
        <Link onClick={closeNav} activeClass="active-nav" to="home" spy={true} smooth={true} offset={-70} duration={500}>
         <li className="cursor-pointer">Home</li>
        </Link>
        <Link onClick={closeNav} activeClass="active-nav" to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">About</li>
        </Link>
        <Link onClick={closeNav} activeClass="active-nav" to="gallery" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">Gallery</li>
        </Link>
        <Link onClick={closeNav} activeClass="active-nav" to="services" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">Services</li>
        </Link>
        <Link onClick={closeNav} activeClass="active-nav" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
