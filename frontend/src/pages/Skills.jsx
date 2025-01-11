import React, { useState } from 'react';
import '../styles/Skills.css';
import corelDrawIcon from '../img/qx.png';
import photoshopIcon from '../img/q.png';
import adobeIllustratorIcon from '../img/x.png';

function Skills() {
  const [activeTab, setActiveTab] = useState('Tools');

  const tabs = [
    {
      name: 'Tools',
      skills: [
        { name: 'Corel Draw', icon: corelDrawIcon },
        { name: 'Photoshop', icon: photoshopIcon },
        { name: 'Adobe Ilustratror', icon: adobeIllustratorIcon },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? 'active' : ''}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {tabs
          .find((tab) => tab.name === activeTab)
          .skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <img src={skill.icon} alt={`${skill.name} icon`} />
              <span>{skill.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Skills;
