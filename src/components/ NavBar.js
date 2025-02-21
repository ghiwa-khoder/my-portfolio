import React from 'react';

const NavBar = () => {
  // Function to handle scroll to specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id); // Find the section by its ID
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#1E3A8A] to-[#22D3EE] text-offWhite fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <a
          href="#combinedSection"
          onClick={() => scrollToSection('combinedSection')} // Smooth scroll to CombinedSection
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-extrabold hover:text-[#F59E0B] transition-all duration-300">
            GK
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a
            href="#combinedSection"
            onClick={() => scrollToSection('combinedSection')} // Smooth scroll to CombinedSection
            className="hover:text-[#F59E0B] transition-all duration-300 transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#skills"
           onClick={() => scrollToSection('skills')}
           className="hover:text-[#F59E0B] transition-all duration-300 transform hover:scale-105"
          >
           Skills
          </a>    
          <a
            href="#portfolio"
            onClick={() => scrollToSection('portfolio')} // Smooth scroll to Portfolio section
            className="hover:text-[#F59E0B] transition-all duration-300 transform hover:scale-105"
          >
            Portfolio
          </a>
          
          <a
            href="#contact"
            onClick={() => scrollToSection('contact')} // Smooth scroll to Contact section
            className="hover:text-[#F59E0B] transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;