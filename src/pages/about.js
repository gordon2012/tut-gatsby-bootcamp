import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I am legend.</p>
      <p>
        You can contact me <Link to="/contact">here</Link>.
      </p>
    </Layout>
  );
};

export default AboutPage;
