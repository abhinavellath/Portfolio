import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    'home', 'about', 'tech stack', 'internships', 'projects', 'accomplishments'
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu on item click
  };

  return (
    <nav className="fixed top-2 left-2 right-2 rounded-2xl z-50 bg-white/10 backdrop-blur-md shadow-md px-4 sm:px-8 md:px-12 py-4">
      <div className="flex justify-between items-center">
        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {/* You can use an SVG for the hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
              onClick={() => handleScroll(item.replace(/\s+/g, '').toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right-aligned Contact Me */}
        <div
          className="hidden md:block hover:text-cyan-400 transition-colors cursor-pointer font-semibold capitalize text-white"
          onClick={() => handleScroll('contactme')}
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
                key={item}
                className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
                onClick={() => handleScroll(item.replace(/\s+/g, '').toLowerCase())}
              >
                {item}
              </li>
            ))}
            <li
              className="hover:text-cyan-400 transition-colors cursor-pointer font-semibold capitalize"
              onClick={() => handleScroll('contactme')}
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