import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className="bg-veryLightGreen text-darkGreen py-12 px-6 flex flex-col items-center text-center">
      {/* Profile Image */}
      <img
        src={require('../assets/profile.jpg')} // Replace with the correct path to your image
        alt="Ghiwa Khoder"
        className="rounded-full w-40 h-40 object-cover mb-6 shadow-lg"
      />

      {/* About Me Title */}
      <h2 className="text-4xl font-semibold mb-6">About Me</h2>

      {/* Bio */}
      <p className="text-lg max-w-2xl">
        Hi! I’m <span className="font-bold">Ghiwa Khoder</span>, a passionate and aspiring
        full-stack developer. I love creating intuitive and visually appealing
        websites and web applications. I’m proficient in React, Node.js, and more, and I
        enjoy learning new technologies to improve my skills.
      </p>

      {/* Social Links */}
      <div className="mt-8 flex space-x-6">
        {/* GitHub Icon */}
        <a
          href="https://github.com/ghiwa-khoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mediumGreen hover:text-lightGreen transition"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mediumGreen hover:text-lightGreen transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default About;