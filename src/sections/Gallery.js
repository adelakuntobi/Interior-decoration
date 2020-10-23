import React from 'react'
import Galleryitems from '../components/galleryitems'
import Heading from '../components/heading'
import Bathroom from '../images/bathroom.png'
import Classic from '../images/classic.png'
import Dining from '../images/dining.png'
import Home from '../images/home.png'
import Kitchen1 from '../images/kitchen1.png'
import Office from '../images/office.png'


function Gallery() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto md:w-10/12">
      <div className="text-center">
        <Heading someHeading="Our Gallery" />
        <ul className="flex gap-12 items-center justify-center">
          <li>All</li>
          <li>Living</li>
          <li>Kitchen</li>
          <li>Dining</li>
          <li>Bathroom</li>
          <li>Furniture</li>
          <li>Office</li>
        </ul>
      </div>
      <div className="pt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Galleryitems img={Classic} leadingText="Classic Interior Home" explain="Living"/>
        <Galleryitems img={Kitchen1} leadingText="Classic Interior Kitchen" explain="Kitchen"/>
        <Galleryitems img={Bathroom} leadingText="Classic Interior Bathroom" explain="Bathroom"/>
        <Galleryitems img={Home} leadingText="Classic Interior Bedroom" explain="Bedroom"/>
        <Galleryitems img={Office} leadingText="Classic Interior Office" explain="Office"/>
        <Galleryitems img={Dining} leadingText="Classic Interior Bathroom" explain="Dining"/>
      </div>
      </div>
    </section>
  )
}

export default Gallery
