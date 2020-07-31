import React from 'react';
import wip from './../images/wip.svg';
import qh from './../images/qh.svg';
import gol from './../images/gol.png';
import code from './../images/code.svg';
import website from './../images/website.svg';

export const Projects = () => {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="project">
        <div className="project-image">
          <img src={wip} alt="droom" className="image" />
        </div>
        <div className="project-info">
          <h3>Where in Porto</h3>
          <p>Front End apps built with ReactJS, React Router, SASS</p>
          <p>Back End built with NodeJS, ExpressJS, Knex</p>
          <li>
            Full Stack application with emphasis in web development using
            ReactJS and NodeJs.
          </li>
          <li>
            The main goal of the application was to promote the city of Porto
            and it’s businesses to tourists that visit it.
          </li>
          <li>
            Along with this application, a standalone back office app was
            developed to help with the management of the main platform.
          </li>
          <li>
            This was a solo project consisting of 2 platforms built using React,
            a database and an API created in NodeJS to fetch all the data and
            provide the CRUD functionalities.
          </li>

          <div id="code-icons">
            <div className="code-wrapper">
              <p>Main App</p>
              <a
                href="https://github.com/anamonteiro430/where-in-porto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={code} className="code" width="40" alt="see github" />
              </a>
              <a
                href="https://master.d1fix0uuibcm6e.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={website}
                  className="website"
                  width="50"
                  alt="go to website"
                />
              </a>
            </div>
            <div className="code-wrapper">
              <p>Dashboard</p>
              <a
                href="https://github.com/anamonteiro430/dashboard-wip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={code} className="code" width="40" alt="see github" />
              </a>
              <a
                href="https://master.de7igth8d2iuf.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={website}
                  className="website"
                  width="50"
                  alt="go to website"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={gol} alt="gol" className="image" height="294" />
        </div>
        <div className="project-info">
          <h3>Game of Life</h3>
          <p>Front End app built with ReactJS and CSS</p>
          <li>
            Front End application of the famous cellular automaton designed by
            the mathematician John Conway
          </li>
          <li>The app is composed of a grid with various rows and columns</li>
          <li>
            The grid has a number of cells that are either "dead" or "alive"
          </li>
          <li>
            Following the game's logic we can observe how the game evolves to
            create various figures and states
          </li>

          <div id="code-icons">
            <div className="code-wrapper">
              <p>App</p>
              <a
                href="https://github.com/anamonteiro430/game_of_life"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={code} className="code" width="40" alt="see github" />
              </a>
              <a
                href="https://cool-game-of-life.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={website}
                  className="website"
                  width="50"
                  alt="go to website"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={qh} alt="quickhire" className="image" />
        </div>
        <div className="project-info">
          <h3>Quickhire</h3>
          <p>Built with ReactJS, Redux, React Router, Styled Components</p>
          <li>
            The main goal of the application is to connect job seeking tech
            graduates to companies and recruiters.
          </li>
          <li>
            Through swiping left or right the job applicants can find their
            dream company and the recruiter can find potential candidates.
          </li>
          <li>
            Implementation of a redesigned UI that transformed the platform into
            a clean and functional app
          </li>
          <li>
            Implementation of API that fetches over 20000 entries from database
          </li>
          <li>User Authentication</li>

          <div id="code-icons">
            <div className="code-wrapper">
              <p>App</p>
              <a
                href="https://github.com/anamonteiro430/Job-Funnel-fe"
                target="_blank"
              >
                <img src={code} className="code" width="40" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a href="https://github.com/anamonteiro430" target="_blank">
        More projects on my Github
      </a>
    </div>
  );
};
