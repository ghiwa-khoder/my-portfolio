import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CombinedSection = () => {
  return (
    <section
      id="combinedSection"
      className="relative min-h-screen flex items-center px-6 pt-28 md:pt-24 text-white bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0EA5E9]"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-[#F59E0B]">Ghiwa Khoder</span>
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-white/90">
            WordPress & Web Designer Developer
          </h2>

          <p className="text-white/80 max-w-xl mx-auto md:mx-0">
            I design and develop professional websites that help businesses
            present their services clearly, organize their content, and create a
            smooth user experience across all devices.
          </p>

          <p className="text-white/70 max-w-xl mx-auto md:mx-0">
            My work focuses on responsive design, WordPress development,
            intuitive navigation, bilingual content structure, SEO basics, and
            clean user interfaces that support real business goals.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {[
              "WordPress Development",
              "Responsive Design",
              "B2B Service Websites",
              "Bilingual Websites",
              "UI/UX",
              "SEO Basics",
            ].map((item) => (
              <span
                key={item}
                className="bg-white/5 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-white/60 text-sm">
            Selected work across service platforms, corporate websites, and
            bilingual digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a
              href="#portfolio"
              className="bg-[#F59E0B] px-6 py-3 rounded-lg font-semibold hover:bg-[#d97706] hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F172A] transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={require("../assets/profile.jpg")}
            alt="Ghiwa Khoder"
            className="rounded-full w-44 h-44 md:w-56 md:h-56 object-cover border-4 border-white/20 shadow-2xl mb-6"
          />

          <div className="flex gap-6">
            <a
              href="https://github.com/ghiwa-khoder"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="hover:text-[#F59E0B] transition"
              />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="hover:text-[#F59E0B] transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;