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
    <div className="text-left space-y-4 h-full flex flex-col justify-center pt-25">
      {/* Small intro */}
      <motion.p
        className="text-lg md:text-3xl text-white font-['PT_Serif']"
        variants={introVariants}
        initial="hidden"
        animate="visible"
      >
        Hey, I’m
        <span className="font-semibold text-5xl md:text-6xl pl-4 text-cyan-200">{name}</span>
      </motion.p>

      <motion.p
        className="text-2xl md:text-4xl text-gray-300"
        variants={roleVariants}
        initial="hidden"
        animate="visible"
      >
        DevOps | AWS | Azure
      </motion.p>

      <motion.p
        className="text-3xl md:text-5xl lg:text-6xl text-gray-400 mt-4 max-w-3xl leading-relaxed"
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
