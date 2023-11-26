import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="proyecto">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1.</p>
        <a href="https://cocomeza.github.io/PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL./" target="_blank" rel="noopener noreferrer">
          Visitar Proyecto 1
        </a>
      </div>

      <div className="proyecto">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2.</p>
        <a href="https://cocomeza.github.io/ProyectoIntegradorActualizado/" target="_blank" rel="noopener noreferrer">
          Visitar Proyecto 2
        </a>
      </div>

      <div className="proyecto">
        <h3>Proyecto 3</h3>
        <p>Descripción del proyecto 3.</p>
        {/* Otros detalles del proyecto 3 */}
      </div>

      {/* Agrega más proyectos según sea necesario */}
    </section>
  );
};

export default Projects;

