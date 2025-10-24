import React from 'react';
import { motion } from 'framer-motion';

const Name = ({ name = 'Aneeka' }) => {
  // Variants for each text element
  const introVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const roleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  return (
    // Adjusted padding: pt-16 base, md:pt-20, lg:pt-24 for better vertical alignment on different screens
    // Removed fixed h-full, added flex-1 to allow natural height adjustment within flex parent
    <div className="text-left space-y-4 flex flex-col justify-center flex-1 pt-16 md:pt-20 lg:pt-24">
      {/* Small intro - Adjusted text sizes */}
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-['PT_Serif']" // Smaller base size
        variants={introVariants}
        initial="hidden"
        animate="visible"
      >
        Hey, I’m
        {/* Adjusted name text size */}
        <span className="font-semibold text-4xl sm:text-5xl md:text-6xl pl-2 sm:pl-3 md:pl-4 text-cyan-200">{name}</span>
      </motion.p>

      {/* Role - Adjusted text sizes */}
      <motion.p
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300" // Smaller base size
        variants={roleVariants}
        initial="hidden"
        animate="visible"
      >
        DevOps | AWS | Azure
      </motion.p>

      {/* Tagline - Adjusted text sizes and max-width */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-400 mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl leading-relaxed sm:leading-loose" // Added responsive max-width and leading
        variants={taglineVariants}
        initial="hidden"
        animate="visible"
      >
        Turning Cloud Complexity into Seamless, Scalable Solutions with DevOps and AWS expertise.
      </motion.p>
    </div>
  );
};

export default Name;
