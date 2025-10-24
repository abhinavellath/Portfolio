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
    triggerOnce: false, // Re-trigger animation when scrolling up/down
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      // Use "hidden" instead of "exit" for re-triggering
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Combined text + buttons/socials container variant
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2 // Stagger Name parts and buttons/socials
        }
    },
  };

  // Individual item variant for staggering
  const itemVariant = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
  }


  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 }, // Added scale and adjusted y
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  const socials = [
    { label: "GitHub", link: "https://github.com/yourusername" },
    { label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
    { label: "Twitter", link: "https://twitter.com/yourusername" },
  ];

  return (
    <section
      id="hero"
       // Adjusted min-h-screen for flexibility, increased py
      className={`w-full min-h-screen flex flex-col justify-center items-center ${className} px-4 sm:px-8 md:px-16 lg:px-24 py-20 md:py-16`}
      ref={ref}
    >
      {/* Main flex container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center flex-grow"> {/* Added max-w-7xl, items-center, flex-grow */}

        {/* Left: Name + Buttons + Socials */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center text-left p-4 space-y-6 md:space-y-8 mb-12 md:mb-0" // Added bottom margin for mobile
          variants={leftColumnVariants}
          initial="hidden"
          animate={controls}
          // Removed exit prop
        >
          {/* Name component itself doesn't need motion wrapper if children are animated */}
          <Name />

          {/* Buttons + Socials - using itemVariant for staggering */}
          <motion.div
            className="flex flex-row items-center gap-3 sm:gap-4 mt-4 flex-wrap" // Slightly smaller gap on smallest screens
            variants={itemVariant} // Stagger this block
          >
            <a
              href="/resume.pdf" // Ensure resume.pdf is in the public folder
              download
              // Adjusted button styles for responsiveness
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-3 sm:px-4 text-sm sm:text-base rounded-lg shadow-md transition-colors"
            >
              Download Resume
            </a>
            {/* Contact Me Button */}
            <motion.a
                href="#contactme" // Link to the contact section ID
                // Adjusted button styles for responsiveness
                className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-2 px-3 sm:px-4 text-sm sm:text-base rounded-lg shadow-md transition-colors"
                // Scroll to section - smooth behavior
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contactme')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
            >
                Contact Me
            </motion.a>


            {/* Social Links - using itemVariant */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap"> {/* Wrap socials for better spacing */}
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                   // Adjusted styles for responsiveness
                  className="text-cyan-400 hover:text-cyan-200 font-semibold py-2 text-sm sm:text-base rounded transition-colors"
                  // whileHover={{ scale: 1.1 }} // Optional: add hover effect
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center" // Removed pt-8 md:pt-0, relying on parent centering
          variants={photoVariants}
          initial="hidden"
          animate={controls}
          // Removed exit prop
        >
          <img
            src={photo}
            alt="Profile"
             // Adjusted image sizes for mobile first
            className="rounded-xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
