import React, { useState } from 'react';
import axios from 'axios';

export const Contact = () => {

    return (
        <div id="contact">
            <h2>Contact me</h2>
            <form action="POST" data-netlify="true" className="contact-form">
                <label class="message" htmlFor="message-input">Your Message</label>
                <textarea name="message" class="message-input" type="text" placeholder="Please write your message here" />

                <label class="message-name" htmlFor="message-name">Your Name</label>
                <input name="name" class="message-name" type="text" placeholder="Your Name" />

                <label class="message-email" htmlFor="message-email">Your Email</label>
                <input name="email" class="message-email" type="email" placeholder="your@email.com" />

                <input type="file" name="myfile" id="myfile" placeholder="Upload File" />
                <div className="button--container">
                    <button type="submit" className="button button-primary">sss</button>
                </div>
            </form>
        </div>
    );
};
