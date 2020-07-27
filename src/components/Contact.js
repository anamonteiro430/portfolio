import React from 'react';
import linkedin from './../images/linkedin.svg';
import github from './../images/github.svg';

export const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact me</h2>
      <div id="contact-icons">
        <a href="https://www.linkedin.com/in/anamonteiro430/" target="_blank">
          <img src={linkedin} className="linkedin" width="42" />
        </a>
        <a href="https://github.com/anamonteiro430" target="_blank">
          <img src={github} className="github" width="42" />
        </a>
      </div>
      <form
        method="POST"
        id="form"
        class="topBefore"
        name="contact"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input id="name" name="name" type="text" placeholder="Your Name" />
        <input id="email" name="email" type="text" placeholder="Your E-mail" />
        <input
          id="message"
          name="message"
          type="text"
          placeholder="Your Message"
        ></input>
        <button id="submit" type="submit" value="GO!">
          Send
        </button>
      </form>
    </div>
  );
};
