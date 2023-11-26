import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="intro-container">
      <img
        src="https://i.postimg.cc/VsdxwTNX/Whats-App-Image-2023-11-23-at-10-48-38-1.jpg"
        alt="logo"
        className="logo"
      ></img>
      <h1>Bienvenido a mi Portafolio</h1>
      <p>
        ¡Hola! Soy Maximiliano Meza y soy Tecnico Superior en Hoteleria y
        Tecnico Superior en Turismo.
      </p>
      <p>
        Actualmente me encuentro realizando la diplomatura en Programacion Web
        dictada por la UNTREF (Universidad Tres de Febrero) de la ciudad de La
        Plata , Pcia de Bs As.{" "}
      </p>
      <p>
        En este portafolio, podrás encontrar información sobre mis proyectos,
        habilidades y más.
      </p>
    </div>
  );
};

export default Home;
