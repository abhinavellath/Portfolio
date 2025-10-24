import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "home", id: "hero" },
    { label: "about", id: "about" },
    { label: "tech stack", id: "techstack" },
    { label: "projects", id: "projects" }, // Changed to scroll ID as Project.jsx is now part of Home.jsx
    { label: "experience", id: "/experience" }, // Kept as route
    { label: "accomplishments", id: "/accomplishments" } // Kept as route
  ];

  const contactItem = { label: "contact me", id: "contactme" }; // ID for the contact section

  const handleNavClick = (id) => {
    // If the id starts with "/", treat it as a route
    if (id.startsWith("/")) {
      navigate(id);
    } else {
      // If we are not on the home page, navigate home first, then scroll
      if (location.pathname !== "/") {
        navigate("/");
        // Use setTimeout to allow navigation to complete before scrolling
        setTimeout(() => {
          const section = document.getElementById(id);
          section?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150); // Slightly increased delay for stability
      } else {
        // If already on the home page, just scroll
        const section = document.getElementById(id);
        // Use block: 'start' for potentially better alignment on different screen heights
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false); // Close mobile menu on click
  };

  // Variants for mobile menu animation
  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, height: 0 },
    open: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    // Slightly reduced vertical padding for a slimmer look
    <nav className="fixed top-2 left-2 right-2 rounded-2xl z-50 bg-white/10 backdrop-blur-md shadow-lg px-4 sm:px-8 md:px-12 py-2.5">
      <div className="flex justify-between items-center">
        {/* Animated Hamburger button */}
        <div className="md:hidden z-10"> {/* Ensure button is clickable */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated paths */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                variants={{
                  closed: { d: "M4 6h16M4 12h16m-7 6h7" },
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>

        {/* --- Desktop Menu Wrapper (Flex container for left/right alignment) --- */}
        <div className="hidden md:flex flex-grow items-center">
            {/* Left-aligned Menu Items */}
            <ul className="flex space-x-6 text-white font-semibold">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-cyan-400 transition-colors cursor-pointer capitalize text-sm" // Slightly smaller text
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </li>
              ))}
              <li
                className="hover:text-cyan-400 transition-colors cursor-pointer capitalize text-sm" // Slightly smaller text
                onClick={() => navigate("/more-about-me")} // Simple navigation
              >
                more about me
              </li>
            </ul>

            {/* Right-aligned Contact Me Button */}
            <div
              className="ml-auto hover:text-cyan-300 transition-colors cursor-pointer font-semibold capitalize text-white
                         bg-cyan-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-cyan-400/30
                         hover:bg-cyan-500/20 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] text-sm" // Highlight styles
              onClick={() => handleNavClick(contactItem.id)} // Use consistent handler
            >
              {contactItem.label}
            </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu" // Added key for AnimatePresence
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden mt-3 origin-top" // origin-top for animation direction
          >
            {/* Added background and padding */}
            <ul className="flex flex-col space-y-2 text-white font-semibold bg-black/50 backdrop-blur-md rounded-lg p-4 shadow-lg ring-1 ring-white/10">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-cyan-400 transition-colors cursor-pointer capitalize py-2 px-2 rounded hover:bg-white/10"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </li>
              ))}
              <li
                className="hover:text-cyan-400 transition-colors cursor-pointer capitalize py-2 px-2 rounded hover:bg-white/10"
                onClick={() => navigate("/more-about-me")}
              >
                more about me
              </li>
              {/* Contact Me in mobile menu */}
              <li
                className="hover:text-cyan-400 transition-colors cursor-pointer capitalize py-2 px-2 rounded hover:bg-white/10 mt-2 border-t border-white/10 pt-3"
                onClick={() => handleNavClick(contactItem.id)}
              >
                {contactItem.label}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

