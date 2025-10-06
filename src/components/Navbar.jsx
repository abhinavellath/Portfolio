import React from 'react';

const Navbar = () => {
  const navItems = [
    'home',
    'about',
    'tech stack',
    'internships',
    'projects',
    'accomplishments'
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <nav className="fixed top-2 left-2 right-2 rounded-2xl z-50 bg-white/10 backdrop-blur-md shadow-md pl-12 pr-12 py-4">
  <div className="flex justify-between items-center">
    {/* Left-aligned items */}
    <ul className="flex space-x-6 text-white font-semibold">
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
      className="hover:text-cyan-400 transition-colors cursor-pointer font-semibold capitalize text-white"
      onClick={() => handleScroll('contactme')}
    >
      contact me
    </div>
  </div>
</nav>


  );
};

export default Navbar;
