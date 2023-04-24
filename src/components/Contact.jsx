import React from "react";
import contact from "../styles/contact.scss";

export default function Contact() {
  return (
    <div name="contact" className="contact-container">
      <div className="contact-content">
        <div className="contact-top">
          <h1>Contact</h1>
          <p>
            Submit the form below to get in touch with me or email me at
            justinnewpoff@gmail.com
          </p>
        </div>
        <div className="contact-bottom">
          <form
            method="POST"
            action="https://getform.io/f/5e95797b-285b-421e-8031-7ed08f917121"
          >
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit">Contact Me</button>
          </form>
        </div>
      </div>
    </div>
  );
}
