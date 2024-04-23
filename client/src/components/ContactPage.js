import React from 'react';

const ContactPage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="center">Contact Us</h1>
        <p className="center">
          If you have any questions, suggestions, or feedback, please don't
          hesitate to reach out to us.
        </p>
        <div className="contact-info">
          <div>
            <h3>Email</h3>
            <p>contact@bookreviewapp.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>123 456</p>
            <p>Vit vellore</p>
            <p>India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;