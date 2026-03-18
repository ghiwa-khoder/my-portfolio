import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [active, setActive] = useState("combinedSection");
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll with offset (important fix)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // offset for fixed navbar
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActive(id);
    }
  };

  // Detect scroll for shadow + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["combinedSection", "portfolio", "skills", "contact"];

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative transition-all duration-300 ${
      active === id
        ? "text-amber-400"
        : "hover:text-amber-400 text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#1E3A8A] to-[#22D3EE] shadow-lg backdrop-blur-md"
          : "bg-gradient-to-r from-[#1E3A8A] to-[#22D3EE]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("combinedSection")}
          className="text-2xl font-extrabold tracking-wide hover:text-amber-400 transition-all"
        >
          GK
        </button>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">

          <button
            onClick={() => scrollToSection("combinedSection")}
            className={linkClass("combinedSection")}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("portfolio")}
            className={linkClass("portfolio")}
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className={linkClass("skills")}
          >
            Skills
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={linkClass("contact")}
          >
            Contact
          </button>

        </div>

        {/* CTA Button (very important for professionalism) */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-white text-[#1E3A8A] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-400 hover:text-white transition-all"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default NavBar;