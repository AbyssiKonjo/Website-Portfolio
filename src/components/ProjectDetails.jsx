import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from "react-icons/fa";

const ProjectDetails = () => {
  const [projects, setProjects] = useState({ individualProjects: [], groupProjects: [] });
  const [selectedIndividualProject, setSelectedIndividualProject] = useState(null);
  const [selectedGroupProject, setSelectedGroupProject] = useState(null);

  useEffect(() => {
    fetch('/project.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  const handleIndividualProjectClick = (project) => {
    setSelectedIndividualProject(project);
    setSelectedGroupProject(null);
  };

  const handleGroupProjectClick = (project) => {
    setSelectedGroupProject(project);
    setSelectedIndividualProject(null);
  };

  return (
    <div className='page-body'>
      <section className='individual-projects projects'>
        <h2 className='header-text'>Individual projects</h2>
        <p>These are the projects I completed on my own using HTML, CSS, JavaScript, Swiper, Full Page, Node.js, Gulp</p>
        <div className='image-container'>
          {projects.individualProjects.map(project => (
            <div key={project.id} className='project-image' onClick={() => handleIndividualProjectClick(project)}>
              <img src={project.Project_image} alt={project.project_title} />
            </div>
          ))}
        </div>
        <div className='description'>
          {selectedIndividualProject ? (
            <>
              <div className='details'>
                <h2>{selectedIndividualProject.project_title}</h2>
                <p>{selectedIndividualProject.description}</p>
              </div>
              <div className='social-icons'>
                <p>
                  <a href={selectedIndividualProject.gitHub_link} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </p>
                <p>
                  <a href={selectedIndividualProject.vercel_link} target="_blank" rel="noopener noreferrer">
                    <FaGlobe size={30} />
                  </a>
                </p>
              </div>
            </>
          ) : (
            <h2>Select one of the images above...</h2>
          )}
        </div>
      </section>

      <section className='group-projects projects'>
        <h2 className='header-text'>Group projects</h2>
        <p>These are the projects I worked on with a team using HTML, CSS, JavaScript, React, Node.js, etc.</p>
        <div className='image-container'>
          {projects.groupProjects.map(project => (
            <div key={project.id} className='project-image' onClick={() => handleGroupProjectClick(project)}>
              {Array.isArray(project.Project_image) ? (
                project.Project_image.map((image, index) => (
                  <img key={index} src={image} alt={`${project.project_title} - Image ${index + 1}`} />
                ))
              ) : (
                <img src={project.Project_image} alt={project.project_title} />
              )}
            </div>
          ))}
        </div>
        <div className='description'>
          {selectedGroupProject ? (
            <>
              <div className='details'>
                <h2>{selectedGroupProject.project_title}</h2>
                <p>{selectedGroupProject.description}</p>
              </div>
              <div className='social-icons'>
                <p>
                  <a href={selectedGroupProject.gitHub_link} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </p>
                <p>
                  <a href={selectedGroupProject.vercel_link} target="_blank" rel="noopener noreferrer">
                    <FaGlobe size={30} />
                  </a>
                </p>
              </div>
            </>
          ) : (
            <h2>Select one of the images above...</h2>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
