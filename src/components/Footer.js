import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

  return (
    <footer className="bg-darkGreen text-offWhite py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {currentYear} Ghiwa Khoder. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/ghiwa-khoder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightGreen transition"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightGreen transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;