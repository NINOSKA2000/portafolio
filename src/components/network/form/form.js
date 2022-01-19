/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import emailjs from "emailjs-com";
import { FormattedMessage } from "react-intl";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_i8z7m62",
        e.target,
        "user_3KZ8WDPK2qmbakHzhASO0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("mensaje enviado con éxito");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail} className="social-form">
      <label>
        <FormattedMessage id="social-media-form-name" defaultMessage="name" />
      </label>
      <input type="text" name="user_name"  />
      <label>
        <FormattedMessage id="social-media-form-email" defaultMessage="email" />
      </label>
      <input type="email" name="user_email" />
      <label>
           <FormattedMessage
          id="social-media-form-message"
          defaultMessage="message"
        />
      </label>
      <textarea name="message" />

      <div >
       <button type="submit" className="main-contenedor-button" >
        <FormattedMessage
          id="social-media-form-send"
          defaultMessage="message"
        />
        </button>
      </div>


    </form>
  );
};

export default ContactUs;
