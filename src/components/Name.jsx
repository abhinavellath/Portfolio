import React from 'react';

const Name = ({ firstName = 'Aneeka', lastName = 'S A' }) => {
  return (
    <div className="text-left">
      <h1 className="text-6xl md:text-8xl font-bold text-white animate-slideUp">
        {firstName} <span className="text-cyan-400">{lastName}</span>
      </h1>
      <p className="text-2xl md:text-3xl text-gray-300 mt-4 animate-slideUp animation-delay-200">
        AWS DevOps Engineer
      </p>
    </div>
  );
};

export default Name;