// src/pages/ExperienceHome.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "Cloud DevOps Trainee",
    company: "Cloudnets Solutions",
    period: "Jan 2025 – Present",
    description: "Gained hands-on experience with AWS and DevOps tools, focusing on building scalable cloud infrastructure and CI/CD pipelines.",
  },
  {
    role: "Network Implementation Intern",
    company: "Network Bulls, Delhi",
    period: "Dec 2023",
    description: "Acquired practical industry experience in network setup, configuration, and troubleshooting in real-world scenarios.",
  },
];

const TimelineItem = ({ exp, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        // triggerOnce is removed to allow animation on every scroll
        threshold: 0.5,    // Trigger when 50% of the item is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            // Trigger the "hidden" state (exit animation) when out of view
            controls.start("hidden");
        }
    }, [controls, inView]);

    const isOdd = index % 2 !== 0;

    const cardVariants = {
        hidden: { opacity: 0, x: isOdd ? 100 : -100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        },
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: { 
            scale: 1, 
            transition: { duration: 0.4, ease: "backOut", delay: 0.3 } 
        },
    };

    return (
        <div ref={ref} className={`flex items-center w-full ${isOdd ? 'flex-row-reverse' : ''}`}>
            {/* Card Section */}
            <div className="w-full md:w-1/2 p-4">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={controls}
                    className="bg-black/40 rounded-2xl p-6 shadow-lg space-y-3 hover:border-cyan-400/50 border border-transparent transition-all duration-300"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-cyan-200">
                        {exp.role} – {exp.company}
                    </h3>
                    <span className="text-gray-400 italic text-sm">{exp.period}</span>
                    <p className="text-gray-300 text-sm mt-1">{exp.description}</p>
                </motion.div>
            </div>

            {/* Icon in the middle */}
            <div className="w-0 md:w-1/12 flex justify-center relative">
                 <motion.div 
                    variants={iconVariants}
                    initial="hidden"
                    animate={controls}
                    // Changed background to black to match the page background
                    className="absolute left-1/2 -translate-x-1/2 bg-black w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center"
                 >
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                </motion.div>
            </div>

            {/* Spacer for the other side on desktop */}
            <div className="hidden md:block w-1/2"></div>
        </div>
    );
};


const ExperienceHome = () => {
  return (
    // Removed bg-[#011d1f] from the section
    <section id="experience" className="w-full text-white py-24 px-4 md:px-16 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 text-center mb-20 font-['PT_Serif']">
        Experience & Training
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 h-full w-0.5 bg-cyan-400/30 -translate-x-1/2"></div>
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHome;