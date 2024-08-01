import * as React from 'react';
import '../../../public/styles/home/home-contact-form.css';

export interface IHomeContactFormProps {
}

export default function HomeContactForm (props: IHomeContactFormProps) {
  return (
    <div className="home-contact-form">
      <div className="home-contact-form--content">
        <div className="home-contact-form--title">
          Contact Us
        </div>
        <div className="home-contact-form--description">
          We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
        </div>
        <div className="home-contact-form--form">
          <div className="home-contact-form--input">
            <div className="home-contact-form--label">
              Name
            </div>
            <input className="home-contact-form--input-field"/>
          </div>
          <div className="home-contact-form--input">
            <div className="home-contact-form--label">
              Email
            </div>
            <input className="home-contact-form--input-field"/>
          </div>
          <div className="home-contact-form--input">
            <div className="home-contact-form--label">
              Message
            </div>
            <textarea className="home-contact-form--input-field"/>
          </div>
        </div>
      </div>
    </div>
  );
}
