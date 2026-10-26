import React, { useRef, useState } from "react";

/* =====================================================
   PROJECTS DATA
===================================================== */

const projects = [
  {
    name: "MASAR Interactive",
    url: "https://masar-interactive.vercel.app/",
    role: "Founder & CEO | Creative Developer",
    focus: "Independent Creative Web Studio",
    description:
      "An independent creative web studio founded to explore and build distinctive digital experiences. The project focuses on interactive website development, creative visual storytelling, and modern frontend technologies.",
    responsibilities: [
      "Founded MASAR Interactive and established its creative direction",
      "Developed the studio's visual identity and digital concept",
      "Designed and developed an interactive studio website",
      "Implemented responsive layouts and interactive experiences",
      "Managed website deployment and ongoing development",
      "Developed original website concepts and portfolio projects",
    ],
    impact:
      "Established the brand identity and digital presence of an independent creative web studio, creating a foundation for future client projects and interactive digital experiences.",
    stack: [
      "React",
      "Next.js",
      "Three.js",
      "WebGL",
      "GSAP",
      "Creative Development",
    ],
  },
  {
    name: "Fixer FM",
    url: "https://fixerfm.com/ar",
    role: "Web Designer & Developer",
    focus: "B2B Service Website",
    description:
      "A service-oriented website developed to improve how facility management services are presented and accessed, with a focus on clear content structure, usability, and responsive user experience.",
    responsibilities: [
      "Designed and customized responsive website pages",
      "Structured service content for better usability",
      "Improved website performance and user experience",
      "Supported website deployment, content updates, and ongoing maintenance",
    ],
    impact:
      "Enhanced service visibility and improved user navigation through structured layouts and responsive design.",
    stack: [
      "WordPress",
      "UI/UX",
      "SEO Basics",
      "Responsive Design",
    ],
  },
  {
    name: "Techtrum",
    url: "https://techtrum.net/en",
    role: "Web Designer & Developer",
    focus: "B2B Corporate Website",
    description:
      "A corporate WordPress website developed to organize digital and professional services in a clear, structured, and intuitive way, supporting easier navigation and a stronger user experience.",
    responsibilities: [
      "Customized WordPress pages and layouts",
      "Improved navigation structure and user experience",
      "Developed and customized service and content pages",
      "Ensured cross-device responsiveness",
    ],
    impact:
      "Improved clarity of digital services and created a smoother browsing experience across devices.",
    stack: [
      "WordPress",
      "JavaScript",
      "Responsive Design",
      "Content Structure",
    ],
  },
  {
    name: "SmartCat",
    url: "https://smartcat.sa/en",
    role: "Full Stack Developer",
    focus: "Bilingual Website & Technical Operations",
    description:
      "A bilingual WordPress website developed and maintained to present translation and localization services. My work combined website development, content administration, and ongoing technical support.",
    responsibilities: [
      "Built and maintained bilingual Arabic and English website content",
      "Managed WordPress administration and content updates",
      "Supported website hosting and technical maintenance",
      "Managed hosting accounts and server-related operations",
      "Worked with databases, backups, and website data",
      "Supported security improvements and technical troubleshooting",
      "Ensured responsive functionality across devices",
    ],
    impact:
      "Supported the website's multilingual usability, technical maintenance, and continued operation while improving access to service information.",
    stack: [
      "WordPress",
      "PHP",
      "Hosting",
      "Databases",
      "Website Maintenance",
      "Security",
    ],
  },
  {
    name: "Codexa – Next.js Mentor Internship",
    url: "#",
    role: "Next.js Mentor",
    focus: "Mentorship & Frontend Training",
    description:
      "A practical mentorship internship focused on guiding junior developers through Next.js fundamentals, reusable components, project structure, responsive UI, and portfolio-based learning.",
    responsibilities: [
      "Prepared and delivered practical Next.js training sessions",
      "Mentored interns on reusable components and project structure",
      "Guided students in building responsive frontend sections",
      "Reviewed code and explained best practices during live sessions",
    ],
    impact:
      "Supported junior developers in improving their React and Next.js skills through hands-on learning and real project practice.",
    stack: [
      "Next.js",
      "React",
      "Mentorship",
      "Reusable Components",
    ],
  },
  {
    name: "Samaaka – Samaka",
    url: "https://samaaka.com.sa/en/samaka",
    role: "Web Designer & Developer",
    focus: "Service Page Design",
    description:
      "A service page developed to communicate engineering services through a clean layout, strong visual hierarchy, and responsive presentation.",
    responsibilities: [
      "Developed and customized service pages",
      "Improved visual hierarchy and content clarity",
      "Ensured responsive behavior across devices",
      "Enhanced UI consistency across sections",
    ],
    impact:
      "Strengthened presentation of services and improved readability for website visitors.",
    stack: [
      "React",
      "UI Design",
      "Responsive Layout",
      "Service Pages",
    ],
  },
  {
    name: "Samaaka – Samaakat",
    url: "https://samaaka.com.sa/en/samaakat",
    role: "Web Designer & Developer",
    focus: "Content Organization",
    description:
      "A dedicated section developed to organize and present specialized services with improved clarity, consistency, and content flow.",
    responsibilities: [
      "Organized complex content into structured sections",
      "Improved user navigation experience",
      "Maintained design consistency across pages",
      "Supported content organization and page updates",
    ],
    impact:
      "Improved content flow and reduced user confusion through better organization of specialized services.",
    stack: [
      "React",
      "Content Strategy",
      "UI Consistency",
      "Navigation",
    ],
  },
];

