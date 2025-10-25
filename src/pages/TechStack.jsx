import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../components/Button";
import Modal from "../components/Modal";

const skillDetails = {
  "AWS Cloud Computing": `...`,
  "Kubernetes & Docker": `...`,
  Terraform: `...`,
  "Jenkins / GitHub Actions": `...`,
  "AWS Native Services": `...`,
  Ansible: `...`,
  Git: `...`,
  "Bash Scripting": `...`,
  "Prometheus & Grafana": `...`,
  Python: `...`,
  MySQL: `...`,
  "Frontend Development": `...`,
  ArgoCD: `...`,
  Helm: `...`,
  "AWS EKS, AWS ECS": `...`,
  "OS & System Administration": `...`,
};

// --- FIXED Desktop Layout (Diamond) ---
const diamondLayout = [
  ["AWS Cloud Computing", "AWS Native Services", "AWS EKS, AWS ECS", "Kubernetes & Docker"],
  ["Prometheus & Grafana", "Jenkins / GitHub Actions", "ArgoCD", "Helm", "Ansible"],
  ["Git", "Bash Scripting", "MySQL", "Terraform"],
  ["Frontend Development", "Python"],
  ["OS & System Administration"],
];

// --- Flat Array for Mobile Layout ---
const gridSkills = Object.keys(skillDetails);

const TechStack = () => {
  const [modalSkill, setModalSkill] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03, when: "beforeChildren" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", stiffness: 150, damping: 12 } },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
  };

  const mobileButtonClass = `py-2.5 px-4 text-xs sm:py-3 sm:px-5 sm:text-sm
    text-center text-gray-200 font-medium border border-white/15 bg-white/5 backdrop-blur-md rounded-lg sm:rounded-xl shadow-lg
    hover:text-cyan-300 hover:bg-white/10 hover:border-cyan-400/50 transform hover:-translate-y-1 transition-all duration-300`;

  const desktopButtonClass = `py-2 px-3 text-xs sm:py-2.5 sm:px-4 sm:text-sm md:py-3 md:px-5 md:text-base
    text-gray-200 font-medium border border-white/15 bg-white/5 backdrop-blur-md rounded-lg sm:rounded-xl shadow-lg
    hover:text-cyan-300 hover:bg-white/10 hover:border-cyan-400/50 transform hover:-translate-y-1 transition-all duration-300`;

  return (
    <section
      id="techstack"
      ref={ref}
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-20 sm:py-24 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-5xl text-white space-y-10 md:space-y-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-cyan-200 text-center font-['PT_Serif']"
        >
          Tech Stack
        </motion.h2>

        {/* --- Mobile Flex Wrap Layout --- */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:hidden">
          {gridSkills.map((skill) => (
            <motion.div key={skill + "-mobile"} variants={itemVariants}>
              <Button
                text={skill}
                onClick={() => setModalSkill(skill)}
                className={mobileButtonClass}
              />
            </motion.div>
          ))}
        </div>

        {/* --- Desktop Diamond Layout (optimized with rowVariants) --- */}
        <div className="hidden md:flex flex-col items-center gap-4">
          {diamondLayout.map((row, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              animate={controls}
              className="flex justify-center flex-wrap gap-3"
            >
              {row.map((skill) => (
                <Button
                  key={skill + "-desktop"}
                  text={skill}
                  onClick={() => setModalSkill(skill)}
                  className={desktopButtonClass}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {modalSkill && (
        <Modal
          title={modalSkill}
          content={skillDetails[modalSkill]}
          onClose={() => setModalSkill(null)}
        />
      )}
    </section>
  );
};

export default TechStack;
