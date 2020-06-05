import React from "react";
import linkedin from "./../images/linkedin.svg";
import github from "./../images/github.svg";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>
          Hello, I'm <span className="square">Ana</span>
        </h1>
        <h2>Fullstack Web Developer</h2>
      </div>
      <p className="bio">
        Nice human with a passion for creating applications and solving
        problems. <br />
        Take a look at my projects and feel free to contact me!
      </p>
      <div id="contact-icons">
        <a href="https://www.linkedin.com/in/anamonteiro430/" target="_blank">
          <img src={linkedin} className="linkedin" width="42" />
        </a>
        <a href="https://github.com/anamonteiro430" target="_blank">
          <img src={github} className="github" width="42" />
        </a>
      </div>

      <a
        href="https://drive.google.com/file/d/1Y1EJdTjSHDp34MiKQcdr-JWgjB1gRE_E/view"
        className="resume"
        target="_blank"
      >
        View my Resume
      </a>
    </div>
  );
};
