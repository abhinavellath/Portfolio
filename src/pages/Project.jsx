import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
    {
        title: "MERN Stack Movie App",
        description:
            "A full-stack MERN application for personalized movie recommendations, featuring a complete DevSecOps workflow for secure, automated, and observable deployment on AWS EKS.",
        techStack: [
            "AWS EKS", "Kubernetes", "Docker", "GitHub Actions", "ArgoCD", "Helm", "Prometheus", "Grafana", "SonarQube", "Trivy",
        ],
        image:
            "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=1470&q=80",
        link: "https://github.com/AneekaSA/MERN-MovieApp-3-Tier.git",
    },
    {
        title: "DevSecOps Chat App",
        description:
            "A real-time chat application showcasing a complete DevSecOps workflow, from containerization to deployment, security scanning, and monitoring on AWS EKS.",
        techStack: [
            "AWS EKS", "Kubernetes", "Jenkins", "Docker", "ArgoCD", "Helm", "Prometheus", "Grafana", "SonarQube", "Trivy", "OWASP",
        ],
        image:
            "https://images.unsplash.com/photo-1534794048419-48e110dca88e?auto=format&fit=crop&w=1470&q=80",
        link: "https://github.com/AneekaSA/DevSecOps-chat-app.git",
    },
    {
        title: "AWS Cloud Native DevOps",
        description:
            "A Node.js project showcasing AWS-native DevOps, focusing on automated CI/CD with CodePipeline, IaC with Terraform, and scalable EKS deployments.",
        techStack: [
            "AWS EKS", "CodePipeline", "CodeBuild", "Terraform", "Ansible", "Docker", "Kubernetes", "CloudWatch",
        ],
        image:
            "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1470&q=80",
        link: "https://github.com/AneekaSA/NodeOps.git",
    },
    {
        title: "Wanderlust Travel Application",
        description:
            "A MERN travel blog website demonstrating a full DevSecOps workflow, including CI/CD with Jenkins, security scanning, and Kubernetes deployment with Helm and ArgoCD.",
        techStack: [
            "AWS EKS", "MERN", "Docker", "Jenkins", "ArgoCD", "Redis", "Helm", "Prometheus", "Grafana", "SonarQube",
        ],
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1470&q=80",
        link: "https://github.com/AneekaSA/Wanderlust-Mega-Project.git",
    },
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const transitionRef = useRef(false);

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);


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

        const onWheel = (e) => {
            e.preventDefault();
            carousel.scrollBy({
                left: e.deltaY * 0.5,
                behavior: "smooth",
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

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            id="projects"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
            className="w-full min-h-screen flex flex-col items-center justify-center py-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-12 text-center font-['PT_Serif']">
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
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[35%] cursor-pointer snap-center first:ml-[calc(50%-40%)] sm:first:ml-[calc(50%-30%)] md:first:ml-[calc(50%-22.5%)] lg:first:ml-[calc(50%-17.5%)] last:mr-[calc(50%-40%)] sm:last:mr-[calc(50%-30%)] md:last:mr-[calc(50%-22.5%)] lg:last:mr-[calc(50%-17.5%)]"
                            animate={{
                                scale:
                                    currentIndex ===
                                        (index - 1 + projects.length) % projects.length
                                        ? 1
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
                                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                                />
                                <div className="p-6 relative z-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-cyan-200 mb-2 ">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base mb-4">
                                        {project.description}
                                    </p>
                                    
                                    {project.techStack && (
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span 
                                                    key={tech}
                                                    className="bg-cyan-900/50 text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
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
        </motion.section>
    );
};

export default Projects;