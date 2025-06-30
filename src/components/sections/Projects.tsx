"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Unsigned Software",
    description:
      "A custom clothing platform where users can personalize garments, select fabrics, and configure design options with ease.",
    image: "/images/projects/unsign.png",
    tags: ["Nextjs", "Firebase", "Typescript", "Redux"],
    demoUrl: "https://unsigned-nu.vercel.app",
    codeUrl: "https://github.com/Atif-Hameed/unsigned-frontend",
  },
  {
    id: 2,
    title: "Agent Listing Services",
    description:
      "ALS is a real estate platform that helps professionals showcase their value, attract clients, and grow their business. It boosts visibility both locally and globally through modern listing and marketing tools.",
    image: "/images/projects/als.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    demoUrl: "https://als-frontend-zysoftec.vercel.app",
    codeUrl: "https://github.com/Atif-Hameed/ALS-Panel",
  },
  {
    id: 3,
    title: "Denka Website",
    description:
      "An energy innovation company empowering sustainable living through advanced power-saving technologies that enhance efficiency, reduce consumption, and extend system lifespans—backed by science and built for the future.",
    image: "/images/projects/denka.png",
    tags: ["Nextjs", "Redux", "Javascript", "Framer Motion"],
    demoUrl: "https://denka-website-omega.vercel.app",
    codeUrl: "https://github.com/Atif-Hameed/Denka-Website",
  },
  {
    id: 4,
    title: "Cybenty Platform",
    description:
      "Cybenty is a cybersecurity awareness platform that trains users to detect and prevent online threats. It offers interactive courses, phishing simulations, and tools to help users stay safe online.",
    image: "/images/projects/cyber.png",
    tags: ["Nextjs", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://cyber-security-frontend-zysoftec.vercel.app",
    codeUrl: "https://github.com/Atif-Hameed/cybenty",
  },
  {
    id: 5,
    title: "GTIS Partners",
    description:
      "A global real estate investment firm transforming communities across the Americas and Europe through strategic capital deployment, development expertise, and visionary partnerships.",
    image: "/images/projects/gtis.png",
    tags: ["Bootstrap", "Html", "Css"],
    demoUrl: "https://gtis-partners-website.vercel.app",
    codeUrl: "https://github.com/Atif-Hameed/GTIS-Partners_website",
  },
  {
    id: 6,
    title: "Social Media Platform",
    description:
      "A social media platform where users can post content, like, comment, and share posts. Built to foster engagement and community interaction in a familiar, user-friendly environment.",
    image: "/images/projects/social.png",
    tags: ["Nextjs", "Redux", "Node.js", "Mongodb"],
    demoUrl: "https://social-media-frontend-zysoftec.vercel.app",
    codeUrl: "https://github.com/Atif-Hameed/social-media",
  },
  {
    id: 7,
    title: "Vispik App",
    description:
      "A comprehensive volatility data platform offering real-time and historical VIX, S&P 500, and futures data—ideal for traders and investors seeking actionable market insights.",
    image: "/images/projects/vispik.png",
    tags: ["Nextjs", "Chart js", "Nodemailer", "Typescript"],
    demoUrl: "https://vispik-t1kh.vercel.app",
    codeUrl: "https://github.com/Atif-Hameed/vispik",
  },
  {
    id: 8,
    title: "BrillePro",
    description:
      "A trusted window cleaning service delivering spotless results for residential and commercial properties—using eco-friendly products, modern techniques, and a satisfaction guarantee.",
    image: "/images/projects/brilpro.png",
    tags: ["Nextjs", "Redux", "Javascript", "i18next"],
    demoUrl: "https://brillo-pro.vercel.app/",
    codeUrl: "https://github.com/Atif-Hameed/BrilloPro",
  }

];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            experience in building full-stack applications using the MERN stack
            and related technologies.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="relative bg-gray-900 rounded-xl overflow-hidden group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20 z-10"></div>
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">

                  <Image alt="" src={project.image} width={1000} height={1000} className="w-full object-cover h-full" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-indigo-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-medium text-sm flex items-center"
                  >
                    Live Demo
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-medium text-sm flex items-center"
                  >
                    View Code
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-indigo-600"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: activeProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors duration-300"
          >
            Let&apos;s Work Together
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 