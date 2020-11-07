import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer id="footer" className="flex lg:flex-row flex-col justify-evenly items-center py-10 mt-20 border-t-2">
      <h1 className="text-4xl font-bold text-primary1">FAYDECOR</h1>
      <ul className="grid grid-cols-3 sm:grid-cols-5 text-center gap-x-8 gap-y-4 px-8 py-5 justify-center lg:px-0">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">About</li>
        </Link>
        <Link to="gallery" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">Gallery</li>
        </Link>
        <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">Services</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="cursor-pointer">Contact</li>
        </Link>
      </ul>
      <p className="opacity-25">Copyright &copy; 2020 All rights reserved</p>
    </footer>
  )
}

export default Footer
