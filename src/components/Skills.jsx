import React from 'react';
import "./Skills.css"

const Skills = () => {
  const skillsList = [
    {
      name: 'HTML',
      image: 'https://i.postimg.cc/HLR68fd0/HTML-LOGO.png',
    },
    {
      name: 'CSS',
      image: 'https://i.postimg.cc/RZfhztqM/CSS-logo.webp',
    },
    {
      name: 'JavaScript',
      image: 'https://i.postimg.cc/d3Yh0PtS/Javascript-logo.png',
    },
    {
      name: 'React',
      image: 'https://i.postimg.cc/zDxVwWyB/react-JS-logo.png',
    },
    {
      name: 'Nodejs',
      image: 'https://i.postimg.cc/hGvTFBfL/nodejs-logo.png',
    },
    {
      name: 'Boostrap',
      image: 'https://i.postimg.cc/gkCKq17N/Bootstrap-logo.png',
    },
  
  
    // Agrega más habilidades aquí con sus rutas de imagen correspondientes
  ];

  return (
    <div>
      <h2>Habilidades</h2>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
