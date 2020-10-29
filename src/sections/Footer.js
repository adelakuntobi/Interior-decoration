import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col justify-evenly items-center py-10 mt-20 border-t-2">
      <h1 className="text-4xl font-bold text-primary1">FAYDECOR</h1>
      <ul className="flex flex-wrap gap-x-8 px-8 py-5 justify-center lg:px-0">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/gallery">
          <li>Gallery</li>
        </NavLink>
        <NavLink to="/services">
          <li>Services</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <p className="opacity-25">Copyright &copy; 2020 All rights reserved</p>
    </footer>
  )
}

export default Footer
