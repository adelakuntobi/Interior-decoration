import React from 'react'

function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col justify-evenly items-center py-10 mt-20 border-t-2">
      <h1 className="text-4xl font-bold text-primary1">FAYDECOR</h1>
      <ul className="flex flex-wrap gap-x-8 px-8 py-5 justify-center lg:px-0">
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <p>Copyright &copy; 2020 All rights reserved</p>
    </footer>
  )
}

export default Footer
