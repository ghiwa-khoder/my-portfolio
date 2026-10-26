import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "./components/ NavBar";
import CombinedSection from "./components/CombinedSection";
import Portfolio from "./components/ Portfolio";
import WebsiteOperations from "./components/WebsiteOperations";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
   SECTION THEMES
===================================================== */

const SECTION_THEMES = [
  {
    id: "combinedSection",
    background: "#F8FAF7",
  },
  {
    id: "portfolio",
    background: "#081426",
  },
  {
    id: "website-operations",
    background: "#081426",
  },
  {
    id: "skills",
    background: "#F8FAF7",
  },
  {
    id: "contact",
    background: "#081426",
  },
];

/* =====================================================
   APP
===================================================== */

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(main, {
        backgroundColor: SECTION_THEMES[0].background,
      });

      SECTION_THEMES.slice(1).forEach((theme, index) => {
        const current = document.getElementById(theme.id);

        if (!current) return;

        ScrollTrigger.create({
          trigger: current,
          start: "top bottom",
          end: "top 25%",

          onUpdate(self) {
            if (prefersReducedMotion) {
              gsap.set(main, {
                backgroundColor:
                  self.progress > 0.5
                    ? theme.background
                    : SECTION_THEMES[index].background,
              });

              return;
            }

            const color = gsap.utils.interpolate(
              SECTION_THEMES[index].background,
              theme.background,
              self.progress
            );

            gsap.set(main, {
              backgroundColor: color,
            });
          },
        });
      });
    }, main);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>
          Ghiwa Khoder | Web Developer & Website Management
        </title>

        <meta
          name="description"
          content="Ghiwa Khoder is a Web Developer specializing in interactive websites, WordPress development, website management, hosting, security, maintenance, and performance optimization."
        />

        <meta
          name="keywords"
          content="Ghiwa Khoder, MASAR Interactive, Web Developer, WordPress, Website Maintenance, Website Security, Hosting, VPS, WebGL, React"
        />

        <meta name="author" content="Ghiwa Khoder" />

        <meta name="theme-color" content="#F8FAF7" />
      </Helmet>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <NavBar />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main
        ref={mainRef}
        className="alternating-sections"
      >
        {/* HERO */}

        <CombinedSection />

        {/* SELECTED PROJECTS */}

        <Portfolio />

        {/* WEBSITE MANAGEMENT & OPERATIONS */}

        <WebsiteOperations />

        {/* SKILLS */}

        <Skills />

        {/* CONTACT */}

        <Contact />
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}

export default App;