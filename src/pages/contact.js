import React from 'react';

import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>
        Send me a raven via{' '}
        <a href="https://twitter.com/gordondoskas" target="_blank">
          @gordondoskas
        </a>{' '}
        on Twitter.
      </p>
    </Layout>
  );
};

export default ContactPage;
