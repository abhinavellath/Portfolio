import React from 'react';
import Name from './Name.jsx';

const Hero = ({ className }) => { 
  return (
    <section className={`w-full h-screen flex flex-col relative pt-24 ${className}`}>
      {/* Name section taking half the hero */}
      <div className="flex flex-col justify-center h-1/2 pl-16 md:pl-32">
        <Name />
      </div>

      {/* Optional bottom half can be empty or have other content */}
      <div className="h-1/2"></div>
    </section>
  );
};

export default Hero;
