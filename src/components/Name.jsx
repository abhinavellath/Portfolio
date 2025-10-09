import React from 'react';

const Name = ({ name = 'Aneeka' }) => {
  return (
    <div className="text-left space-y-4 h-full flex flex-col justify-center pt-25">
      {/* Small intro */}
      <p className="text-lg md:text-2xl text-white animate-slideInLeft font-['PT_Serif']">
        Hey, I’m<span className="font-semibold text-4xl md:text-4xl pl-4 text-cyan-200">{name}</span>
      </p>

      {/* Role / skills */}
      <p className="text-xl md:text-3xl text-gray-300 animate-slideUp animation-delay-200">
        DevOps | AWS | Azure
      </p>

      {/* Description */}
      <p className="text-2xl md:text-4xl lg:text-5xl text-gray-400 mt-4 max-w-3xl animate-slideUp animation-delay-400 leading-relaxed">
        Turning Cloud Complexity into Seamless, Scalable Solutions with DevOps and AWS expertise.
      </p>
    </div>
  );
};

export default Name;
