import React from 'react';
import Name from './Name.jsx';
import photo from '../assets/profile.jpg';

const Hero = ({ className }) => {
  return (
    <section
  className={`w-full h-screen flex items-center justify-center ${className} px-8 md:px-22`}
>

      {/* Container for side-by-side layout */}
      <div className="flex w-full h-full">
        {/* Left: Name */}
        <div className="w-1/2 flex flex-col justify-center">
          <Name />
        </div>

        {/* Right: Profile Photo */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={photo}
            alt="Profile"
            className="rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
