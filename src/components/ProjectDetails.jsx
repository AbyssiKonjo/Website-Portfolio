import React, { useState, useEffect } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('/project.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data.projects);
        setSelectedProject(data.projects[0]);
      })
      .catch((error) => console.error('Error loading project data:', error));
  }, []);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    setSelectedProject(projects[currentSlideIndex]);
  };

  return (
    <div className="page-body">
      <h2 className="header-text">Projects</h2>
      <section className="projects">
        <div className="image-container">
          <div className="displayed-image">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <img
                    src={
                      Array.isArray(project.project_image)
                        ? project.project_image[0]
                        : project.project_image
                    }
                    alt={project.project_title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="description">
          {selectedProject && (
            <>
              <div className="details">
                <h2>{selectedProject.project_title}</h2>
                <div className="content">
                  <h3>Project Type:</h3>
                  <p>{selectedProject.project_type} Project</p>
                  <h3>Description:</h3>
                  <p>{selectedProject.description}</p>
                  {selectedProject.developers && selectedProject.developers.length > 0 && (
                    <>
                      <h4>Developed By:</h4>
                      <ul>
                        {selectedProject.developers.map((developer, index) => (
                          <li key={index}>
                            <a
                              href={developer}
                              target="_blank"
                            >
                              {developer}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              <div id="socialIcons">
                <p>
                  <a
                    href={selectedProject.gitHub_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </p>
                {selectedProject.vercel_link && (
                  <p>
                    <a
                      href={selectedProject.vercel_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGlobe />
                    </a>
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
