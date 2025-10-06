import React from 'react';

const Button = ({ text = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-white/10 
        backdrop-blur-md 
        text-white 
        font-semibold 
        px-6 
        py-3 
        rounded-xl 
        shadow-md 
        border 
        border-white/20 
        hover:text-cyan-400 
        hover:bg-white/20 
        hover:shadow-[0_0_15px_#00ffff] 
        transform 
        hover:scale-105 
        transition-all 
        duration-300 
        ease-in-out
      "
    >
      {text}
    </button>
  );
};

export default Button;
