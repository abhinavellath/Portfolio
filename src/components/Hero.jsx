import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Name from "./Name.jsx";
import photo from "../assets/aneeka.jpg";

const Hero = ({ className }) => {
  const controls = useAnimation();

  // Trigger when 50% of the section is visible
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.8 } },
  };

  const photoVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.8 } },
  };

  // Buttons + socials animation
  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const socials = [
    { label: "GitHub", link: "https://github.com/yourusername" },
    { label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
    { label: "Twitter", link: "https://twitter.com/yourusername" },
  ];

  return (
    <section
      id="hero"
      className={`w-full h-screen flex flex-col justify-center items-center ${className} px-4 sm:px-8 md:px-16 lg:px-24 py-16`}
      ref={ref}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left: Name + Buttons + Socials */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-left p-4 space-y-6"
          variants={textVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
        >
          <Name />

          {/* Buttons + Socials */}
          <motion.div
            className="flex flex-row items-center gap-4 mt-4 flex-wrap"
            variants={buttonsVariants}
          >
            <a
              href="/resume.pdf"
              download
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-4 rounded shadow-md transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-2 px-4 rounded shadow-md transition-colors"
            >
              Contact Me
            </a>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-200 font-semibold py-2 rounded transition-colors"
              >
                {social.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center pt-8 md:pt-0"
          variants={photoVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
        >
          <img
            src={photo}
            alt="Profile"
            className="rounded-xl w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
