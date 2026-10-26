import React, {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import profileImage from "../assets/profile.jpg";

/* =====================================================
   CONSTANTS
===================================================== */

const WORDS = [
  "EXPERIENCES",
  "INTERACTIONS",
  "CONNECTIONS",
];

const SKILLS = [
  "Web Design",
  "WordPress",
  "React",
  "Responsive UI",
  "Creative Development",
];

const LIME = "#C6F36B";
const ORANGE = "#FF914D";
const NAVY = "#081426";
const OFF_WHITE = "#F8FAF7";


/* =====================================================
   ORBITING RINGS
   WEBGL DECORATIONS ONLY
===================================================== */
function Orbit({
  radius,
  color,
  speed,
  tilt,
  reducedMotion,
  pointerRef,
  hoverRef,
}) {
  const mesh = useRef(null);
  const boost = useRef(1);
  const angle = useRef(0);

  useFrame((_, delta) => {
    if (!mesh.current || reducedMotion) return;

    const pointer = pointerRef.current;

    boost.current = THREE.MathUtils.damp(
      boost.current,
      1 + hoverRef.current * 5,
      3,
      delta
    );

    angle.current += speed * boost.current * delta;

    mesh.current.rotation.z =
      angle.current + pointer.x * 0.3;

    mesh.current.rotation.x = THREE.MathUtils.damp(
      mesh.current.rotation.x,
      tilt + pointer.y * 0.45,
      5,
      delta
    );

    mesh.current.rotation.y = THREE.MathUtils.damp(
      mesh.current.rotation.y,
      pointer.x * 0.55,
      5,
      delta
    );
  });

  return (
    <mesh
      ref={mesh}
      rotation={[tilt, 0, 0]}
      position={[0, 0, -0.05]}
    >
      <torusGeometry args={[radius, 0.016, 12, 180]} />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.9}
        toneMapped={false}
      />
    </mesh>
  );
}
/* =====================================================
   PARTICLES
===================================================== */

function Particles({
  reducedMotion,
  pointerRef,
  hoverRef,
}) {
  const points = useRef(null);

  const positions = useMemo(() => {
    const data = new Float32Array(150 * 3);

    for (let i = 0; i < 150; i++) {
      const angle = i * 2.399963229728653;
      const radius = 1.95 + (i % 13) * 0.12;

      data[i * 3] = Math.cos(angle) * radius;
      data[i * 3 + 1] = Math.sin(angle) * radius;
      data[i * 3 + 2] = -0.45 + (i % 7) * 0.05;
    }

    return data;
  }, []);

  useFrame((_, delta) => {
    if (!points.current || reducedMotion) return;

    const pointer = pointerRef.current;

    points.current.rotation.z +=
      delta * (0.014 + hoverRef.current * 0.1);

    points.current.rotation.x = THREE.MathUtils.damp(
      points.current.rotation.x,
      pointer.y * -0.35,
      2.5,
      delta
    );

    points.current.rotation.y = THREE.MathUtils.damp(
      points.current.rotation.y,
      pointer.x * 0.45,
      2.5,
      delta
    );
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color={NAVY}
        transparent
        opacity={0.42}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* =====================================================
   WEBGL CANVAS
   PHOTO IS OUTSIDE CANVAS
===================================================== */

function PortraitCanvas(props) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6.9],
        fov: 42,
      }}
      dpr={[1, 1.7]}
      gl={{
        alpha: true,
        antialias: true,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        <Particles {...props} />

        <Orbit
          radius={1.98}
          color={NAVY}
          speed={0.18}
          tilt={0.12}
          {...props}
        />

        <Orbit
          radius={1.78}
          color={ORANGE}
          speed={-0.13}
          tilt={-0.25}
          {...props}
        />
      </Suspense>
    </Canvas>
  );
}

/* =====================================================
   SCRAMBLE TEXT
===================================================== */

function useScramble(text, enabled) {
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (!enabled) {
      setOutput(text);
      return undefined;
    }

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ#/<>+*";

    const total = 20;

    let frame = 0;
    let animationFrame;

    const tick = () => {
      frame += 1;

      const reveal = Math.floor(
        (frame / total) * text.length
      );

      setOutput(
        text
          .split("")
          .map((character, index) => {
            if (index < reveal) return character;

            return characters[
              Math.floor(
                Math.random() * characters.length
              )
            ];
          })
          .join("")
      );

      if (frame < total) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setOutput(text);
      }
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [text, enabled]);

  return output;
}

