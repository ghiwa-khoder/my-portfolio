import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* Back To Top Button */
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 bg-[#22D3EE] text-white p-3 rounded-full shadow-lg hover:bg-[#F59E0B] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1E3A8A] transition duration-300"
    >
      ↑
    </button>
  );
};

/* Footer */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#1E3A8A] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4 text-sm text-gray-200 max-w-xl mx-auto leading-6">
            Designing and developing clear, user-friendly digital experiences.
          </p>

          <p className="mb-6 text-[#F59E0B] font-medium">
            © {currentYear} Ghiwa Khoder. All rights reserved.
          </p>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/ghiwa-khoder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[#22D3EE] transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[#22D3EE] transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            <a
              href="mailto:ghiwa.khoder@hotmail.com"
              aria-label="Send Email"
              className="hover:text-[#22D3EE] transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </footer>

      <BackToTopButton />
    </>
  );
};

export default Footer;