import React, { useState } from 'react';
import '../styles/Projects.css';
import Logo1 from '../img/Logo/1.png';
import Logo2 from '../img/Logo/2.png';
import Logo3 from '../img/Logo/3.png';
import Logo4 from '../img/Logo/4.png';
import Logo5 from '../img/Logo/5.png';
import Poster1 from '../img/Poster/1.png';
import Poster2 from '../img/Poster/2.png';
import Poster3 from '../img/Poster/3.png';
import Poster4 from '../img/Poster/4.png';
import Poster5 from '../img/Poster/5.png';
import Poster6 from '../img/Poster/6.png';
import Poster7 from '../img/Poster/7.jpg';
import Media1 from '../img/SosialMedia/1.png';
import Media2 from '../img/SosialMedia/2.png';
import Media3 from '../img/SosialMedia/3.png';
import Media4 from '../img/SosialMedia/4.png';
import Media5 from '../img/SosialMedia/5.png';
import Media6 from '../img/SosialMedia/6.png';
import Media7 from '../img/SosialMedia/7.png';
import Media8 from '../img/SosialMedia/8.png';
import Media9 from '../img/SosialMedia/9.png';
import Media10 from '../img/SosialMedia/10.png';
import Media11 from '../img/SosialMedia/11.png';
import Media12 from '../img/SosialMedia/12.png';
import S1 from '../img/TShirt/1.png';
import S2 from '../img/TShirt/2.png';
import S3 from '../img/TShirt/3.png';
import S4 from '../img/TShirt/4.png';
import S5 from '../img/TShirt/5.png';
import S6 from '../img/TShirt/6.png';
import S7 from '../img/TShirt/7.png';
import S8 from '../img/TShirt/8.png';
import S9 from '../img/TShirt/9.png';
import S10 from '../img/TShirt/10.png';
import S11 from '../img/TShirt/11.png';
import S12 from '../img/TShirt/12.png';
import S13 from '../img/TShirt/13.png';
import S14 from '../img/TShirt/14.png';
import Print1 from '../img/Print/1.png';
import Print2 from '../img/Print/2.png';
import Print3 from '../img/Print/3.png';
import Print4 from '../img/Print/4.png';
import Print5 from '../img/Print/5.png';
import Print6 from '../img/Print/6.png';
import Print7 from '../img/Print/7.png';

function Projects() {
  const [activeTab, setActiveTab] = useState('Logo');
  const [activeProject, setActiveProject] = useState(null);

  const tabs = [
    {
      name: 'Logo',
      projects: [
        { image: Logo1 },
        { image: Logo2 },
        { image: Logo3 },
        { image: Logo4 },
        { image: Logo5 },
      ],
    },
    {
      name: 'Poster',
      projects: [
        { image: Poster1 },
        { image: Poster2 },
        { image: Poster3 },
        { image: Poster4 },
        { image: Poster5 },
        { image: Poster6 },
        { image: Poster7 },
      ],
    },
    {
      name: 'Sosial Media',
      projects: [
        { image: Media1 },
        { image: Media2 },
        { image: Media3 },
        { image: Media4 },
        { image: Media5 },
        { image: Media6 },
        { image: Media7 },
        { image: Media8 },
        { image: Media9 },
        { image: Media10 },
        { image: Media11 },
        { image: Media12 },
      ],
    },
    {
      name: 'T-Shirt',
      projects: [
        { image: S1 },
        { image: S2 },
        { image: S3 },
        { image: S4 },
        { image: S5 },
        { image: S6 },
        { image: S7 },
        { image: S8 },
        { image: S9 },
        { image: S10 },
        { image: S11 },
        { image: S12 },
        { image: S13 },
        { image: S14 },
      ],
    },
    {
      name: 'Print',
      projects: [
        { image: Print1 },
        { image: Print2 },
        { image: Print3 },
        { image: Print4 },
        { image: Print5 },
        { image: Print6 },
        { image: Print7 },
      ],
    },
  ];

  const activeProjects = tabs.find((tab) => tab.name === activeTab)?.projects || [];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? 'active' : ''}
            onClick={() => {
              setActiveTab(tab.name);
              setActiveProject(null);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {activeProjects.map((project, index) => (
          <div
            className="project-item"
            key={index}
            onClick={() => setActiveProject(project)}
          >
            <img src={project.image} alt={`Project ${index}`} />
          </div>
        ))}
      </div>
      {activeProject && (
        <div className="project-detail">
          <button className="close-detail" onClick={() => setActiveProject(null)}>
            Close
          </button>
          <img src={activeProject.image} alt="Project Detail" />
        </div>
      )}
    </div>
  );
}

export default Projects;
