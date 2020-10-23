import React from 'react'
import Button from '../components/button'
import Heading from '../components/heading'
import Input from '../components/input'
import map from '../images/map.png'

import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'

function Contact() {
  return (
    <section className="thefooter p-6 lg:p-20">
      <div className="bg-white pb-20 px-5 lg:px-10 container mx-auto ">
        <div className="text-center pt-20 pb-16">
          <Heading someHeading="Contact Us" />
        </div>
        <div className="flex lg:flex-row flex-col gap-10">

          <div className="w-full lg:w-4/12 mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-4 font-bold text-primary1">FAYDECOR</h1>
            <img src={map} alt="map" className="mx-auto" />
            <a className="my-4 block" href="tel:08168527167" rel="noopener noreferrer">Phone: +234 123 6722 232</a>
            <a className="my-4 block" href="mailto:faydecor@info.com" rel="noopener noreferrer" target="_blank">Email: faydecor@info.com</a>
            <div className="flex justify-center gap-10 mx-auto">
              {/* Icons */}
              <FaFacebookF size="1.5rem" />
              <FaInstagram size="1.5rem" />
              <FaTwitter size="1.5rem" />
              <FaPinterestP size="1.5rem" />
            </div>
          </div>

          <div className="w-full">
            <h2 className="font-medium text-2xl mb-6">Get In Touch</h2>
            <form className="pb-2">
              <div className="flex lg:flex-row flex-col pb-8 gap-8">
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
