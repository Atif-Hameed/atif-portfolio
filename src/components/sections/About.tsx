"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import Image from "next/image";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Next.js", level: 90 },
  { name: "Express", level: 85 },
];

const techStack = [
  { name: "JavaScript", icon: "/images/tech/javascript.svg" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg" },
  { name: "React", icon: "/images/tech/react.svg" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg" },
  { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
  { name: "Express", icon: "/images/tech/express.svg" },
  { name: "Next.js", icon: "/images/tech/nextjs.svg" },
  { name: "Tailwind CSS", icon:"/images/tech/tailwindcss.svg" },
];

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Who Am I?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate MERN Stack Developer with a strong focus on
              creating responsive and performant web applications. With over 5 years
              of experience, I&apos;ve worked on various projects ranging from small
              business websites to complex enterprise applications.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My expertise lies in building full-stack applications using
              MongoDB, Express.js, React.js, and Node.js. I&apos;m also proficient in
              Next.js for creating server-side rendered and statically generated
              React applications.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-medium mb-4">My Skills</h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-2 rounded-full bg-indigo-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6">My Tech Stack</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={item}
                  className="glass p-4 rounded-lg flex flex-col items-center justify-center hover:glow transition-all duration-300"
                >
                  <div className="relative w-12 h-12 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      {/* We'll add real SVG icons later */}
                      {/* <svg
                        className="w-8 h-8 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                          clipRule="evenodd"
                        />
                      </svg> */}
                      <Image alt="" src={tech.icon} width={100} height={100} className="h-full w-full " />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12">
              <h4 className="text-xl font-medium mb-6">Experience</h4>
              <div className="relative border-l-2 border-indigo-800 pl-8 pb-6">
                <div className="mb-10 relative">
                  <span className="absolute -left-[33px] flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-gray-900"></span>
                  <h5 className="text-lg font-semibold text-white">
                    Senior MERN Stack Developer
                  </h5>
                  <p className="text-indigo-400">2023 - Present</p>
                  <p className="text-gray-400 mt-2">
                    Leading development of enterprise web applications, mentoring
                    junior developers, and implementing best practices.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[33px] flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full ring-8 ring-gray-900"></span>
                  <h5 className="text-lg font-semibold text-white">
                    Full Stack Developer
                  </h5>
                  <p className="text-indigo-400">2022 - 2023</p>
                  <p className="text-gray-400 mt-2">
                    Developed and maintained web applications using React, Node.js,
                    and MongoDB. Collaborated with design teams to implement UI/UX.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 