import React from 'react'
import Button from '../components/button'
import Heading from '../components/heading'
import Input from '../components/input'
import map from '../images/map.png'

import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="thefooter p-6 lg:p-20">
      <div className="bg-white pb-20 px-5 lg:px-10 container mx-auto ">
        <div className="text-center pt-20 pb-16">
          <Heading someHeading="Contact Us" />
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="w-full lg:w-4/12 mx-auto text-center px-0 py-10 md:p-10">
            <h1 className="text-4xl lg:text-5xl mb-4 font-bold text-primary1">FAYDECOR</h1>
            <img src={map} alt="map" className="mx-auto" />
            <a className="my-4 block" href="tel:08168527167" rel="noopener noreferrer">Phone: +234 123 6722 232</a>
            <a className="my-4 block" href="mailto:faydecor@info.com" rel="noopener noreferrer" target="_blank">Email: faydecor@info.com</a>
            <div className="grid gap-3 grid-flow-col mx-auto justify-center">
              {/* Icons */}
              <FaFacebookF size="1.5rem" className=""/>
              <FaInstagram size="1.5rem" className=""/>
              <FaTwitter size="1.5rem" className=""/>
              <FaPinterestP size="1.5rem" className=""/>
            </div>
          </div>

          <div className="w-full p-0 lg:p-10">
            <h2 className="font-medium text-2xl mb-6">Get In Touch</h2>
            <form className="pb-2">
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <Input label="Fullname" placeholder="Akinwale Fadiat" />
                <Input label="Email" placeholder="name@emaple.com" />
              </div>
              <div >
                <label className="block mb-2">Message</label>
                <textarea className="w-full mb-6 h-32 p-3 bg-transparent border rounded" placeholder="Type in your message" />
              </div>
              <Button theText="Send" />
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
