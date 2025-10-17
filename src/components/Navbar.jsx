import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
  { label: "home", id: "hero" },
  { label: "about", id: "about" },
  { label: "tech stack", id: "techstack" },
  { label: "experience", id: "/experience" },
  { label: "projects", id: "/projects" }, // <-- route now handled correctly
  { label: "accomplishments", id: "/accomplishments" }
];


  const handleNavClick = (id) => {
  // If the id starts with "/", treat it as a route
  if (id.startsWith("/")) {
    navigate(id);
  } else {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }
  setIsOpen(false);
};


  return (
    <nav className="fixed top-2 left-2 right-2 rounded-2xl z-50 bg-white/10 backdrop-blur-md shadow-md px-4 sm:px-8 md:px-12 py-4">
      <div className="flex justify-between items-center">
        {/* Hamburger button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </li>
          ))}
          <li
            className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
            onClick={() => navigate("/more-about-me")}
          >
            more about me
          </li>
        </ul>

        {/* Contact Me */}
        <div
          className="hidden md:block hover:text-cyan-400 transition-colors cursor-pointer font-semibold capitalize text-white"
          onClick={() => handleNavClick("contactme")}
        >
          contact me
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-white font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </li>
            ))}
            <li
              className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
              onClick={() => navigate("/more-about-me")}
            >
              more about me
            </li>
            <li
              className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
              onClick={() => handleNavClick("contactme")}
            >
              contact me
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
