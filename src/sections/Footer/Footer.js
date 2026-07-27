import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Jordan Lerat. Built with React and Docker.
      </p>
    </footer>
  );
};

export default Footer;
