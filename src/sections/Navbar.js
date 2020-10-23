import React from 'react'

function Navbar() {
  return (
    <nav className="flex items-center justify-between container ml-0 mr-auto">
      <div className="logo flex items-center">
        <h1 className="ml-24 font-extrabold text-3xl">FAYDECOR</h1>
      </div>
      <ul className="flex gap-8">
        <li className="active">Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
