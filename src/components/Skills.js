import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  faReact,
  faNodeJs,
  faLaravel,
  faPhp,
  faWordpress,
  faJs,
  faGit,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faShieldHalved,
  faServer,
  faDatabase,
  faCloudArrowUp,
  faScrewdriverWrench,
  faGaugeHigh,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

/* =====================================================
   COLORS
===================================================== */

const DARK_LIME = "#527B17";
const ORANGE = "#FF914D";

/* =====================================================
   SKILLS DATA
===================================================== */

const groups = [
  {
    title: "Frontend Development",
    label: "01",
    description:
      "Responsive interfaces, modern components, and polished user journeys.",
    skills: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3 },
      { name: "JavaScript", icon: faJs },
      { name: "React.js", icon: faReact },
      { name: "Next.js", icon: faCode },
      { name: "Bootstrap", icon: faBootstrap },
    ],
  },
  {
    title: "Backend Development",
    label: "02",
    description:
      "Supporting dynamic websites with practical backend technologies.",
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Laravel", icon: faLaravel },
      { name: "PHP", icon: faPhp },
    ],
  },
  {
    title: "CMS & Tools",
    label: "03",
    description:
      "Managing content, workflows, and production-ready website updates.",
    skills: [
      { name: "WordPress", icon: faWordpress },
      { name: "Git", icon: faGit },
      { name: "Content Management", icon: faCode },
    ],
  },
  {
    title: "Security & Maintenance",
    label: "04",
    description:
      "Keeping existing websites protected, updated, recoverable, and reliable.",
    skills: [
      {
        name: "Website Security",
        icon: faShieldHalved,
      },
      {
        name: "Access Control",
        icon: faUserLock,
      },
      {
        name: "Backups & Recovery",
        icon: faCloudArrowUp,
      },
      {
        name: "Technical Maintenance",
        icon: faScrewdriverWrench,
      },
      {
        name: "Performance Optimization",
        icon: faGaugeHigh,
      },
    ],
  },
  {
    title: "Hosting & Infrastructure",
    label: "05",
    description:
      "Hands-on administration of hosting environments, servers, and website data.",
    skills: [
      {
        name: "Hosting & cPanel",
        icon: faServer,
      },
      {
        name: "VPS Administration",
        icon: faServer,
      },
      {
        name: "Database Management",
        icon: faDatabase,
      },
      {
        name: "Website Deployment",
        icon: faCloudArrowUp,
      },
    ],
  },
];

/* =====================================================
   STRENGTHS
===================================================== */

const strengths = [
  "Responsive Design",
  "WordPress Development",
  "Website Security",
  "Backup & Recovery",
  "Hosting & VPS Management",
  "Technical Troubleshooting",
  "Performance Optimization",
  "Bilingual Websites",
];

/* =====================================================
   ANIMATION VARIANTS
===================================================== */

