import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>
        Send me a raven via{' '}
        <a href="https://twitter.com/gordondoskas" target="_blank">
          @gordondoskas
        </a>{' '}
        on Twitter.
      </p>
      <Footer />
    </div>
  );
};

export default ContactPage;
