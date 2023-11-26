import React from "react";

function Nav({ home, about, projects, skills, contact }) {
  return (
    <div>
      <ul>
        <li>
          <a href="#"> {home} </a>
        </li>
        <li>
          <a href="#"> {about} </a>
        </li>

        <li>
          <a href="#"> {skills} </a>
        </li>
        <li>
          <a href="#"> {projects} </a>
        </li>
        <li>
          <a href="#"> {contact} </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
