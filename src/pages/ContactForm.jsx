import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../components/Button";

const ContactForm = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% is visible
    triggerOnce: false, // Re-animate each time
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.15 } }
  }

  return (
    <motion.section
      id="contactme" // Added ID for navbar scrolling
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="w-full flex flex-col items-center justify-center py-24 px-4 md:px-16"
    >
      <div className="w-full max-w-3xl text-white space-y-8 backdrop-blur-lg bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-xl relative z-10">
        <motion.h2
          variants={formItemVariants} // Animate title
          className="text-3xl md:text-4xl font-bold text-cyan-200 mb-8 text-center font-['PT_Serif']"
        >
          Get In Touch
        </motion.h2>

        {/* Apply staggerChildren to the form */}
        <motion.form
          variants={containerVariants}
          action="https://formspree.io/f/your_form_id" // Replace with your Formspree ID
          method="POST"
          className="space-y-6"
        >
          <motion.div variants={formItemVariants}>
            <label htmlFor="name" className="block text-cyan-100 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
              placeholder="Your Name"
              required
            />
          </motion.div>

          <motion.div variants={formItemVariants}>
            <label htmlFor="email" className="block text-cyan-100 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
              placeholder="Your Email"
              required
            />
          </motion.div>

          <motion.div variants={formItemVariants}>
            <label htmlFor="message" className="block text-cyan-100 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full bg-black/30 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
              placeholder="Your Message"
              required
            ></textarea>
          </motion.div>

          <motion.div variants={formItemVariants} className="flex justify-center">
  <Button
    text="Send Message"
    onClick={() => {}}
    className="w-40 py-3 text-white font-semibold border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-md hover:bg-cyan-400 hover:text-black transition-all duration-300"
  />
</motion.div>

        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
