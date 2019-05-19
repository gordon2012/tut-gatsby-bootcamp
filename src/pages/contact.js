import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        Send me a raven via{' '}
        <a
          href="https://twitter.com/gordondoskas"
          target="_blank"
          rel="noopener noreferrer"
        >
          @gordondoskas
        </a>{' '}
        on Twitter.
      </p>
    </Layout>
  );
};

export default ContactPage;
