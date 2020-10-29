import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Navbar() {
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
    <div>
      <nav className="flex items-center justify-between container container-fluid lg:pr-20 mx-auto">
        <div className="logo flex items-center">
          <h1 className="ml-5 lg:ml-24 font-extrabold text-2xl lg:text-3xl">FAYDECOR</h1>
        </div>
        <GiHamburgerMenu onClick={closeNav} className="flex lg:hidden cursor-pointer text-3xl mr-5" />
        <ul className={"hidden lg:flex flex-row gap-8"}>
          <NavLink activeClassName="active-nav" exact to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active-nav" to="/about">
            <li>About</li>
          </NavLink>
          <NavLink activeClassName="active-nav" to="/gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink activeClassName="active-nav" to="/services">
            <li>Services</li>
          </NavLink>
          <NavLink activeClassName="active-nav" to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
      <ul className={isResponsive ? "hidden" : "text-center flex lg:hidden flex-col gap-4 shadow-lg py-8 absolute top-auto z-20 w-full bg-white"}>
        <NavLink activeClassName="active-nav" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="active-nav" to="/about">
          <li>About</li>
        </NavLink>
        <NavLink activeClassName="active-nav" to="/gallery">
          <li>Gallery</li>
        </NavLink>
        <NavLink activeClassName="active-nav" to="/services">
          <li>Services</li>
        </NavLink>
        <NavLink activeClassName="active-nav" to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
