import React, { useState } from "react";
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
  faPython,
  faGit,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const skills = {
  Frontend: [
    { name: "React.js", icon: faReact },
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "Bootstrap", icon: faBootstrap },
  ],
  Backend: [
    { name: "Node.js", icon: faNodeJs },
    { name: "Laravel", icon: faLaravel },
    { name: "Python", icon: faPython },
    { name: "PHP", icon: faPhp },
  ],
  Tools: [
    { name: "Git", icon: faGit },
    { name: "WordPress", icon: faWordpress },
  ],
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 3D Flip & Tilt Animation
  const flipVariants = {
    initial: { rotateY: 0, rotateX: 0, scale: 1 },
    hover: { 
      rotateY: -10, 
      rotateX: 10, 
      scale: 1.12, 
 transition: { duration: 0.4, ease: "easeInOut" } 
    },
    tap: { scale: 0.95 },
  };

  // Floating Icon Animation
  const floatingIconVariants = {
    animate: {
      y: [0, -4, 0], 
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] text-white py-20 px-8"
    >
      <motion.h2
        className="text-5xl font-bold text-center mb-16 text-[#F59E0B]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {Object.entries(skills).map(([category, skills], index) => (
          <motion.div
            key={index}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-[#F59E0B] mb-6 border-b-2 border-[#22D3EE] pb-2">
              {category}
            </h3>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="relative p-6 rounded-lg shadow-lg cursor-pointer bg-[#1E293B] overflow-hidden transition-all duration-500"
                  variants={flipVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Modern Glow Effect */}
                  {hoveredIndex === idx && (
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.7, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{
                        background: "radial-gradient(circle, rgba(34,211,238,0.5) 10%, rgba(34,211,238,0) 80%)",
                        filter: "blur(12px)",
                      }}
                    ></motion.div>
                  )}

                  {/* Card Content */}
                  <motion.div
                    className="flex items-center space-x-4"
                    variants={floatingIconVariants}
                    animate="animate"
                  >
                    <FontAwesomeIcon icon={skill.icon} className="text-[#22D3EE] text-4xl" />
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;