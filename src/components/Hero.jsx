import React from 'react';
import Name from './Name.jsx';
import photo from '../assets/aneeka.jpg';

const Hero = ({ className }) => {
  return (
    <section
    id="hero"
  className={`w-full h-screen flex items-center justify-center ${className} px-8 md:px-22`}
>

      {/* Container for side-by-side layout */}
      <div className="flex flex-col md:flex-row w-full h-full">
  {/* Left: Name */}
  <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-4">
    <Name />
  </div>

  {/* Right: Profile Photo */}
  <div className="w-full md:w-1/2 flex justify-center items-center pt-25">
    <img
  src={photo}
  alt="Profile"
  className="rounded-xl w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] 
             object-cover shadow-2xl animate-fadeInRight animation-delay-200"
/>



  </div>
</div>
    </section>
  );
};

export default Hero;
