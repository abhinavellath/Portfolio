import React from 'react';

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#011d1f] text-white max-w-2xl p-6 rounded-xl relative">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 font-['PT_Serif']">
          {title}
        </h2>
        <div className="text-gray-200 leading-relaxed mb-6">{content}</div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-500 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
