// src/pages/MoreAboutMe.jsx
import React from "react";

const MoreAboutMe = () => {
  return (
    <section id="more-about-me" className="w-full min-h-screen bg-[#011d1f] text-white flex justify-center items-start py-16 px-4 md:px-16">
      <div className="w-full max-w-5xl space-y-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center font-['PT_Serif']">
          More About Me
        </h2>

        {/* Content */}
        <div className="text-gray-200 text-lg md:text-xl space-y-6 leading-relaxed">
          <p>
            I am passionate about building robust, scalable, and efficient cloud and DevOps solutions that bring ideas to life. Working with AWS, I design and manage cloud-native applications using services like EC2, RDS, S3, IAM, Lambda, CloudFormation, CloudFront, ECS, EKS, CodeBuild, CodeDeploy, and CodePipeline. I enjoy orchestrating applications with Docker and Kubernetes, configuring pods, deployments, services, RBAC, ConfigMaps, Secrets, and persistent volumes to ensure environments are reliable, secure, and production-ready.
          </p>

          <p>
            To automate infrastructure, I use Terraform and CloudFormation, turning complex setups into reusable, version-controlled code that is scalable and easy to maintain. I streamline workflows and deployments with Jenkins, GitHub Actions, and Ansible, automating tasks across multiple environments to reduce manual effort and improve efficiency.
          </p>

          <p>
            Automation and scripting are my tools for reliability — I leverage Bash and Python to simplify repetitive tasks, interact with cloud APIs, and build reusable solutions that save time and minimize errors. I monitor and optimize system performance using Prometheus and Grafana, setting up custom dashboards and alerts to ensure applications run smoothly and efficiently. On the data side, I work with MySQL, structuring databases and writing efficient queries to support fast, reliable applications.
          </p>

          <p>
            I also enjoy the creative side of technology through frontend development. Using Figma, I design intuitive layouts and user experiences, and bring them to life with HTML and CSS. Creating interfaces that are visually appealing, responsive, and seamlessly integrated with backend and cloud systems allows me to deliver solutions that are both functional and delightful for users.
          </p>

          <p>
            With several years of hands-on experience across cloud, DevOps, automation, monitoring, databases, and frontend development, I thrive at the intersection of technology and problem-solving. I love taking complex systems and turning them into efficient, scalable, and reliable solutions that have real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