/* =====================================================
   MAGNETIC BUTTON
===================================================== */

function Magnetic({
  children,
  reducedMotion,
  className,
  style,
  ...rest
}) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (
      reducedMotion ||
      event.pointerType === "touch" ||
      !ref.current
    ) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();

    const x =
      event.clientX - (rect.left + rect.width / 2);

    const y =
      event.clientY - (rect.top + rect.height / 2);

    ref.current.style.transform = `translate(${
      x * 0.3
    }px, ${y * 0.3}px)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0,0)";
    }
  };

  return (
    <a
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={className}
      style={{
        transition:
          "transform .25s ease-out, background .3s, color .3s, border-color .3s",
        ...style,
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/* =====================================================
   MAIN HERO — OFF-WHITE THEME
===================================================== */

export default function CombinedSection() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeWord, setActiveWord] = useState(0);

  const sectionRef = useRef(null);
  const portraitRef = useRef(null);

  const pointerRef = useRef({
    x: 0,
    y: 0,
  });

  const hoverRef = useRef(0);

  const word = useScramble(
    WORDS[activeWord],
    !reducedMotion
  );

  /* =====================================================
     REDUCED MOTION
  ===================================================== */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReducedMotion(media.matches);
    };

    update();

    media.addEventListener?.("change", update);

    return () => {
      media.removeEventListener?.("change", update);
    };
  }, []);

  /* =====================================================
     ROTATING WORDS
  ===================================================== */

  useEffect(() => {
    if (reducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveWord(
        (current) => (current + 1) % WORDS.length
      );
    }, 3800);

    return () => {
      window.clearInterval(interval);
    };
  }, [reducedMotion]);

  /* =====================================================
     POINTER TRACKING
  ===================================================== */

  useEffect(() => {
    const handleMove = (event) => {
      if (portraitRef.current) {
        const rect =
          portraitRef.current.getBoundingClientRect();

        pointerRef.current = {
          x: THREE.MathUtils.clamp(
            ((event.clientX - rect.left) /
              rect.width) *
              2 -
              1,
            -1,
            1
          ),

          y: THREE.MathUtils.clamp(
            -(
              ((event.clientY - rect.top) /
                rect.height) *
                2 -
              1
            ),
            -1,
            1
          ),
        };
      }

      if (sectionRef.current) {
        const rect =
          sectionRef.current.getBoundingClientRect();

        sectionRef.current.style.setProperty(
          "--mx",
          `${event.clientX - rect.left}px`
        );

        sectionRef.current.style.setProperty(
          "--my",
          `${event.clientY - rect.top}px`
        );
      }
    };

    window.addEventListener("pointermove", handleMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "pointermove",
        handleMove
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="combinedSection"
      className="
        relative isolate flex
        min-h-screen flex-col
        overflow-hidden
        px-6 pb-10 pt-32
        text-[#081426]
        md:pt-36
      "
      style={{
        background: OFF_WHITE,
        "--mx": "70%",
        "--my": "35%",
      }}
    >
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroPulse {
          0%, 100% {
            opacity: .4;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .h-enter {
          animation: heroEnter .8s both;
        }

        .d1 {
          animation-delay: .1s;
        }

        .d2 {
          animation-delay: .22s;
        }

        .d3 {
          animation-delay: .34s;
        }

        .d4 {
          animation-delay: .46s;
        }

        .h-pulse {
          animation: heroPulse 2.4s ease-in-out infinite;
        }

        .marquee-track {
          animation: marquee 30s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        .outline-text {
          -webkit-text-stroke: 2px ${NAVY};
          color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .h-enter,
          .h-pulse,
          .marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND GRID */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-40
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,20,38,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(8,20,38,.045) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom,black 30%,transparent)",
        }}
      />

      {/* CURSOR SPOTLIGHT — BACKGROUND ONLY */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
        style={{
          background:
            "radial-gradient(520px circle at var(--mx) var(--my), rgba(198,243,107,.13), transparent 65%)",
        }}
      />

      {/* BACKGROUND GLOWS */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 top-10
          h-[520px] w-[520px]
          rounded-full
          bg-[#C6F36B]/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-40 bottom-10
          h-[380px] w-[380px]
          rounded-full
          bg-[#FF914D]/10
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div
        className="
          relative mx-auto grid
          w-full max-w-7xl
          flex-1 items-center
          gap-12
          lg:grid-cols-[1.1fr_.9fr]
        "
      >
        {/* LEFT CONTENT */}

        <div className="relative z-10">
          {/* BADGE */}

          <div className="h-enter flex flex-wrap items-center gap-4">
            <span
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-[#081426]/15
                bg-[#C6F36B]/20
                px-4 py-2
                text-[11px] font-bold
                uppercase tracking-[.18em]
                text-[#527B17]
              "
            >
              <span
                className="
                  h-pulse
                  h-2 w-2
                  rounded-full
                  bg-[#C6F36B]
                "
              />

              Creative Developer / Founder
            </span>

            <span className="text-sm text-[#536174]">
              Hi, I'm Ghiwa Khoder
            </span>
          </div>

          {/* HEADING */}

          <h1
            className="
              h-enter d1 mt-8
              text-[clamp(2.4rem,5.6vw,5.4rem)]
              font-black
              leading-[.98]
              tracking-[-.045em]
            "
          >
            <span className="block">I BUILD</span>

            <span className="outline-text block">
              DIGITAL
            </span>

            <span className="block min-h-[1em] whitespace-nowrap">
              <span aria-label={WORDS[activeWord]}>
                {word}
              </span>

              <span style={{ color: ORANGE }}>.</span>
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              h-enter d2 mt-8
              max-w-lg
              text-base leading-8
              text-[#536174]
              md:text-lg
            "
          >
            I'm a creative web developer and designer
            building responsive, user-focused digital
            experiences. I founded{" "}
            <span className="font-semibold text-[#527B17]">
              MASAR Interactive
            </span>
            , an emerging independent creative web studio
            focused on interactive websites and distinctive
            digital experiences.
          </p>

          {/* BUTTONS */}

          <div className="h-enter d3 mt-9 flex flex-wrap items-center gap-4">
            <Magnetic
              href="#portfolio"
              reducedMotion={reducedMotion}
              className="
                inline-flex min-h-12
                items-center gap-3
                rounded-full
                px-7 py-3
                font-bold
                hover:bg-[#E8F5CC]
              "
              style={{
                background: LIME,
                color: NAVY,
              }}
            >
              Explore My Work ↗
            </Magnetic>

            <Magnetic
              href="#contact"
              reducedMotion={reducedMotion}
              className="
                inline-flex min-h-12
                items-center
                rounded-full
                border border-[#081426]/25
                px-7 py-3
                font-semibold
                text-[#081426]
                hover:border-[#FF914D]
                hover:text-[#FF914D]
              "
            >
              Let's Connect
            </Magnetic>
          </div>
        </div>

        {/* =====================================================
            RIGHT: ORIGINAL PROFILE PHOTO
        ===================================================== */}

        <div
          className="
            h-enter d2
            relative mx-auto
            w-full max-w-[520px]
          "
        >
         <div
  ref={portraitRef}
  className="relative aspect-square w-full"
  onPointerEnter={() => {
    hoverRef.current = 1;
  }}
  onPointerMove={(event) => {
    if (reducedMotion) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 2 - 1;

    const y =
      -(((event.clientY - rect.top) / rect.height) * 2 - 1);

    pointerRef.current = {
      x: THREE.MathUtils.clamp(x, -1, 1),
      y: THREE.MathUtils.clamp(y, -1, 1),
    };

    hoverRef.current = 1;
  }}
  onPointerLeave={() => {
    hoverRef.current = 0;

    pointerRef.current = {
      x: 0,
      y: 0,
    };
  }}
>
            {/* WEBGL DECORATIONS — BEHIND PHOTO */}

            <div
              className="
                pointer-events-none
                absolute inset-0 z-0
              "
            >
              <PortraitCanvas
                reducedMotion={reducedMotion}
                pointerRef={pointerRef}
                hoverRef={hoverRef}
              />
            </div>

            {/* ORIGINAL PHOTO — COMPLETELY UNEDITED */}

            <img
              src={profileImage}
              alt="Ghiwa Khoder"
              className="
                pointer-events-none
                absolute left-1/2 top-1/2 z-10
                block h-[58%] w-[58%]
                -translate-x-1/2 -translate-y-1/2
                rounded-full object-cover
              "
              style={{
                filter: "none",
                boxShadow: "none",
                opacity: 1,
                mixBlendMode: "normal",
              }}
            />

            {/* FLOATING LABELS */}

            <div
              className="
                pointer-events-none
                absolute left-0 top-[16%]
                rounded-xl
                border border-[#C6F36B]/40
                bg-[#0E2038]/95
                px-4 py-3
                text-xs font-semibold
                tracking-wider
                text-[#C6F36B]
                shadow-xl
              "
            >
              DESIGN ✳
            </div>

            <div
              className="
                pointer-events-none
                absolute bottom-[20%] right-0
                rounded-xl
                border border-[#FF914D]/40
                bg-[#0E2038]/95
                px-4 py-3
                text-xs font-semibold
                tracking-wider
                text-[#FF914D]
                shadow-xl
              "
            >
              DEVELOP ↗
            </div>

            {/* SOCIAL LINKS */}

            <div
              className="
                absolute -bottom-3 left-1/2
                flex -translate-x-1/2
                items-center gap-6
                rounded-full
                border border-white/15
                bg-[#081426]/85
                px-6 py-3
                backdrop-blur-md
              "
            >
              <a
                href="https://github.com/ghiwa-khoder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ghiwa Khoder on GitHub"
                className="
                  text-white/70
                  transition
                  hover:scale-125
                  hover:text-[#C6F36B]
                "
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                />
              </a>

              <span className="h-4 w-px bg-white/20" />

              <a
                href="https://www.linkedin.com/in/ghiwa-khoder-b6b84619b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ghiwa Khoder on LinkedIn"
                className="
                  text-white/70
                  transition
                  hover:scale-125
                  hover:text-[#C6F36B]
                "
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                />
              </a>
            </div>
          </div>

          <p
            className="
              mt-8 text-center
              text-[11px] uppercase
              tracking-[.24em]
              text-[#536174]
            "
          >
            Move your cursor · Explore the orbit
          </p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM STRIP
      ===================================================== */}

      <div
        className="
          h-enter d4
          relative mx-auto
          mt-14 w-full
          max-w-7xl
        "
      >
        <div
          className="
            grid items-center gap-6
            border-y border-[#081426]/10
            py-5
            md:grid-cols-[auto_1fr_auto]
          "
        >
          {/* MASAR CARD */}

          <a
            href="https://masar-interactive.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-4
              rounded-2xl
              border border-[#081426]/10
              bg-white/75
              px-5 py-3
              backdrop-blur-md
              transition duration-300
              hover:-translate-y-1
              hover:border-[#527B17]/40
              hover:bg-white
            "
          >
            <span
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl
                bg-[#C6F36B]
                font-black
                text-[#081426]
              "
            >
              M.
            </span>

            <span>
              <span
                className="
                  block text-[10px]
                  font-bold uppercase
                  tracking-[.2em]
                  text-[#536174]
                "
              >
                Founder & Creative Developer
              </span>

              <span className="block text-base font-bold">
                MASAR{" "}
                <span className="text-[#527B17]">
                  Interactive
                </span>{" "}
                <span
                  className="
                    inline-block
                    text-[#FF914D]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </span>

              <span className="block text-xs text-[#536174]">
                Independent creative studio · In development
              </span>
            </span>
          </a>

          {/* SKILLS MARQUEE */}

          <div
            className="marquee overflow-hidden"
            aria-label={`Skills: ${SKILLS.join(", ")}`}
          >
            <div
              className="
                marquee-track
                flex w-max items-center
                gap-8 whitespace-nowrap
                text-sm font-bold
                uppercase tracking-[.25em]
                text-[#536174]
              "
              aria-hidden="true"
            >
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex items-center gap-8"
                >
                  {SKILLS.map((skill) => (
                    <span
                      key={`${copy}-${skill}`}
                      className="
                        flex items-center gap-8
                        transition
                        hover:text-[#527B17]
                      "
                    >
                      {skill}

                      <span className="text-[#FF914D]">
                        ✳
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* SCROLL */}

          <a
            href="#portfolio"
            className="
              inline-flex items-center gap-4
              text-sm tracking-widest
              text-[#536174]
              transition
              hover:text-[#527B17]
            "
          >
            <span className="h-px w-10 bg-[#C6F36B]" />

            SCROLL ↓
          </a>
        </div>
      </div>
    </section>
  );
}