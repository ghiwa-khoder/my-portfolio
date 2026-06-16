import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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
import { faCode } from "@fortawesome/free-solid-svg-icons";

const skills = {
  "Frontend Development": [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React.js", icon: faReact },
    { name: "Next.js", icon: faCode },
    { name: "Bootstrap", icon: faBootstrap },
  ],
  "Backend Development": [
    { name: "Node.js", icon: faNodeJs },
    { name: "Laravel", icon: faLaravel },
    { name: "PHP", icon: faPhp },
  ],
  "CMS & Tools": [
    { name: "WordPress", icon: faWordpress },
    { name: "Git", icon: faGit },
  ],
};

const strengths = [
  "Responsive Design",
  "WordPress Development",
  "Clear Content Structure",
  "Usability Focus",
  "Intuitive Navigation",
  "Bilingual Websites",
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#172554] to-[#1E3A8A] text-white py-24 px-6"
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold text-[#0EA5E9] bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-4 backdrop-blur-md">
            Capabilities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Core Capabilities
          </h2>

          <p className="text-white/75 max-w-2xl mx-auto leading-7 text-base md:text-lg">
            A combination of technical and practical capabilities I use to
            design, build, and improve websites with a focus on WordPress,
            React, Next.js, responsiveness, content clarity, and user
            experience.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {strengths.map((item) => (
            <span
              key={item}
              className="bg-white/5 backdrop-blur-md border border-white/15 text-white/90 px-4 py-2 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {Object.entries(skills).map(([category, categorySkills], index) => (
          <motion.div
            key={category}
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <h3 className="text-2xl font-semibold text-[#F59E0B] mb-6 border-b border-white/10 pb-3">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md hover:border-[#0EA5E9]/60 hover:shadow-xl transition-all duration-300"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-[#38BDF8] text-3xl"
                  />
                  <h4 className="text-base font-medium text-white/95">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;