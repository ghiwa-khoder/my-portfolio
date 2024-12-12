import React from 'react';
import Scrollspy from 'react-scrollspy';

const NavBar = () => {
  return (
    <nav className="bg-darkGreen text-offWhite fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <a href="#hero" className="flex items-center space-x-2">
          <span className="text-xl font-bold">GK</span>
        </a>

        {/* Navigation Links with Scrollspy */}
        <Scrollspy
          items={['hero', 'about', 'portfolio', 'contact']}
          currentClassName="text-lightGreen"
          className="flex space-x-6"
        >
          <li>
            <a href="#hero" className="hover:text-lightGreen transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-lightGreen transition">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-lightGreen transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-lightGreen transition">
              Contact
            </a>
          </li>
        </Scrollspy>
      </div>
    </nav>
  );
};

export default NavBar;