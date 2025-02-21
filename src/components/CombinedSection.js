import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CombinedSection = () => {
  return (
    <section
      id="combinedSection"
      className="bg-gradient-to-r from-[#1E3A8A] to-[#22D3EE] text-offWhite min-h-screen flex items-center pt-32 sm:pt-40 md:pt-32 px-6 transition-all duration-1000 ease-in-out"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Hero Section */}
        <div className="flex flex-col items-start space-y-6 animate-fade-in-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight transition-all duration-300 hover:text-[#F59E0B]">
            Hi, I'm <span className="text-[#F59E0B]">Ghiwa Khoder</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100 opacity-90 transition-all duration-300 hover:text-[#F59E0B]">
            Full Stack Developer with a passion for building intuitive, scalable, and visually stunning web applications using modern technologies like React, Node.js, PHP, WordPress, and Laravel.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-100 opacity-90 transition-all duration-300 hover:text-[#F59E0B]">
            I specialize in creating responsive, user-friendly websites and applications that meet modern standards. Whether it's crafting dynamic front-end interfaces or robust back-end services, I love working across the stack to deliver optimal solutions.
          </p>
        </div>

        {/* Right: About Me Section */}
        <div className="flex flex-col items-center text-center md:text-left animate-fade-in-right">
          <img
            src={require('../assets/profile.jpg')} // Replace with your image path
            alt="Ghiwa Khoder"
            className="rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover mb-6 shadow-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
          />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-100 transition-all duration-300 hover:text-[#F59E0B]">
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-100 opacity-90 transition-all duration-300 hover:text-[#F59E0B]">
            I’m <span className="font-bold text-[#F59E0B]">Ghiwa Khoder</span>, a dedicated Full Stack Developer with expertise in creating innovative solutions. I specialize in crafting responsive, user-friendly designs that meet modern standards.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/ghiwa-khoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offWhite hover:text-[#1E3A8A] transition-all duration-300 transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offWhite hover:text-[#1E3A8A] transition-all duration-300 transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;