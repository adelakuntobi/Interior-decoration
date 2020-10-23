import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

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
    <nav className="flex items-center justify-between container ml-0 mr-auto">
      <div className="logo flex items-center">
        <h1 className="ml-5 lg:ml-24 font-extrabold text-2xl lg:text-3xl">FAYDECOR</h1>
      </div>
      <GiHamburgerMenu onClick={closeNav} className="flex lg:hidden cursor-pointer text-3xl mr-5"/>
      <ul className={"hidden lg:flex flex-row gap-8"}>
        <li className="active">Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
    <ul className={isResponsive ? "hidden" : "text-center flex flex-col gap-4 shadow-lg py-8 absolute top-auto z-20 w-full bg-white"}>
        <li className="active">Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
