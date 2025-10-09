import React from 'react';

const Name = ({ name = 'Aneeka' }) => {
  return (
    <div className="text-left space-y-4 h-full flex flex-col justify-center pt-25">
      {/* Small intro */}
      <p className="text-lg md:text-3xl text-white animate-slideInLeft animation-delay-200 font-['PT_Serif']">
  Hey, I’m
  <span className="font-semibold text-5xl md:text-6xl pl-4 text-cyan-200">{name}</span>
</p>

<p className="text-2xl md:text-4xl text-gray-300 animate-slideUp animation-delay-300">
  DevOps | AWS | Azure
</p>

<p className="text-3xl md:text-5xl lg:text-6xl text-gray-400 mt-4 max-w-3xl animate-slideUp animation-delay-400 leading-relaxed">
  Turning Cloud Complexity into Seamless, Scalable Solutions with DevOps and AWS expertise.
</p>

    </div>
  );
};

export default Name;
