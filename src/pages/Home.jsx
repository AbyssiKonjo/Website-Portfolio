import React from 'react'
import ProjectDetails from '../components/ProjectDetails'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className='about-me'>
        <div className='intro'>
          <h1>Hi I'm <strong>Nia</strong></h1>
          <p>I really enjoy diving into Web and UX development, especially the hands-on aspects of bringing digital ideas to life. The development side of my studies has been particularly rewarding, and I’m excited to see where this path will take me next.
          Right now, I’m focused on full-stack development and love exploring both frontend and backend technologies. I’m always open to new challenges and learning opportunities, so who knows where I might end up!</p>
          <br />
          <div className='social-icons'>
            <a href="https://github.com/AbyssiKonjo" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://nz.linkedin.com/in/abyssinia-getachew-6176212b6?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <br />
          <h2>Select a project below to view its details</h2>
          <p>Click on any project image to see more information about that specific project.</p>
        </div>
        <div className='profile-image'></div>
      </section>
      <ProjectDetails/>
    </>
  )
}

export default Home
