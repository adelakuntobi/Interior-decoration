import React from 'react'
import Galleryitems from '../../components/galleryitems'
import Bathroom from '../../images/bathroom.png'
import Classic from '../../images/classic.png'
import Dining from '../../images/dining.png'
import Home from '../../images/home.png'
import Kitchen1 from '../../images/kitchen1.png'
import Office from '../../images/office.png'

function All() {

  return (
    <>
      <Galleryitems img={Classic} leadingText="Classic Interior Home" explain="Living" />
      <Galleryitems img={Kitchen1} leadingText="Classic Interior Kitchen" explain="Kitchen" />
      <Galleryitems img={Bathroom} leadingText="Classic Interior Bathroom" explain="Bathroom" />
      <Galleryitems  img={Home} leadingText="Classic Interior Bedroom" explain="Bedroom" />
      <Galleryitems img={Office} leadingText="Classic Interior Office" explain="Office" />
      <Galleryitems img={Dining} leadingText="Classic Interior Bathroom" explain="Dining" />
    </>

  )
}

export default All
