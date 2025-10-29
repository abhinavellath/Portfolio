import React from 'react';

const Button = ({ text = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative 
        overflow-hidden 
        group
        px-7 
        py-3 
        rounded-xl 
        font-semibold 
        text-white 
        tracking-wide 
        transition-all 
        duration-300 
        ease-out 
        border 
        border-[#FF4800]/40 
        shadow-[0_0_10px_rgba(255,72,0,0.2)]
        hover:shadow-[0_0_25px_rgba(255,72,0,0.6)]
        hover:border-[#FF4800]
        hover:text-[#FF4800]
        bg-gradient-to-r from-[#FF4800]/10 via-transparent to-[#FF4800]/10
        backdrop-blur-sm
        hover:scale-105
      "
    >
      {/* Shiny gradient overlay effect */}
      <span
        className="
          absolute 
          inset-0 
          w-full 
          h-full 
          bg-gradient-to-r 
          from-transparent 
          via-[#FF4800]/30 
          to-transparent 
          translate-x-[-100%] 
          group-hover:translate-x-[100%] 
          transition-transform 
          duration-700 
          ease-in-out
        "
      ></span>

      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
