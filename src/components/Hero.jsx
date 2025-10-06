import React from 'react';
import Name from './Name.jsx';

const Hero = ({ className }) => { // Pass className as a prop
  return (
    // Remove bg-gray-900, make background transparent
    // Add the passed className for positioning
    <section className={`w-full h-screen flex items-center relative ${className}`}>
      {/* Container for left-aligned content with padding */}
      <div className="flex flex-col justify-center h-full pl-16 md:pl-32">
        <Name />
      </div>
    </section>
  );
};

export default Hero;