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
        <div className='image-container'>
          {projects.individualProjects.map(project => (
            <div key={project.id} className='project-image' onClick={() => handleIndividualProjectClick(project)}>
              <img src={project.Project_image} alt={project.project_title} />
              {selectedIndividualProject && selectedIndividualProject.id === project.id && (
                <div className='project-details'>
                  <h3>{selectedIndividualProject.project_title}</h3>
                  <p>{selectedIndividualProject.description}</p>
                  <div className='social-icon'>
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
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className='group-projects projects'>
        <h2 className='header-text'>Group projects</h2>
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
              {selectedGroupProject && selectedGroupProject.id === project.id && (
                <div className='project-details'>
                  <h3>{selectedGroupProject.project_title}</h3>
                  <p>{selectedGroupProject.description}</p>
                  <div className='social-icon'>
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
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
