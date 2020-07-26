import React from 'react';

export const Nav = () => {
  return (
    <nav>
      <h3 id="logo">
        <a href="#" onClick={window.scrollTo(0, 0)}>
          Ana Francisca Monteiro
        </a>
      </h3>
      <div className="menu">
        <a
          href="https://drive.google.com/file/d/1LnUoaqVlRtyuA6dhxNaRCqLXR7CHrEch/view"
          target="_blank"
        >
          Resume
        </a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
