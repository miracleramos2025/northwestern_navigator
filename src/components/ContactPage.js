import React from 'react';
import contact1 from '../assets/images/contact.jpg';

const ContactPage = () => (
  <div>
    <h2>Contact</h2>
    <section id="contact">
      <div className="contact-image">
        <img src={contact1} alt="Letter being mailed to North Pole" />
      </div>
      <h3>Phone: (312) 945 - XMAS</h3>
      <h3>Email: <a href="mailto:contact@howtoholiday.com" className="email-link">contact@howtoholiday.com</a></h3>
      <h3>Socials: Find us on Instagram, Facebook, and TikTok @howtoholiday</h3>
    </section>
  </div>
);

export default ContactPage;
