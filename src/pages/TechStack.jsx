import React from "react";
import Button from "../components/Button";

const TechStack = () => {
  const skills = [
    "AWS Cloud Computing",
    "Kubernetes & Docker",
    "Terraform",
    "Jenkins / GitHub Actions",
    "AWS Native Services",
    "Ansible",
    "Git Version Control",
    "Bash Scripting",
    "Prometheus & Grafana",
    "Python",
    "MySQL",
    "Frontend Development",
  ];

  return (
    <section
      id="techstack"
      className="w-full min-h-screen flex items-center justify-center px-4 md:px-16 py-16 relative overflow-hidden  bg-[#011d1f]"
    >

      {/* Content on top */}
      <div className="w-full max-w-7xl text-white space-y-10 p-12 rounded-2xl relative z-1">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-200 text-center font-['PT_Serif']">
          Tech Stack
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 text-center">
          Key areas of expertise:
        </p>

        {/* Grid of Skills as buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Button
              key={skill}
              text={skill}
              onClick={() => console.log(`${skill} clicked`)}
              className="w-full py-3 text-gray-200 font-medium border font-['PT_Serif'] border-white/20 bg-white/10 backdrop-blur-md hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
            />
          ))}
        </div>

        {/* Main CTA Button */}
        <div className="pt-8 flex justify-center">
          <Button
            text="View My Projects"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