/* =====================================================
   PORTFOLIO COMPONENT
===================================================== */

const Portfolio = () => {
  const [selected, setSelected] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const previewRef = useRef(null);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const [glow, setGlow] = useState({
    x: 50,
    y: 50,
  });

  const project = projects[selected];

  /* =====================================================
     MOUSE INTERACTION
  ===================================================== */

  const movePreview = (event) => {
    if (
      event.pointerType === "touch" ||
      !previewRef.current
    ) {
      return;
    }

    const rect =
      previewRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - y) * 7,
      y: (x - 0.5) * 9,
    });

    setGlow({
      x: x * 100,
      y: y * 100,
    });
  };

  const resetPreview = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  /* =====================================================
     PROJECT NAVIGATION
  ===================================================== */

  const choose = (index) => {
    setSelected(index);
    setImageError(false);
    setDetailsOpen(false);
    resetPreview();
  };

  const next = () => {
    choose((selected + 1) % projects.length);
  };

  const previous = () => {
    choose(
      (selected - 1 + projects.length) %
        projects.length
    );
  };

  return (
    <section
      id="portfolio"
      className="
        relative overflow-hidden
        bg-transparent
        px-6 py-24
        text-white
        md:py-32
      "
    >
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes portfolioReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .portfolio-reveal {
          animation: portfolioReveal .5s ease-out both;
        }

        .portfolio-preview {
          transform-style: preserve-3d;
          transition:
            transform .22s ease-out,
            border-color .25s;
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-reveal {
            animation: none;
          }

          .portfolio-preview {
            transform: none !important;
            transition: none;
          }
        }
      `}</style>

      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute -right-40 top-10
          h-96 w-96
          rounded-full
          bg-[#C6F36B]/5
          blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            mb-14
            flex flex-wrap
            items-end justify-between
            gap-6
            border-b border-white/15
            pb-8
          "
        >
          <div>
            <p
              className="
                mb-4 text-xs
                font-bold uppercase
                tracking-[.28em]
                text-[#C6F36B]
              "
            >
              01 / SELECTED WORK
            </p>

            <h2
              className="
                text-4xl
                font-black uppercase
                leading-none
                tracking-[-.055em]
                md:text-6xl
              "
            >
              PROJECTS
              <span className="text-[#FF914D]">
                .
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm leading-7
              text-white/60
            "
          >
            Selected websites and digital experiences,
            with a closer look at my role, technical
            contributions, and the work behind each
            project.
          </p>
        </div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid gap-10
            lg:grid-cols-[.38fr_.62fr]
            lg:gap-14
          "
        >
          {/* =====================================================
              LEFT PROJECT SELECTOR
          ===================================================== */}

          <div className="flex flex-col justify-between">
            <div className="border-t border-white/15">
              {projects.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => choose(index)}
                  aria-pressed={selected === index}
                  className={`
                    group
                    flex min-h-[76px]
                    w-full items-center
                    gap-5
                    border-b border-white/15
                    py-4
                    text-left
                    transition-colors
                    hover:pl-2
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-[#C6F36B]
                    ${
                      selected === index
                        ? "text-[#C6F36B]"
                        : "text-white/65 hover:text-white"
                    }
                  `}
                >
                  {/* ACTIVE MARKER */}

                  <span
                    aria-hidden="true"
                    className={`
                      h-8 w-0.5 shrink-0
                      rounded-full
                      transition-colors
                      ${
                        selected === index
                          ? "bg-[#C6F36B]"
                          : "bg-transparent group-hover:bg-white/20"
                      }
                    `}
                  />

                  {/* PROJECT NUMBER */}

                  <span className="text-xs font-bold tabular-nums">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  {/* PROJECT NAME */}

                  <span
                    className="
                      min-w-0 flex-1
                      text-lg font-bold
                      leading-tight
                      md:text-xl
                    "
                  >
                    {item.name}
                  </span>

                  {/* ARROW */}

                  <span
                    className={`
                      text-xl
                      transition-transform
                      ${
                        selected === index
                          ? "translate-x-1 text-[#FF914D]"
                          : "group-hover:translate-x-1"
                      }
                    `}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </button>
              ))}
            </div>

            {/* =====================================================
                PROJECT NAVIGATION
            ===================================================== */}

            <div
              className="
                mt-8 flex
                items-center justify-between
                gap-5
              "
            >
              {/* COUNTER */}

              <span className="font-mono text-sm text-white/65">
                <span className="text-[#C6F36B]">
                  {String(selected + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                {" / "}

                {String(projects.length).padStart(
                  2,
                  "0"
                )}
              </span>

              {/* PROGRESS BAR */}

              <div
                className="
                  h-1 min-w-12 flex-1
                  overflow-hidden
                  rounded-full
                  bg-white/10
                "
                aria-label={`Project ${
                  selected + 1
                } of ${projects.length}`}
              >
                <div
                  className="
                    h-full rounded-full
                    bg-[#C6F36B]
                    transition-all duration-500
                  "
                  style={{
                    width: `${
                      ((selected + 1) /
                        projects.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              {/* ARROWS */}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous project"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-white/25
                    text-xl
                    transition
                    hover:border-[#C6F36B]
                    hover:text-[#C6F36B]
                  "
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-white/25
                    text-xl
                    transition
                    hover:border-[#C6F36B]
                    hover:text-[#C6F36B]
                  "
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT FEATURED PROJECT
          ===================================================== */}

          <article
            key={selected}
            className="portfolio-reveal min-w-0"
          >
            {/* =====================================================
                INTERACTIVE BROWSER PREVIEW
            ===================================================== */}

            <div
              ref={previewRef}
              onPointerMove={movePreview}
              onPointerLeave={resetPreview}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              className="
                portfolio-preview
                overflow-hidden
                rounded-2xl
                border border-white/15
                bg-[#10233A]
                shadow-2xl
                hover:border-[#C6F36B]/40
              "
            >
              {/* BROWSER HEADER */}

              <div
                className="
                  flex items-center gap-2
                  border-b border-white/10
                  bg-[#0C1A2B]
                  px-4 py-3
                "
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF914D]" />

                <span className="h-2.5 w-2.5 rounded-full bg-[#C6F36B]" />

                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />

                <span
                  className="
                    ml-3 truncate
                    text-xs text-white/40
                  "
                >
                  {project.url !== "#"
                    ? project.url.replace(
                        /^https?:\/\//,
                        ""
                      )
                    : "frontend mentorship / training"}
                </span>
              </div>

              {/* =====================================================
                  PROJECT IMAGE
              ===================================================== */}

              <div
                className="
                  group relative
                  aspect-[16/10]
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#183451]
                  to-[#081426]
                "
              >
                {/* INTERACTIVE SPOTLIGHT */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-0 z-10
                    opacity-60
                    mix-blend-screen
                  "
                  style={{
                    background: `radial-gradient(
                      360px circle at ${glow.x}% ${glow.y}%,
                      rgba(198,243,107,.12),
                      transparent 65%
                    )`,
                  }}
                />

                {/* WEBSITE SCREENSHOT */}

                {project.url !== "#" &&
                !imageError ? (
                  <img
                    src={`https://api.microlink.io/?url=${encodeURIComponent(
                      project.url
                    )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900`}
                    alt={`${project.name} website preview`}
                    loading="lazy"
                    onError={() =>
                      setImageError(true)
                    }
                    className="
                      h-full w-full
                      object-cover object-top
                      transition-transform
                      duration-700
                      group-hover:scale-[1.08]
                    "
                  />
                ) : (
                  <div
                    className="
                      flex h-full
                      flex-col
                      items-center justify-center
                      gap-4 px-8
                      text-center
                    "
                  >
                    <span className="text-5xl text-[#C6F36B]">
                      ✳
                    </span>

                    <p
                      className="
                        text-2xl font-black
                        tracking-tight
                        md:text-4xl
                      "
                    >
                      {project.name}
                    </p>

                    <p className="text-sm text-white/60">
                      {project.focus}
                    </p>
                  </div>
                )}

                {/* PROJECT CATEGORY */}

                <span
                  className="
                    pointer-events-none
                    absolute bottom-5 left-5
                    z-20
                    rounded-full
                    border border-white/20
                    bg-[#081426]/85
                    px-4 py-2
                    text-xs font-bold
                    text-[#C6F36B]
                    backdrop-blur-md
                  "
                >
                  {project.focus}
                </span>
              </div>
            </div>

            {/* =====================================================
                PROJECT INFORMATION
            ===================================================== */}

            <div
              className="
                mt-7
                flex flex-wrap
                items-start justify-between
                gap-4
              "
            >
              <div>
                {/* YOUR ROLE */}

                <p
                  className="
                    mb-2
                    text-xs font-bold
                    uppercase
                    tracking-[.2em]
                    text-[#FF914D]
                  "
                >
                  {project.role}
                </p>

                {/* PROJECT NAME */}

                <h3
                  className="
                    text-2xl font-black
                    tracking-tight
                    md:text-3xl
                  "
                >
                  {project.name}
                </h3>
              </div>

              {/* WEBSITE LINK */}

              {project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex min-h-11
                    items-center
                    rounded-full
                    bg-[#C6F36B]
                    px-5 py-2
                    text-sm font-bold
                    text-[#081426]
                    transition
                    hover:bg-white
                  "
                >
                  Visit Website ↗
                </a>
              )}
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5 max-w-2xl
                text-sm leading-7
                text-white/70
                md:text-base
              "
            >
              {project.description}
            </p>

            {/* TECH STACK */}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-white/20
                    px-3 py-1.5
                    text-xs text-white/75
                    transition
                    hover:border-[#C6F36B]
                    hover:text-[#C6F36B]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* =====================================================
                EXPANDABLE PROJECT CONTRIBUTIONS
            ===================================================== */}

            <details
              key={project.name}
              open={detailsOpen}
              onToggle={(event) =>
                setDetailsOpen(
                  event.currentTarget.open
                )
              }
              className="
                mt-7
                border-t border-white/15
                pt-5
              "
            >
              <summary
                className="
                  cursor-pointer
                  font-bold
                  text-[#C6F36B]
                "
              >
                My Contribution & Impact{" "}
                {detailsOpen ? "−" : "+"}
              </summary>

              {/* RESPONSIBILITIES HEADING */}

              <p
                className="
                  mt-5
                  text-xs font-bold
                  uppercase tracking-[.2em]
                  text-[#FF914D]
                "
              >
                What I worked on
              </p>

              {/* RESPONSIBILITIES */}

              <ul
                className="
                  mt-4
                  list-inside list-disc
                  space-y-2
                  text-sm leading-6
                  text-white/70
                "
              >
                {project.responsibilities.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>

              {/* IMPACT */}

              <p
                className="
                  mt-5
                  text-sm leading-6
                  text-white/80
                "
              >
                <strong className="text-[#FF914D]">
                  Impact:
                </strong>{" "}
                {project.impact}
              </p>
            </details>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;