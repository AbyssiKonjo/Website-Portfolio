import React, { useEffect } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { MdOutlineHtml } from "react-icons/md";

const Home = () => {
  useEffect(() => {
    document.body.classList.add('home-layout');
    
    return () => {
      document.body.classList.remove('home-layout'); 
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <section className='about-me'>
          <div className='logo-image'></div>

          <h1>Web Developer & UX Designer</h1>

          <div className='social-icons'>
            <a href="https://github.com/AbyssiKonjo" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://nz.linkedin.com/in/abyssinia-getachew-6176212b6?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
              </a>
          </div>

          <div className="page-links">
            <h2><Link to="/projects">Projects</Link></h2>
            <h2><Link to="/services">Services</Link></h2>
          </div>

          {/* <div className='intro'> */}

            {/* <h1>Web Developer & UX Designer</h1> */}
            
            
            {/* <h1>Hi I'm <strong>Nia</strong></h1> */}
            {/* <div className='profile-image'></div> */}

            {/* <div className='intro-content'>
              <p>I’m passionate about Web and UX development, especially the hands-on process of turning ideas into functional, user-friendly experiences. Throughout my studies, I’ve found the development side particularly rewarding, and I’m eager to continue growing in this field. 
              Right now, I’m focused on full-stack development, exploring both frontend and backend technologies. I’m always up for new challenges and learning opportunities—excited to see where this journey takes me next!</p>
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
            </div> */}
          {/* </div> */}
        </section>
      </div>
      {/* <ProjectDetails/> */}
    </>
  )
}

export default Home
