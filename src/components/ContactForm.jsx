import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>e-Mail:</label>
        <input type="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea></textarea>
      </div>
      <button type="submit">send</button>
    </form>
  );
};

export default ContactForm; 