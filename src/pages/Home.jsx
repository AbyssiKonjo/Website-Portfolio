import React from 'react'
import ProjectDetails from '../components/ProjectDetails'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { MdOutlineHtml } from "react-icons/md";

const Home = () => {
  return (
    <>
      <section className='about-me'>
        <div className='intro'>
          <h1>Hi I'm <strong>Nia</strong></h1>
          <div className='profile-image'></div>

          <div className='intro-content'>
            <p>I really enjoy diving into Web and UX development, especially the hands-on aspects of bringing digital ideas to life. The development side of my studies has been particularly rewarding, and I’m excited to see where this path will take me next.
            Right now, I’m focused on full-stack development and love exploring both frontend and backend technologies. I’m always open to new challenges and learning opportunities, so who knows where I might end up!</p>
            <div className='social-icons'>
              <a href="https://github.com/AbyssiKonjo" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://nz.linkedin.com/in/abyssinia-getachew-6176212b6?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>

            <div className='skills'>
              <h3><strong>Skilled</strong> in:</h3>
              <p>HTML, Javascript, CSS, Sass, React, Backend & Frontend Web Development</p>
              <div className='icons'>
                <MdOutlineHtml />
                <IoLogoJavascript />
                <MdOutlineCss />
                <FaSass />
                <FaReact />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectDetails/>
    </>
  )
}

export default Home
