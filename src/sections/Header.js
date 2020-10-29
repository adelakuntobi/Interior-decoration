import React from 'react'
import Button from '../components/button'
function Header() {
  return (
    // Header section
    <header className="flex items-center container container-fluid mx-auto">
      <div className="w-9/12 md:w-auto px-5 py-8 md:p-12 lg:p-24 bg-white my-12 md:my-20 lg:my-32">
        <h1 className="text-3xl md:text-4xl font-bold">Functional. Flair.  Flawless</h1>
        <p className="mt-2 mb-12">Let’s Help your space come to life</p>
        <Button theText="view projects" />
      </div>
    </header>
  )
}

export default Header
