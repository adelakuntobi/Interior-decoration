import React from 'react'
import Button from '../components/button'
import headerImage from '../images/Rectangle 68.jpg'
function Header() {
  return (
    // Header section
    <header className="relative flex items-center">
      <div className="p-24 bg-white z-10 my-32">
        <h1 className="text-4xl font-bold">Functional. Flair.  Flawless</h1>
        <p className="mt-2 mb-12">Let’s Help your space come to life</p>
        <Button theText="view projects" />
      </div>
      <img src={headerImage} alt="header banner"
      className="absolute top-0 right-0" style={{zIndex: -1}} />
    </header>
  )
}

export default Header
