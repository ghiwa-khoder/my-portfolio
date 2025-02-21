import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Correct import for faEnvelope

// BackToTopButton Component
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#22D3EE] text-offWhite p-3 rounded-full shadow-lg hover:bg-[#F59E0B] transition-all duration-300"
      >
        ↑
      </button>
    )
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

  return (
    <>
      <footer className="bg-[#1E3A8A] text-offWhite py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-[#F59E0B]">
            &copy; {currentYear} Ghiwa Khoder. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/ghiwa-khoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#22D3EE] transition-all duration-300 transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#22D3EE] transition-all duration-300 transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:ghiwa.khoder@hotmail.com"
              className="hover:text-[#22D3EE] transition-all duration-300 transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
};

export default Footer;