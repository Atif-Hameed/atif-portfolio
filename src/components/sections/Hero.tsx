"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroModel from "../3d/SplineModel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Canvas as the full-section background */}
      <div className="absolute inset-0 z-10">
        <HeroModel isBackground={true} />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 z-40 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Software</span> Engineer
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-300 text-xl mb-8 max-w-xl">
                Crafting innovative digital solutions with cutting-edge technologies.
                Specializing in full-stack development, cloud architecture, and software design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 glow"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="bg-transparent hover:bg-gray-800 text-gray-200 border border-gray-400 px-8 py-4 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex gap-x-6"
            >
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-black font-bold">
                  2+
                </div>
                <span className="text-gray-300">Years Experience</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-black font-bold">
                  20+
                </div>
                <span className="text-gray-300">Projects Completed</span>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 h-[300px] md:h-[500px]">
            <div className="w-full h-full z-30">
              {/* Render the 3D model in its original position */}
              <HeroModel isBackground={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}