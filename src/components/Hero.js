import React from 'react';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1 id="title">
          Hello, I'm <span className="square">Ana</span>
        </h1>
        <h2>Fullstack Web Developer</h2>
      </div>
      <p className="bio">
        Nice human with a passion for creating applications and solving
        problems. <br />
        Take a look at my projects and feel free to contact me!
      </p>

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
