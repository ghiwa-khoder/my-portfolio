import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [active, setActive] = useState("combinedSection");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActive(id);
      setMobileOpen(false);
    }
  };

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition-all duration-300 ${
      active === id ? "text-amber-400" : "text-white hover:text-amber-400"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md shadow-lg"
          : "bg-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("combinedSection")}
          className="text-xl md:text-2xl font-extrabold text-white hover:text-amber-400 transition"
        >
          GK
        </button>

        {/* Desktop Nav */}
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
            Work
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className={linkClass("skills")}
          >
            Capabilities
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={linkClass("contact")}
          >
            Contact
          </button>
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-[#F59E0B] px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-[#d97706] hover:scale-105 transition"
        >
          Let's Talk
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F172A] px-6 pb-5 flex flex-col gap-4 text-white">
          <button onClick={() => scrollToSection("combinedSection")}>
            Home
          </button>

          <button onClick={() => scrollToSection("portfolio")}>Work</button>

          <button onClick={() => scrollToSection("skills")}>
            Capabilities
          </button>

          <button onClick={() => scrollToSection("contact")}>Contact</button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#F59E0B] py-3 rounded-lg font-semibold"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;