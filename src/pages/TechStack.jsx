// src/pages/TechStack.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const skillDetails = {
  "AWS Cloud Computing": `
By provisioning EC2 instances, configuring RDS databases, and setting up secure access through IAM roles and policies, I create environments that are both scalable and reliable. I design and manage VPCs to ensure networks are secure, well-structured, and optimized for performance. I can automate workflows with Lambda and manage storage with S3, while leveraging CloudWatch to monitor performance and ensure systems run efficiently. I have worked with AWS databases such as RDS. Working with these services has given me a deep appreciation for designing cloud solutions that are robust, observable, and optimized.
  `,

  "Kubernetes & Docker": `
I specialize in building, containerizing, and orchestrating cloud-native applications using Docker and Kubernetes. With Docker, I design lightweight, reproducible environments through well-structured Dockerfiles and manage multi-service applications with Docker Compose. On Kubernetes, I handle the full orchestration lifecycle — from defining pods, deployments, and services to managing ingress controllers for intelligent traffic routing. I also implement RBAC (Role-Based Access Control) for fine-grained security, configure ConfigMaps and Secrets for environment management, and use Persistent Volumes (PVs) for stable data storage. Beyond deployment, I monitor and optimize workloads with Namespaces, Resource Quotas, and Horizontal Pod Autoscalers (HPA) to ensure performance, scalability, and reliability across clusters.
  `,

  Terraform: `
I leverage Terraform to design and automate cloud infrastructure through Infrastructure as Code (IaC). By creating reusable modules, I have provisioned AWS services like VPCs, EC2 instances, RDS, S3, and IAM; ensuring deployments are consistent and version-controlled. My workflow leverages variables, outputs, and remote state management with S3 and DynamoDB to maintain reliability across multiple environments. I apply workspaces for environment isolation and follow best practices for secure secret management using Terraform variables and AWS KMS. This approach allows me to deliver infrastructure that is scalable, repeatable, and optimized for long-term automation and maintenance.
  `,

  "Jenkins / GitHub Actions": `
I have used Jenkins and GitHub Actions to automate software delivery through CI/CD pipelines. I have built workflows that handle code integration, automated testing, and deployment, ensuring applications move smoothly from development to production. I have configured pipelines to work with Docker containers, cloud environments, and version-controlled repositories, reducing manual effort and deployment errors. I have also implemented automated notifications, conditional steps, and parallel jobs to optimize release cycles and improve overall development efficiency.
  `,

  "AWS Native Services": `
I’m proficient in AWS DevOps tools such as ECS, EKS, CodeBuild, CodeDeploy, CodePipeline, CloudFormation, and CloudFront to design and deploy cloud-native applications. I have containerized and orchestrated applications using ECS and EKS, automated builds and deployments with CodeBuild and CodeDeploy, and managed end-to-end workflows through CodePipeline. I have used CloudFormation for repeatable, version-controlled infrastructure provisioning and configured CloudFront distributions for secure, low-latency content delivery. These tools allow me to streamline software delivery, reduce manual effort, and maintain reliable, production-ready environments.
  `,

  Ansible: `
I have used Ansible to automate server configuration and application deployment across multiple environments. By creating playbooks and roles, I ensure consistency, reduce manual effort, and maintain reliable, scalable, and repeatable systems that integrate seamlessly with CI/CD pipelines and cloud infrastructure.
  `,

  Git: `
I have several years of experience using Git to manage code efficiently and maintain version control across projects. By leveraging branching, merging, and pull requests, I ensure collaborative workflows remain organized, code is reliable and traceable, and integration into CI/CD pipelines is seamless.
  `,

  "Bash Scripting": `
I have several years of experience using Bash scripting to automate complex workflows and manage Linux systems efficiently. I have written scripts for cron jobs, deployments, and system maintenance, consistently reducing manual effort, preventing errors, and improving operational reliability across multiple environments.
  `,

  "Prometheus & Grafana": `
I have extensive experience using Prometheus and Grafana to monitor, analyze, and visualize system and application performance. I have implemented custom metrics, alerts, and dashboards that provide real-time insights, enabling rapid issue detection, performance optimization, and reliable, scalable operations across production environments.
  `,

  Python: `
I have leveraged Python to simplify complex tasks and enhance infrastructure efficiency. From automating cloud workflows to developing backend utilities, I use Python to create reliable, reusable solutions that save time and reduce operational overhead.
  `,

  MySQL: `
I have significant experience working with MySQL to design, manage, and optimize relational databases. I write efficient queries, structure data effectively, and ensure data integrity, enabling applications to run reliably and performantly across different environments.
  `,

  "Frontend Development": `
I enjoy bringing ideas to life through frontend development, turning thoughtful designs into engaging, intuitive user experiences. With Figma, I craft layouts that prioritize clarity and usability, and I bring them to life using HTML and CSS to create interfaces that are not only visually appealing but also fully responsive. Seeing a design transform into a seamless, interactive experience that complements powerful backend and cloud systems is what excites me most about building user interfaces.
  `
};

const TechStack = () => {
  const [modalSkill, setModalSkill] = useState(null);

  const skills = Object.keys(skillDetails);

  return (
    <section
      id="techstack"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-16 relative overflow-hidden bg-[#011d1f]"
    >
      <div className="w-full max-w-7xl text-white space-y-10 p-12 rounded-2xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-200 text-center font-['PT_Serif']">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Button
              key={skill}
              text={skill}
              onClick={() => setModalSkill(skill)}
              className="w-full py-3 text-gray-200 font-medium border font-['PT_Serif'] border-white/20 bg-white/10 backdrop-blur-md hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {modalSkill && (
        <Modal
          title={modalSkill}
          content={skillDetails[modalSkill]}
          onClose={() => setModalSkill(null)}
        />
      )}
    </section>
  );
};

export default TechStack;
