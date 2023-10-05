import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram,FaGithub, FaLinkedin } from "react-icons/fa";
import pic from "../myphoto.jpg"

const ContactLeft = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-shadowOne flex flex-col gap-6 justify-center">
      <img
        className="w-72 h-80 object-cover rounded-lg mb-3 mt-2"
        src={pic}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Md Seraj</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a MERN stack developer, skilled in MongoDB, Express, React, <br />and Node.js, building dynamic and responsive web applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7415359315</span>
        </p>
        <p className="text-base text-gray-400 flex flex-col items-center sm:flex-row  sm:gap-2">
          Email: <span className="text-lightText">seraj2079@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href='https://www.facebook.com/seraj2079'
            className='bannerIcon'><FaFacebookF /></a>
          <a href='https://x.com/seraj2079'
            className='bannerIcon'><FaTwitter /></a>
          <a href='https://instagram.com/errors_creator'
            className='bannerIcon'><FaInstagram /></a>
          <a href='https://github.com/seraj2079'
            className='bannerIcon'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/seraj2079/'
            className='bannerIcon'><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;