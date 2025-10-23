import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cloud Orchestrator",
    description:
      "A platform for automating cloud infrastructure deployment and management using Terraform and Kubernetes.",
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1470&q=80",
    link: "#",
  },
  {
    title: "CI/CD Pipeline Dashboard",
    description:
      "A centralized dashboard to monitor real-time status of Jenkins and GitHub Actions pipelines.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
    link: "#",
  },
  {
    title: "Serverless API Gateway",
    description:
      "Built a highly scalable, serverless API using AWS Lambda, API Gateway, and DynamoDB.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1031&q=80",
    link: "#",
  },
  {
    title: "Monitoring & Alerting System",
    description:
      "An integrated monitoring solution using Prometheus and Grafana for visualizing system metrics.",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1470&q=80",
    link: "#",
  },
  {
    title: "Automated Backup Solution",
    description: "Developed Bash scripts for automated, cron-scheduled backups of MySQL databases to AWS S3.",
    // --- THIS IS THE CORRECTED IMAGE LINK ---
    image: "https://images.unsplash.com/photo-1544890225-2f3faec4446f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const transitionRef = useRef(false);

  const loopedProjects = useMemo(() => {
    return [projects[projects.length - 1], ...projects, projects[0]];
  }, []);

  const scrollToCard = (index, behavior = "smooth") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.children[index];
    if (!card) return;

    const carouselCenter = carousel.offsetWidth / 2;
    const cardCenter =
      card.offsetLeft - carousel.offsetLeft + card.offsetWidth / 2;
    const scrollLeft = cardCenter - carouselCenter;

    carousel.scrollTo({ left: scrollLeft, behavior });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Slow & smooth scroll on wheel
    const onWheel = (e) => {
      e.preventDefault();
      carousel.scrollBy({
        left: e.deltaY * 0.5, // slower speed (was *2)
        behavior: "smooth", // smooth easing
      });
    };

    carousel.addEventListener("wheel", onWheel, { passive: false });
    return () => carousel.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    scrollToCard(1, "auto");
  }, []);

  const handleScroll = () => {
    if (transitionRef.current || !carouselRef.current) return;
    const carousel = carouselRef.current;
    const cards = Array.from(carousel.children);

    let closestCardIndex = 0;
    let minDistance = Infinity;
    const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(carouselCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestCardIndex = i;
      }
    });

    const newIndex = (closestCardIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);

    if (closestCardIndex === 0) {
      transitionRef.current = true;
      setTimeout(() => {
        scrollToCard(projects.length, "auto");
        transitionRef.current = false;
      }, 300);
    } else if (closestCardIndex === loopedProjects.length - 1) {
      transitionRef.current = true;
      setTimeout(() => {
        scrollToCard(1, "auto");
        transitionRef.current = false;
      }, 300);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    scrollToCard(index + 1);
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-200 mb-12 text-center">
        My Projects
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-8 hide-scrollbar"
        >
          {loopedProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              className="flex-shrink-0 w-[70%] sm:w-[55%] md:w-[45%] lg:w-[35%] cursor-pointer snap-center first:ml-[32.5%] last:mr-[32.5%]"
              animate={{
                scale:
                  currentIndex ===
                  (index - 1 + projects.length) % projects.length
                    ? 1.05
                    : 0.9,
                opacity:
                  currentIndex ===
                  (index - 1 + projects.length) % projects.length
                    ? 1
                    : 0.6,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
                <div className="p-6 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-cyan-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="flex space-x-3 mt-6">
        {projects.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-cyan-500 cursor-pointer"
            onClick={() => handleDotClick(index)}
            animate={{
              scale: currentIndex === index ? 1.5 : 1,
              opacity: currentIndex === index ? 1 : 0.5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
