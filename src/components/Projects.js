import React from 'react';
import droom from './../images/droom.png'
import todo from './../images/todo.png'
import backend from './../images/backend.png'
import code from './../images/code.svg';
import website from './../images/website.svg';

export const Projects = () => {
	return (
		<div className='projects'>
			<h2>My Projects</h2>
			<div className='project'>
				<div className="project-image"><img src={droom} alt="droom" width="200" height="350" className="image" /></div>
				<div className="project-info">
					<h3>Droom</h3>
					<p>A plataform that connects companies to people searching for jobs. With a swipe to the left or right the user can choose their perfect company.</p>
					<p>Built with React</p>
					<div id='code-icons'>
						<img src={code} className='code' width='40' />
						<img src={website}
							className='website' width='50' />
					</div>
				</div>

			</div>
			<div className='project'>
				<div className="project-image"><img src={todo} className="image" alt="droom" width="150" /></div>
				<div className="project-info">
					<h3>Beautiful Todos</h3>
					<p>Create a beautiful list of things to do.</p>
					<p>Built with HTML, CSS and Javascript</p>
					<div id='code-icons'>
						<img src={code} className='code' width='40' />
						<img src={website}
							className='website' width='50' />
					</div>
				</div>

			</div>
			<div className='project'>
				<div className="project-image"><img src={backend} className="image" alt="droom" width="150" /></div>
				<div className="project-info">
					<h3>PinterEach</h3>
					<p>Backend for "Pintereach", where you can save articles to read later</p>
					<p>Built with NodeJS and Express</p>
					<div id='code-icons'>
						<img src={code} className='code' width='40' />
						<img src={website}
							className='website' width='50' />
					</div>
				</div>

			</div>
		</div>
	);
};
