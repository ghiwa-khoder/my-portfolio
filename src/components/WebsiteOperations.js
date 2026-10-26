import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

/* =====================================================
   WEBSITE OPERATIONS DATA
===================================================== */

const SYSTEMS = [
  {
    id: "hosting",
    number: "01",
    title: "Hosting & Servers",
    short: "cPanel · VPS · Deployment",
    details:
      "Managed client hosting accounts, cPanel and VPS environments, server configuration, deployments, access permissions, and production website availability.",
    tasks: [
      "Hosting account administration",
      "VPS and server configuration",
      "Deployment and troubleshooting",
    ],
  },
  {
    id: "security",
    number: "02",
    title: "Security & Access",
    short: "Protection · Permissions",
    details:
      "Supported website and server security through authentication controls, database protection, server hardening, and responsible management of access credentials.",
    tasks: [
      "Authentication and access controls",
      "Database and server protection",
      "Security updates and checks",
    ],
  },
  {
    id: "data",
    number: "03",
    title: "Databases & Backups",
    short: "Data · Recovery · Integrity",
    details:
      "Managed website databases and data, including backups, restoration, migrations, and maintaining data integrity during ongoing website operations.",
    tasks: [
      "Database administration",
      "Backup and restoration",
      "Migration and data integrity",
    ],
  },
  {
    id: "maintenance",
    number: "04",
    title: "Maintenance & Content",
    short: "WordPress · Updates · Support",
    details:
      "Maintained existing WordPress and React websites, updating themes, plugins, content, and site functionality while diagnosing and resolving technical issues.",
    tasks: [
      "WordPress core, theme and plugin updates",
      "Content and page administration",
      "Ongoing troubleshooting and support",
    ],
  },
  {
    id: "performance",
    number: "05",
    title: "Performance & Reliability",
    short: "Speed · Stability · Optimization",
    details:
      "Improved website and backend performance, optimized database queries, and supported production deployments with minimal service disruption.",
    tasks: [
      "Speed and performance optimization",
      "Database query improvements",
      "Availability and reliability checks",
    ],
  },
];

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function WebsiteOperations() {
  const [active, setActive] = useState(0);

  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  const reducedMotion = useReducedMotion();

  const selected = SYSTEMS[active];

  /* =====================================================
     MOUSE INTERACTION
  ===================================================== */

  function handlePointerMove(event) {
    if (
      reducedMotion ||
      event.pointerType === "touch"
    ) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setPointer({ x, y });
  }

  return (
    <section
      id="website-operations"
      aria-labelledby="operations-title"
      className="
        relative overflow-hidden
        bg-transparent
        px-5 py-24
        text-white
        md:px-8 md:py-32
      "
    >
      {/* BACKGROUND GRID */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              #C6F36B 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              #C6F36B 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mb-12
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
                mb-4
                text-xs font-bold
                uppercase
                tracking-[.28em]
                text-[#C6F36B]
              "
            >
              02 / TECHNICAL OPERATIONS
            </p>

            <h2
              id="operations-title"
              className="
                max-w-4xl
                text-4xl font-black
                uppercase
                leading-[1.05]
                tracking-[-.055em]
                md:text-6xl
              "
            >
              Beyond Development
              <span className="text-[#FF914D]">
                .
              </span>

              <br />

              Built to Last
              <span className="text-[#C6F36B]">
                .
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm leading-7
              text-white/65
            "
          >
            I manage the systems behind the websites:
            infrastructure, security, data, updates,
            and long-term reliability.
          </p>
        </div>

        {/* =====================================================
            INTERACTIVE DASHBOARD
        ===================================================== */}

        <div
          className="
            grid items-stretch
            gap-6
            lg:grid-cols-[1fr_1.15fr]
          "
        >
          {/* =====================================================
              LEFT: INTERACTIVE SYSTEM CORE
          ===================================================== */}

          <div
            className="
              relative flex
              min-h-[440px]
              items-center justify-center
              overflow-hidden
              rounded-[2rem]
              border border-white/15
              bg-[#0D2035]/70
              p-5
              sm:min-h-[520px]
            "
            onPointerMove={handlePointerMove}
            onPointerLeave={() =>
              setPointer({ x: 0, y: 0 })
            }
          >
            {/* BACKGROUND GLOW */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                opacity-50
              "
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(198,243,107,.12), transparent 65%)",
              }}
            />

            {/* ROTATING SYSTEM */}

            <motion.div
              className="
                relative flex
                h-[310px] w-[310px]
                items-center justify-center
                sm:h-[390px] sm:w-[390px]
              "
              animate={
                reducedMotion
                  ? undefined
                  : {
                      rotateX: -pointer.y * 8,
                      rotateY: pointer.x * 8,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 20,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 900,
              }}
            >
              {/* ANIMATED ORBIT RINGS */}

              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute rounded-full
                    border
                  "
                  style={{
                    width: `${96 - ring * 22}%`,
                    height: `${96 - ring * 22}%`,
                    borderColor:
                      ring === active % 3
                        ? "rgba(198,243,107,.65)"
                        : "rgba(255,255,255,.15)",
                    borderStyle:
                      ring === 1
                        ? "dashed"
                        : "solid",
                  }}
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          rotate:
                            ring % 2
                              ? -360
                              : 360,
                        }
                  }
                  transition={{
                    duration: 50 + ring * 15,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* CENTRAL CORE */}

              <div
                className="
                  relative z-10
                  flex h-36 w-36
                  flex-col
                  items-center justify-center
                  rounded-full
                  border border-[#C6F36B]/50
                  bg-[#081426]
                  text-center
                  shadow-[0_0_60px_rgba(198,243,107,.1)]
                  sm:h-44 sm:w-44
                "
              >
                <span
                  className="
                    text-[10px] font-bold
                    uppercase tracking-[.25em]
                    text-[#C6F36B]
                  "
                >
                  Website
                </span>

                <span
                  className="
                    mt-1 text-2xl
                    font-black tracking-tight
                    sm:text-3xl
                  "
                >
                  OPS
                  <span className="text-[#FF914D]">
                    .
                  </span>
                </span>

                <span
                  className="
                    mt-1 text-[10px]
                    text-white/50
                  "
                >
                  END-TO-END
                </span>
              </div>

              {/* INTERACTIVE SYSTEM NODES */}

              {SYSTEMS.map((system, index) => {
                const angle =
                  (index * 2 * Math.PI) /
                    SYSTEMS.length -
                  Math.PI / 2;

                const x =
                  Math.cos(angle) * 43;

                const y =
                  Math.sin(angle) * 43;

                const isActive =
                  active === index;

                return (
                  <button
                    key={system.id}
                    type="button"
                    onClick={() =>
                      setActive(index)
                    }
                    aria-label={`Explore ${system.title}`}
                    aria-pressed={isActive}
                    className={`
                      absolute z-20
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full border
                      text-xs font-bold
                      transition-colors
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#C6F36B]
                      sm:h-12 sm:w-12
                      ${
                        isActive
                          ? "border-[#C6F36B] bg-[#C6F36B] text-[#081426]"
                          : "border-white/30 bg-[#142B42] text-white hover:border-[#C6F36B]"
                      }
                    `}
                    style={{
                      left: `${50 + x}%`,
                      top: `${50 + y}%`,
                      transform:
                        "translate(-50%, -50%)",
                    }}
                  >
                    {system.number}
                  </button>
                );
              })}
            </motion.div>

            {/* INTERACTION HINT */}

            <span
              className="
                absolute bottom-5 left-6
                text-[10px] font-bold
                uppercase tracking-[.2em]
                text-white/45
              "
            >
              Select a node to explore
            </span>
          </div>

          {/* =====================================================
              RIGHT: INFORMATION PANEL
          ===================================================== */}

          <div
            className="
              flex flex-col
              rounded-[2rem]
              border border-white/15
              bg-[#10233A]/80
              p-6
              sm:p-9
            "
          >
            {/* CATEGORY BUTTONS */}

            <div
              role="group"
              aria-label="Website operations systems"
              className="mb-6 flex flex-wrap gap-2"
            >
              {SYSTEMS.map((system, index) => (
                <button
                  key={system.id}
                  type="button"
                  onClick={() =>
                    setActive(index)
                  }
                  aria-pressed={
                    active === index
                  }
                  className={`
                    rounded-full border
                    px-3 py-2
                    text-xs font-semibold
                    transition-colors
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-[#C6F36B]
                    ${
                      active === index
                        ? "border-[#C6F36B] bg-[#C6F36B] text-[#081426]"
                        : "border-white/20 text-white/65 hover:border-white/60 hover:text-white"
                    }
                  `}
                >
                  {system.title}
                </button>
              ))}
            </div>

            {/* ANIMATED DETAILS */}

            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={selected.id}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: -10,
                      }
                }
                transition={{
                  duration: 0.22,
                }}
                className="
                  flex flex-1 flex-col
                "
                aria-live="polite"
              >
                {/* SYSTEM NUMBER */}

                <p
                  className="
                    mb-3
                    text-xs font-bold
                    uppercase tracking-[.2em]
                    text-[#FF914D]
                  "
                >
                  SYSTEM {selected.number} / 05
                </p>

                {/* SYSTEM TITLE */}

                <h3
                  className="
                    text-3xl font-black
                    tracking-[-.04em]
                    sm:text-4xl
                  "
                >
                  {selected.title}
                </h3>

                {/* SYSTEM SUBTITLE */}

                <p
                  className="
                    mt-3
                    text-sm font-semibold
                    text-[#C6F36B]
                  "
                >
                  {selected.short}
                </p>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-6 max-w-xl
                    text-sm leading-8
                    text-white/70
                  "
                >
                  {selected.details}
                </p>

                {/* RESPONSIBILITIES */}

                <div
                  className="
                    mt-8
                    border-t border-white/15
                    pt-6
                  "
                >
                  <p
                    className="
                      mb-4
                      text-xs font-bold
                      uppercase tracking-[.2em]
                      text-white/45
                    "
                  >
                    Core responsibilities
                  </p>

                  <ul className="space-y-4">
                    {selected.tasks.map(
                      (task) => (
                        <li
                          key={task}
                          className="
                            flex items-start
                            gap-3
                            text-sm text-white/85
                          "
                        >
                          <span
                            aria-hidden="true"
                            className="
                              mt-0.5
                              text-[#C6F36B]
                            "
                          >
                            ✳
                          </span>

                          {task}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* FOOTER LABEL */}

                <div
                  className="
                    mt-auto pt-10
                    text-xs font-semibold
                    uppercase tracking-[.16em]
                    text-white/40
                  "
                >
                  Managed systems · Real-world experience
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}