import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page Not Found</h1>
      <p>
        Go to a <Link to="/">better place</Link>.
      </p>
    </Layout>
  );
};

export default NotFound;
