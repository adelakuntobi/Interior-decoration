import React from 'react'
import Button from '../components/button'
import Heading from '../components/heading'
import about from '../images/aboutus.png'

function About() {
  return (
    <section id="about" className="my-24 lg:gap-x-12 gap-y-12 container w-10/12 mx-auto grid lg:grid-cols-2 items-center">
      <img className="" src={about} alt="This is our store" />
      <div className="">
        <Heading someHeading="About Us" />
        <p className="mb-8">Faydecor is an Award-Winning company,
        that has been in to interior decoration for almost a decade and successfully planned,
        styled and coordinated over 180 building and structures! We will lead you through
        the whole intricate process of changing your space to a homely abode</p>
        <Button theText="read more" />
      </div>
    </section>
  )
}

export default About
