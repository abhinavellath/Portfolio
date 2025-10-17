// src/pages/Experience.jsx
import React from "react";

const experiences = [
  {
    role: "Cloud DevOps Trainee",
    company: "Cloudnets Solutions",
    period: "Jan 2025 – Present",
    description:
      "During my training at Cloudnets Solutions, I explored the full spectrum of cloud and DevOps practices, building hands-on experience with AWS and modern automation tools. My work focused on creating scalable and reliable cloud infrastructure while streamlining deployment workflows.",
    highlights: [
      "Spearheaded cloud automation using AWS services including IAM, S3, VPC, EC2, CloudWatch, SNS, RDS, Lambda, Route 53, and KMS.",
      "Designed, developed, and optimized CI/CD pipelines with Jenkins and Git, significantly improving deployment efficiency.",
      "Implemented containerization using Docker and Kubernetes, enabling scalable and portable application deployments.",
      "Orchestrated infrastructure as code using Terraform, automating cloud provisioning and reducing manual setup time.",
      "Managed Linux-based environments to ensure secure, reliable hosting of cloud infrastructure and applications.",
    ],
  },
  {
    role: "Network Implementation Intern",
    company: "Network Bulls, Delhi",
    period: "Dec 2023",
    description:
      "Gained practical industry experience in network setup and management, strengthening my foundational knowledge of networking and system administration.",
    highlights: [
      "Configured, deployed, and troubleshooted network infrastructure in real-world scenarios.",
      "Gained exposure to network protocols, routing, and deployment best practices.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen bg-[#011d1f] text-white py-16 px-4 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 text-center mb-12 font-['PT_Serif']">
        Experience & Training
      </h2>

      <div className="flex flex-col space-y-12 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-black/40 rounded-2xl p-8 shadow-lg space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-200">
              {exp.role} – {exp.company}
            </h3>
            <span className="text-gray-400 italic">{exp.period}</span>
            <p className="text-gray-200 mt-2">{exp.description}</p>

            {exp.highlights && exp.highlights.length > 0 && (
              <div className="mt-4">
                <h4 className="text-cyan-300 font-semibold mb-2">
                  Key Highlights:
                </h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
