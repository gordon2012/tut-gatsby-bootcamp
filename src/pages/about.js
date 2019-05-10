import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I am legend.</p>
      <p>
        You can contact me <Link to="/contact">here</Link>.
      </p>
    </div>
  );
};

export default AboutPage;
