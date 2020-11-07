import React from 'react'
import Heading from '../components/heading'
import ServicesInfo from '../components/servicesInfo'
import Services1 from '../images/services.png'
function Services() {
  return (
    <section id="services" className="px-5 grid grid-flow-row lg:grid-cols-2 items-center 
     container mx-auto md:w-10/12 py-16 gap-10">
      <div>
        <Heading someHeading="Services" />
        <div className="mt-10">
          <ServicesInfo title="Comfortablity" />
          <ServicesInfo title="Stylishness" />
          <ServicesInfo title="Perfection" />
        </div>
      </div>
      <img src={Services1} alt="services" className="mx-auto"/>
    </section>
  )
}

export default Services
