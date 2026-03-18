import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CombinedSection = () => {
  return (
    <section
      id="combinedSection"
      className="relative bg-gradient-to-r from-[#1E3A8A] to-[#22D3EE] text-white min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-[#F59E0B]">Ghiwa Khoder</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
            Designing and developing clear, user-friendly websites
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
            I design and develop websites that help clients present their services clearly,
            organize their content, and communicate effectively with their audience.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
            My approach focuses on responsive layouts, intuitive navigation, and clean
            content structure to ensure a smooth and consistent user experience across all devices.
          </p>

          {/* ✅ UX CAPABILITIES (very important) */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Responsive Design",
              "Clear Content Structure",
              "Usability Focus",
              "Intuitive Navigation",
            ].map((item) => (
              <span
                key={item}
                className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* ✅ TRUST LINE */}
          <p className="text-sm text-gray-300 pt-2">
            Selected work across service platforms, corporate websites, and bilingual digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">

            <a
              href="#portfolio"
              className="bg-[#F59E0B] hover:bg-[#d97706] text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E3A8A] transition duration-300"
            >
              Get in Touch
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center">

          <img
            src={require("../assets/profile.jpg")}
            alt="Ghiwa Khoder"
            className="rounded-full w-48 h-48 object-cover shadow-2xl mb-6 border-4 border-white/20"
          />

          <div className="flex gap-6">

            <a
              href="https://github.com/ghiwa-khoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F59E0B] transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F59E0B] transition transform hover:scale-110"
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