// src/pages/Accomplishments.jsx
import React from "react";

const accomplishmentsList = [
  {
    title: "Freelance Content Writing",
    description: `Worked as a freelance content writer for several years, producing high-quality articles and technical write-ups for various online platforms, including The Unfolder, a recognized web tech media forum. Gained experience in research, communication, and audience engagement across diverse digital domains.`,
  },
  {
    title: "College Technology Events",
    description: `Actively contributed to and organized multiple college technology events, taking part in both technical and management roles. Coordinated with peers, mentors, and industry professionals to conduct hackathons, coding challenges, and seminars that encouraged collaboration, innovation, and practical learning.`,
  },
  {
    title: "Technical Workshops",
    description: `Participated in numerous technical workshops covering topics such as cloud computing, DevOps practices, and emerging technologies. These sessions enhanced understanding of real-world applications, toolchains, and trends in modern software development.`,
  },
];

const Accomplishments = () => {
  return (
    <section className="w-full min-h-screen bg-[#011d1f] text-white py-16 px-4 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 text-center mb-12 font-['PT_Serif']">
        Accomplishments
      </h2>

      <div className="flex flex-col space-y-12 max-w-5xl mx-auto">
        {accomplishmentsList.map((item, idx) => (
          <div
            key={idx}
            className="bg-black/40 rounded-2xl p-8 shadow-lg space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-200">
              {item.title}
            </h3>
            <p className="text-gray-200 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accomplishments;