const panelVariants = {
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.18,
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* =====================================================
   INTERACTIVE SKILL CARD
===================================================== */

function SkillCard({ skill, reducedMotion }) {
  const cardRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const [pointer, setPointer] = useState({
    x: 50,
    y: 50,
  });

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (event) => {
    if (
      reducedMotion ||
      event.pointerType === "touch" ||
      !cardRef.current
    ) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setPointer({
      x: x * 100,
      y: y * 100,
    });

    setTilt({
      x: (0.5 - y) * 9,
      y: (x - 0.5) * 9,
    });
  };

  const reset = () => {
    setHovered(false);

    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      variants={reducedMotion ? undefined : cardVariants}
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={reset}
      className="
        group relative
        min-h-[128px]
        rounded-2xl
      "
      style={{
        perspective: "900px",
      }}
    >
      <div
        className="
          relative flex h-full
          min-h-[128px]
          flex-col
          items-start
          justify-between
          overflow-hidden
          rounded-2xl
          border border-white/15
          bg-[#081426]/90
          p-5
          transition-[border-color,transform]
          duration-200
          group-hover:border-[#C6F36B]/60
        "
        style={{
          transform: reducedMotion
            ? "none"
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* MOUSE SPOTLIGHT */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            transition-opacity
            duration-300
          "
          style={{
            opacity:
              hovered && !reducedMotion ? 1 : 0,
            background: `radial-gradient(
              180px circle at ${pointer.x}% ${pointer.y}%,
              rgba(198,243,107,0.15),
              transparent 75%
            )`,
          }}
        />

        {/* ICON */}

        <div
          className="
            relative z-10
            flex h-11 w-11
            items-center
            justify-center
            rounded-xl
            border border-[#C6F36B]/20
            bg-[#C6F36B]/10
          "
        >
          <FontAwesomeIcon
            icon={skill.icon}
            className="text-2xl text-[#C6F36B]"
          />
        </div>

        {/* NAME */}

        <span
          className="
            relative z-10
            mt-5
            text-sm font-semibold
            text-white
          "
        >
          {skill.name}
        </span>

        {/* DECORATIVE CORNER */}

        <span
          aria-hidden="true"
          className="
            absolute right-4 top-4
            text-xs text-white/20
            transition-colors
            group-hover:text-[#C6F36B]
          "
        >
          ↗
        </span>
      </div>
    </motion.div>
  );
}

/* =====================================================
   INTERACTIVE STRENGTH CHIP
===================================================== */

function StrengthChip({
  label,
  index,
  reducedMotion,
}) {
  return (
    <motion.span
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 10,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.3,
        delay: reducedMotion
          ? 0
          : index * 0.05,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -3,
              borderColor: DARK_LIME,
              color: DARK_LIME,
            }
      }
      className="
        inline-flex
        cursor-default
        items-center
        rounded-full
        border border-[#081426]/20
        px-4 py-2
        text-sm text-[#081426]/75
        transition-colors
        hover:border-[#527B17]
        hover:text-[#527B17]
      "
    >
      <span
        aria-hidden="true"
        className="mr-2 text-[#FF914D]"
      >
        ✳
      </span>

      {label}
    </motion.span>
  );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function Skills() {
  const [active, setActive] = useState(0);

  const reducedMotion = useReducedMotion();

  const group = groups[active];

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-transparent
        px-6 py-24
        text-[#081426]
        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(8,20,38,0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8,20,38,0.22) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-36
          top-1/4
          h-96 w-96
          rounded-full
          bg-[#FF914D]/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32
          bottom-0
          h-80 w-80
          rounded-full
          bg-[#C6F36B]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            mb-12
            flex flex-wrap
            items-end justify-between
            gap-6
            border-b border-[#081426]/15
            pb-8
          "
        >
          <div>
            <p
              className="
                mb-4
                text-xs font-bold
                uppercase
                tracking-[.28em]
                text-[#527B17]
              "
            >
              03 / WHAT I DO
            </p>

            <h2
              className="
                text-4xl font-black
                uppercase
                tracking-[-.055em]
                md:text-6xl
              "
            >
              CAPABILITIES
              <span style={{ color: ORANGE }}>
                .
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm leading-7
              text-[#081426]/65
            "
          >
            From creative development to secure website
            operations, I build, maintain, and optimize
            digital experiences designed to perform
            reliably.
          </p>
        </div>

        {/* =====================================================
            INTERACTIVE GRID
        ===================================================== */}

        <div
          className="
            grid gap-8
            lg:grid-cols-[.38fr_.62fr]
            lg:gap-14
          "
        >
          {/* =====================================================
              LEFT CATEGORY NAVIGATION
          ===================================================== */}

          <div
            role="group"
            aria-label="Skill categories"
            className="
              border-t border-[#081426]/15
            "
          >
            {groups.map((item, index) => {
              const isActive =
                active === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    setActive(index)
                  }
                  aria-pressed={isActive}
                  className={`
                    group relative
                    flex w-full
                    items-center gap-5
                    overflow-hidden
                    border-b border-[#081426]/15
                    py-6 pl-5 pr-2
                    text-left
                    transition-colors
                    duration-300
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-[-2px]
                    focus-visible:outline-[#527B17]
                    ${
                      isActive
                        ? "text-[#527B17]"
                        : "text-[#081426]/60 hover:text-[#081426]"
                    }
                  `}
                >
                  {/* ANIMATED ACTIVE RAIL */}

                  {isActive && (
                    <motion.span
                      layoutId="skills-active-rail"
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : {
                              type: "spring",
                              stiffness: 350,
                              damping: 32,
                            }
                      }
                      className="
                        absolute bottom-0 left-0 top-0
                        w-[3px]
                        rounded-full
                        bg-[#527B17]
                      "
                      aria-hidden="true"
                    />
                  )}

                  {/* NUMBER */}

                  <span className="text-xs font-bold tabular-nums">
                    {item.label}
                  </span>

                  {/* TITLE */}

                  <span
                    className="
                      flex-1
                      text-lg font-bold
                      md:text-xl
                    "
                  >
                    {item.title}
                  </span>

                  {/* ARROW */}

                  <motion.span
                    aria-hidden="true"
                    animate={{
                      rotate:
                        isActive ? 45 : 0,
                    }}
                    transition={{
                      duration: reducedMotion
                        ? 0
                        : 0.2,
                    }}
                    className="
                      text-xl
                      text-[#FF914D]
                    "
                  >
                    +
                  </motion.span>
                </button>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT SKILLS PANEL
          ===================================================== */}

          <div
            className="
              min-h-[350px]
              rounded-3xl
              border border-[#081426]/15
              bg-white/75
              p-6
              md:p-9
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={active}
                variants={
                  reducedMotion
                    ? undefined
                    : panelVariants
                }
                initial={
                  reducedMotion
                    ? false
                    : "initial"
                }
                animate={
                  reducedMotion
                    ? { opacity: 1 }
                    : "animate"
                }
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : "exit"
                }
                aria-live="polite"
              >
                {/* PANEL EYEBROW */}

                <p
                  className="
                    mb-3
                    text-xs font-bold
                    uppercase
                    tracking-[.2em]
                    text-[#FF914D]
                  "
                >
                  SKILL SET / {group.label}
                </p>

                {/* PANEL TITLE */}

                <h3
                  className="
                    text-2xl font-black
                    md:text-3xl
                  "
                >
                  {group.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3 max-w-xl
                    text-sm leading-7
                    text-[#081426]/65
                  "
                >
                  {group.description}
                </p>

                {/* =====================================================
                    SKILL CARDS
                ===================================================== */}

                <div
                  className="
                    mt-9
                    grid grid-cols-2
                    gap-3
                    sm:grid-cols-3
                  "
                >
                  {group.skills.map(
                    (skill) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        reducedMotion={
                          reducedMotion
                        }
                      />
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =====================================================
            STRENGTHS
        ===================================================== */}

        <div
          className="
            mt-14
            border-t border-[#081426]/15
            pt-8
          "
        >
          <p
            className="
              mb-5
              text-xs font-bold
              uppercase
              tracking-[.2em]
              text-[#FF914D]
            "
          >
            HOW I APPROACH MY WORK
          </p>

          <div className="flex flex-wrap gap-3">
            {strengths.map(
              (item, index) => (
                <StrengthChip
                  key={item}
                  label={item}
                  index={index}
                  reducedMotion={
                    reducedMotion
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}