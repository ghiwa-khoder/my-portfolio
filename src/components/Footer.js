import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

/* =====================================================
   NAVIGATION
===================================================== */

const links = [
  { label: "Home", href: "#combinedSection" },
  { label: "Work", href: "#portfolio" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* =====================================================
   BACK TO TOP
===================================================== */

function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);

    update();

    media.addEventListener?.("change", update);

    return () => {
      media.removeEventListener?.("change", update);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setVisible(window.scrollY > 300);

      setProgress(
        max > 0
          ? Math.min(100, (window.scrollY / max) * 100)
          : 0
      );
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`
        fixed bottom-6 right-6 z-50
        grid h-14 w-14 place-items-center
        rounded-full
        bg-[#081426]
        text-xl font-bold text-[#C6F36B]
        shadow-xl shadow-black/30
        transition-all duration-300
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#C6F36B]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      {/* CIRCULAR SCROLL PROGRESS */}

      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(
            #C6F36B ${progress}%,
            rgba(255,255,255,.16) ${progress}%
          )`,
        }}
      />

      <span
        aria-hidden="true"
        className="
          absolute inset-[3px]
          rounded-full bg-[#081426]
        "
      />

      <span
        aria-hidden="true"
        className="
          relative
          transition-transform duration-300
          hover:-translate-y-1
        "
      >
        ↑
      </span>
    </button>
  );
}

/* =====================================================
   FOOTER
===================================================== */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerRef = useRef(null);

  const [pointer, setPointer] = useState({
    x: 50,
    y: 50,
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);

    update();

    media.addEventListener?.("change", update);

    return () => {
      media.removeEventListener?.("change", update);
    };
  }, []);

  /* =====================================================
     INTERACTIVE BACKGROUND
  ===================================================== */

  const moveGlow = (event) => {
    if (
      reducedMotion ||
      event.pointerType === "touch" ||
      !footerRef.current
    ) {
      return;
    }

    const rect = footerRef.current.getBoundingClientRect();

    setPointer({
      x:
        ((event.clientX - rect.left) / rect.width) *
        100,

      y:
        ((event.clientY - rect.top) / rect.height) *
        100,
    });
  };

  return (
    <>
      <footer
        ref={footerRef}
        onPointerMove={moveGlow}
        className="
          relative overflow-hidden
          border-t border-white/10
          bg-[#06101E]
          px-6 pb-8 pt-20
          text-white
        "
      >
        {/* ANIMATIONS */}

        <style>{`
          @keyframes footerReveal {
            from {
              opacity: 0;
              transform: translateY(24px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .footer-reveal {
            animation: footerReveal .8s ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .footer-reveal {
              animation: none;
            }
          }
        `}</style>

        {/* MOUSE-FOLLOWING GLOW */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            opacity-50
          "
          style={{
            background: `radial-gradient(
              540px circle at ${pointer.x}% ${pointer.y}%,
              rgba(198,243,107,.075),
              transparent 75%
            )`,
          }}
        />

        {/* STATIC BACKGROUND GLOW */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -bottom-44 left-1/2
            h-96 w-96
            -translate-x-1/2
            rounded-full
            bg-[#C6F36B]/5
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl">
          {/* =====================================================
              MAIN FOOTER
          ===================================================== */}

          <div
            className="
              grid gap-12
              border-b border-white/15
              pb-16
              md:grid-cols-[1.15fr_.85fr]
              md:gap-20
            "
          >
            {/* LEFT CONTENT */}

            <div className="footer-reveal">
              <p
                className="
                  mb-5 text-xs
                  font-bold uppercase
                  tracking-[.28em]
                  text-[#C6F36B]
                "
              >
                KEEP CREATING / KEEP CONNECTING
              </p>

              <h2
                className="
                  max-w-xl
                  text-4xl font-black
                  uppercase
                  leading-[1.02]
                  tracking-[-.055em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                LET'S MAKE
                <br />

                <span className="text-[#C6F36B]">
                  SOMETHING
                </span>

                {" "}GREAT

                <span className="text-[#FF914D]">
                  .
                </span>
              </h2>

              {/* CTA */}

              <a
                href="mailto:ghiwa.khoder@hotmail.com"
                className="
                  group mt-8 inline-flex
                  min-h-12 items-center gap-3
                  rounded-full
                  bg-[#C6F36B]
                  px-6 py-3
                  text-sm font-bold
                  text-[#081426]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#C6F36B]
                "
              >
                START A CONVERSATION

                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>

            {/* RIGHT CONTENT */}

            <div className="grid gap-9 sm:grid-cols-2">
              {/* NAVIGATION */}

              <div>
                <h3
                  className="
                    mb-5 text-xs
                    font-bold uppercase
                    tracking-[.2em]
                    text-[#FF914D]
                  "
                >
                  EXPLORE
                </h3>

                <nav
                  aria-label="Footer navigation"
                  className="
                    flex flex-col
                    items-start gap-4
                  "
                >
                  {links.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="
                        group inline-flex
                        items-center gap-3
                        text-sm text-white/65
                        transition-all duration-300
                        hover:translate-x-1
                        hover:text-[#C6F36B]
                      "
                    >
                      <span
                        className="
                          font-mono text-[10px]
                          text-[#FF914D]/70
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {link.label}

                      <span
                        aria-hidden="true"
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* SOCIAL LINKS */}

              <div>
                <h3
                  className="
                    mb-5 text-xs
                    font-bold uppercase
                    tracking-[.2em]
                    text-[#FF914D]
                  "
                >
                  FIND ME
                </h3>

                <div
                  className="
                    flex flex-col
                    items-start gap-4
                  "
                >
                  <a
                    href="https://github.com/ghiwa-khoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex
                      items-center gap-3
                      text-sm text-white/65
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#C6F36B]
                    "
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex
                      items-center gap-3
                      text-sm text-white/65
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#C6F36B]
                    "
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="mailto:ghiwa.khoder@hotmail.com"
                    className="
                      group inline-flex
                      items-center gap-3
                      text-sm text-white/65
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#C6F36B]
                    "
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              BRAND SECTION
          ===================================================== */}

          <div
            className="
              flex flex-wrap
              items-center justify-between
              gap-6
              border-b border-white/10
              py-8
            "
          >
            <div>
              <p
                className="
                  text-2xl font-black
                  tracking-[-.05em]
                "
              >
                GHIWA

                <span className="text-[#C6F36B]">
                  .
                </span>
              </p>

              <p
                className="
                  mt-1 text-xs
                  uppercase tracking-[.18em]
                  text-white/45
                "
              >
                Creative Web Developer & Designer
              </p>
            </div>

            {/* MASAR INTERACTIVE */}

            <a
              href="https://masar-interactive.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex
                items-center gap-3
                rounded-full
                border border-[#C6F36B]/30
                px-4 py-3
                text-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#C6F36B]
                hover:bg-[#C6F36B]/5
              "
            >
              <span className="text-white/55">
                Founder of
              </span>

              <span className="font-bold text-[#C6F36B]">
                MASAR Interactive
              </span>

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="
                  text-[#FF914D]
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>

          {/* =====================================================
              COPYRIGHT
          ===================================================== */}

          <div
            className="
              flex flex-wrap
              items-center justify-between
              gap-3
              pt-7
              text-xs text-white/45
            "
          >
            <p>
              © {currentYear} Ghiwa Khoder.
              All rights reserved.
            </p>

            <p>
              Designed & developed with intention{" "}

              <span className="text-[#FF914D]">
                ✳
              </span>
            </p>
          </div>
        </div>
      </footer>

      <BackToTopButton />
    </>
  );
}