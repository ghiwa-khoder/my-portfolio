import React, { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "combinedSection", label: "Home" },
  { id: "portfolio", label: "Work" },
  { id: "skills", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const [active, setActive] = useState("combinedSection");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [onLight, setOnLight] = useState(true);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  const linksRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navHeight =
      navRef.current?.getBoundingClientRect().height || 80;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navHeight +
      1;

    window.scrollTo({
      top,
      behavior: reducedMotion ? "auto" : "smooth",
    });

    setActive(id);
    setMobileOpen(false);
  };

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

      setProgress(
        max > 0
          ? Math.min(100, (window.scrollY / max) * 100)
          : 0
      );

      setScrolled(window.scrollY > 24);

      const offset =
        (navRef.current?.getBoundingClientRect().height ||
          80) + 30;

      let current = "combinedSection";

      for (const item of SECTIONS) {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.getBoundingClientRect().top <= offset
        ) {
          current = item.id;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) {
        const last = [...SECTIONS]
          .reverse()
          .find((item) => document.getElementById(item.id));

        if (last) current = last.id;
      }

      setActive(current);
      setOnLight(
        current === "combinedSection" || current === "skills"
      );
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const container = linksRef.current;
    if (!container) return undefined;

    const update = () => {
      const buttons = [
        ...container.querySelectorAll(
          "button[data-section]"
        ),
      ];

      const button = buttons.find(
        (node) => node.dataset.section === active
      );

      if (!button) return;

      setIndicator({
        left: button.offsetLeft,
        width: button.offsetWidth,
        ready: true,
      });
    };

    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, [active]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    const onPointerDown = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(
        "pointerdown",
        onPointerDown
      );
    };
  }, [mobileOpen]);

  const moveLogo = (event) => {
    if (
      reducedMotion ||
      event.pointerType === "touch" ||
      !logoRef.current
    ) {
      return;
    }

    const rect = logoRef.current.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    logoRef.current.style.transform = `translate(${
      x * 0.12
    }px, ${y * 0.12}px)`;
  };

  const resetLogo = () => {
    if (logoRef.current) {
      logoRef.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className={`
        fixed inset-x-0 top-0 z-50
        border-b
        transition-[background-color,border-color,box-shadow]
        duration-500
        ${
          onLight
            ? scrolled
              ? "border-[#081426]/10 bg-white/90 shadow-[0_12px_36px_rgba(8,20,38,0.08)] backdrop-blur-xl"
              : "border-[#081426]/10 bg-white/75 backdrop-blur-md"
            : scrolled
            ? "border-[#C6F36B]/20 bg-[#081426]/90 shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            : "border-white/10 bg-[#081426]/80 backdrop-blur-md"
        }
      `}
    >
      <style>{`
        @keyframes navDrop {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes navLinkEnter {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-mobile-enter {
          animation: navDrop .28s ease-out both;
        }

        .nav-mobile-link {
          animation: navLinkEnter .32s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-mobile-enter,
          .nav-mobile-link {
            animation: none !important;
          }

          .nav-motion {
            transition: none !important;
          }
        }
      `}</style>

      <div
        className="
          mx-auto flex max-w-7xl
          items-center justify-between
          gap-5 px-6 py-4
        "
      >
        <button
          ref={logoRef}
          type="button"
          onClick={() => scrollToSection("combinedSection")}
          onPointerMove={moveLogo}
          onPointerLeave={resetLogo}
          aria-label="Ghiwa Khoder — back to home"
          className="
            nav-motion
            inline-flex shrink-0 items-center
            text-2xl font-black
            tracking-[-0.08em]
            transition-transform duration-300
            focus-visible:rounded
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#C6F36B]
          "
        >
          <span
            className={
              onLight ? "text-[#527B17]" : "text-[#C6F36B]"
            }
          >
            G
          </span>

          <span
            className={
              onLight ? "text-[#081426]" : "text-white"
            }
          >
            K<span className="text-[#FF914D]">.</span>
          </span>
        </button>

        <div
          ref={linksRef}
          className="
            relative hidden items-center gap-8 md:flex
          "
        >
          {SECTIONS.map((item) => (
            <button
              key={item.id}
              data-section={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-current={
                active === item.id ? "location" : undefined
              }
              className={`
                nav-motion relative z-10 pb-1
                text-sm font-semibold tracking-wide
                transition-colors duration-300
                focus-visible:rounded
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#C6F36B]
                ${
                  active === item.id
                    ? onLight
                      ? "text-[#527B17]"
                      : "text-[#C6F36B]"
                    : onLight
                    ? "text-[#081426]/65 hover:text-[#081426]"
                    : "text-white/75 hover:text-white"
                }
              `}
            >
              {item.label}
            </button>
          ))}

          <span
            aria-hidden="true"
            className="
              nav-motion pointer-events-none
              absolute -bottom-1 h-[2px]
              rounded-full bg-[#C6F36B]
              transition-[left,width]
              duration-300 ease-out
            "
            style={{
              left: indicator.left,
              width: indicator.ready ? indicator.width : 0,
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="
            nav-motion hidden min-h-11
            items-center gap-3 rounded-full
            bg-[#C6F36B] px-6 py-2
            text-sm font-bold text-[#081426]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-[#E8F5CC]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#C6F36B]
            md:inline-flex
          "
        >
          Let's Create
          <span aria-hidden="true">↗</span>
        </button>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="portfolio-mobile-menu"
          className={`
            inline-flex h-11 w-11
            items-center justify-center
            rounded-full border text-2xl
            ${
              onLight
                ? "border-[#081426]/20 text-[#081426] hover:bg-[#081426]/5"
                : "border-white/20 text-[#C6F36B] hover:bg-white/10"
            }
            transition-colors
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#C6F36B]
            md:hidden
          `}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="portfolio-mobile-menu"
          className="
            nav-mobile-enter
            flex flex-col gap-2
            border-t border-white/10
            bg-[#081426]/95
            px-6 pb-6 pt-4
            shadow-2xl backdrop-blur-xl
            md:hidden
          "
        >
          {SECTIONS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-current={
                active === item.id ? "location" : undefined
              }
              style={{
                animationDelay: `${index * 45}ms`,
              }}
              className={`
                nav-mobile-link
                min-h-12 rounded-xl
                px-4 py-3 text-left
                text-sm font-semibold
                transition-colors
                ${
                  active === item.id
                    ? "bg-[#C6F36B]/10 text-[#C6F36B]"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {String(index + 1).padStart(2, "0")}
              <span className="ml-3">{item.label}</span>
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="
              mt-3 min-h-12 rounded-full
              bg-[#C6F36B] px-6 py-3
              text-sm font-bold text-[#081426]
              transition-colors hover:bg-white
            "
          >
            Let's Create ↗
          </button>
        </div>
      )}

      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-[2px] bg-[#081426]/10
        "
        aria-hidden="true"
      >
        <div
          className={`
            h-full
            transition-[width]
            duration-150 ease-linear
            ${onLight ? "bg-[#527B17]" : "bg-[#C6F36B]"}
          `}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;