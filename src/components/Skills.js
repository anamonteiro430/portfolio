import React from 'react';
import js from './../images/javascript.svg';
import react from './../images/react.svg';
import html from './../images/html.svg';
import css from './../images/css.svg';
import sass from './../images/Sass.svg';
import redux from './../images/Redux.svg';
import node from './../images/Node.svg';

export const Skills = () => {
    return (
        <div className='skills'>
            <h2>My Skills</h2>
                <div className='skills-icons'>
                <img src={html} alt="javascript" width="50" />
                <img src={css} alt="javascript" width="50" />
                <img src={js} alt="javascript" width="40" />
                <img src={react} alt="javascript" width="50" />
                <img src={redux} alt="javascript" width="50" />
                <img src={sass} alt="javascript" width="50" />
                <img src={node} alt="javascript" width="50" />
            </div>
        </div>
    );
};
