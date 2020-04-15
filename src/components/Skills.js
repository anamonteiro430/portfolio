import React from 'react';
import js from './../images/javascript.svg';
import react from './../images/react.svg';
import html from './../images/html.svg';
import css from './../images/css.svg';
import sass from './../images/Sass.svg';
import redux from './../images/Redux.svg';
import node from './../images/Node.svg';
import less from './../images/less.svg';
import sql from './../images/sql.svg';
import postgresql from './../images/Postgresql.svg';

export const Skills = () => {
	return (
		<div className='skills'>
			<h2>My Skills</h2>
			<div className='skills-icons'>
				<div className='wrapper'>
					<img src={html} alt='html' width='50' />
					<span>HTML</span>
				</div>
				<div className='wrapper'>
					<img src={css} alt='css' width='50' />
					<span>CSS</span>
				</div>
				<div className='wrapper'>
					<img src={js} alt='js' width='40' />
					<span>Javascript</span>
				</div>
				<div className='wrapper'>
					<img src={react} alt='react' width='40' />
					<span>React</span>
				</div>
				<div className='wrapper'>
					<img src={redux} alt='redux' width='40' />
					<span>Redux</span>
				</div>
				<div className='wrapper'>
					<img src={sass} alt='sass' width='40' />
					<span>Sass</span>
				</div>
				<div className='wrapper'>
					<img src={less} alt='less' width='40' />
					<span>Less</span>
				</div>
				<div className='wrapper'>
					<img src={node} alt='node' width='40' />
					<span>NodeJS</span>
				</div>
				<div className='wrapper'>
					<img src={sql} alt='sql' width='40' />
					<span>SQL</span>
				</div>
				<div className='wrapper'>
					<img src={postgresql} alt='postgresql' width='40' />
					<span>Postgresql</span>
				</div>
			</div>
		</div>
	);
};
