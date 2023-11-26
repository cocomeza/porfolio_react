import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="icons">

      <FaGithub />
      <a href="https://github.com/cocomeza" target="_blank" rel="noopener noreferrer">Github
      </a>

      <FaFacebook />
      <a href="https://www.facebook.com/profile.php?id=100081957301277"target="_blank" rel="noopener noreferrer">
        Facebook
      </a>

      <FaInstagram />
      <a href="https://www.instagram.com/maximilianojesusmeza/"target="_blank" rel="noopener noreferrer">Instagram
      </a>

      

      <FaEnvelope/>
      <a href="mailto:mezacoco13@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
      
    </div>
  );
};

export default Footer;
