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

const skills = {
  "Frontend Development": [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React.js", icon: faReact },
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
  "Clear Content Structure",
  "Usability Focus",
  "Intuitive Navigation",
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-[#F59E0B]"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Core Capabilities
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-10 leading-7"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A combination of technical and practical capabilities I use to design,
          build, and improve websites with a focus on clarity, responsiveness,
          and user experience.
        </motion.p>

        {/* Practical Strengths */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {strengths.map((item) => (
            <span
              key={item}
              className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {Object.entries(skills).map(([category, categorySkills], index) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <h3 className="text-2xl font-semibold text-[#F59E0B] mb-6 border-b border-[#22D3EE]/40 pb-2">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-[#1E293B] border border-white/10 shadow-md hover:border-[#22D3EE] hover:shadow-lg transition-all duration-300"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-[#22D3EE] text-3xl"
                  />
                  <h4 className="text-base font-medium">{skill.name}</h4>
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