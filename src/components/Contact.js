import React from 'react';

export const Contact = () => {

    return (
        <div id="contact">
            <h2>Contact me</h2>
            <form method="post" id="form" class="topBefore">
                <input type="hidden" name="form-name" value="contact" />
                <input id="name" name="name" type="text" placeholder="Your Name" />
                <input id="email" name="email" type="text" placeholder="Your E-mail" />
                <textarea id="message" name="message" type="text" placeholder="Your Message"></textarea>
                <button id="submit" type="submit" value="GO!">Send</button>
            </form>
        </div>
    );
};
