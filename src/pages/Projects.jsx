// src/pages/Projects.jsx
import React from "react";
import Button from "../components/Button";

const projects = [
  {
    title: "DevSecOps for a Real-time Chat Application",
    description: `Chatty is a real-time chat application that showcases complete DevOps workflows — from containerization to deployment and monitoring and venturing into DevSecOps using security practices as well for a three-tier application. The focus was on building a reliable, automated pipeline and cloud-native infrastructure, highlighting how DevSecOps practices can bring scalability, security, and efficiency to modern applications.`,
    devops: [
      "Docker – Containerization for consistent environments",
      "Jenkins – Automated CI/CD pipelines",
      "OWASP, Trivy, SonarQube – Security scanning and code quality",
      "AWS EKS – Kubernetes orchestration and scaling",
      "Helm – Simplified deployment and versioning",
      "Prometheus & Grafana – Monitoring and observability",
      "AWS Cloud Infrastructure – Hosting and scalable environments",
      "ArgoCD – GitOps for Kubernetes deployments",
      "SMTP Service – Email alerts",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "#",
  },
  {
    title: "DevSecOps for a MERN-stack Movie Recommendation Application",
    description: `The Movie Recommendation application is a full-stack MERN project designed to provide personalized movie recommendations. Focus is on secure, automated, and observable deployment pipelines covering containerization, CI/CD, security scanning, GitOps deployment, monitoring, and alerting.`,
    devops: [
      "Docker – Containerization for consistent environments",
      "GitHub Actions – Automated CI/CD pipelines",
      "OWASP, Trivy, SonarQube – Security and code quality checks",
      "AWS EKS – Kubernetes orchestration and scaling",
      "Helm – Simplified deployment and versioning",
      "Prometheus & Grafana – Monitoring and observability",
      "AWS Cloud – Hosting and scalable infrastructure",
      "ArgoCD – GitOps for Kubernetes deployments",
      "SMTP Service – Email alerts",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "#",
  },
  {
    title: "DevOps for a Node.js Application using AWS Native DevOps tools",
    description: `This project showcases a Node.js application deployed entirely using AWS native DevOps tools. The application is containerized and orchestrated to ensure scalability, high availability, and reliability.`,
    devops: [
      "AWS ECS / EKS – Container orchestration",
      "AWS CodeBuild – Build automation and testing",
      "AWS CodeDeploy – Deployment automation",
      "AWS CodePipeline – CI/CD workflow orchestration",
      "AWS CloudFormation – Infrastructure as code",
      "AWS CloudFront – Content delivery",
      "AWS IAM – Secure access and role management",
      "AWS S3 – Storage for static assets and deployment artifacts",
      "AWS Lambda – Optional serverless functions",
      "Monitoring & Logging – CloudWatch, Prometheus, Grafana",
    ],
    stack: ["Node.js"],
    github: "#",
  },
  {
    title: "CI/CD Pipelines for a Node App",
    description: `Deployment of a Node.js application entirely on AWS showcasing high-demand practices and scalable infrastructure. Focus on high availability, reliability, efficient performance, automated deployments, and monitoring.`,
    devops: [
      "Automated CI/CD Pipelines – GitHub Actions",
      "Infrastructure as Code – CloudFormation & Terraform",
      "IAM & Security – Managed secure access and roles",
    ],
    stack: ["Node.js"],
    github: "#",
  },
  {
    title: "Wanderlust - Web Application",
    description: `The Wanderlust web application is a travel planning platform deployed using modern DevOps practices and cloud-native tools. Containerization, CI/CD, GitOps, and monitoring make it scalable, secure, and highly available.`,
    devops: [
      "GitHub (Code) – Version control",
      "Docker – Containerization",
      "Jenkins (CI) – Build automation",
      "OWASP Dependency Check – Security scanning",
      "SonarQube – Code quality",
      "Trivy – Filesystem scan",
      "ArgoCD (CD) – GitOps deployment",
      "Redis – Caching",
      "AWS EKS – Kubernetes orchestration",
      "Helm – Deployment & monitoring with Grafana & Prometheus",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-[#011d1f] text-white py-16 px-4 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 text-center mb-12 font-['PT_Serif']">
        Projects
      </h2>

      <div className="flex flex-col space-y-12 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black/40 rounded-2xl p-8 shadow-lg space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-200">
              {project.title}
            </h3>
            <p className="text-gray-200">{project.description}</p>

            <div>
              <h4 className="text-cyan-300 font-semibold mt-4 mb-2">DevOps Practices:</h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {project.devops.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-300 font-semibold mt-4 mb-2">Application Stack:</h4>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {project.stack.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {project.github && (
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Github link
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
