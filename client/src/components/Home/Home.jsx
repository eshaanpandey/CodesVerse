import React from "react";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiJsonwebtokens, SiPassport, SiNetlify, SiRender, SiLeetcode, SiCodeforces } from 'react-icons/si';

function Home() {
  return (
    <div className="w-full h-full p-8 bg-cyan-200 dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-500">

      {/* Introduction Section */}
      <motion.section
        className="flex flex-col items-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-semibold text-center mb-4 text-blue-600 dark:text-blue-400"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          Welcome to <span className="text-blue-700 dark:text-blue-500">CodesVerse</span> 🚀
        </motion.h1>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl">
          CodesVerse is your go-to platform to solve DSA (Data Structures and Algorithms) problems. 
          With a powerful integrated editor, you can write, test, and run your code remotely with ease.
        </p>
      </motion.section>

      {/* Technologies Used Section */}
      <motion.section
        className="flex flex-col items-start space-y-6 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">

          {/* Node.js */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-green-600 text-white dark:bg-green-800">
            <FaNodeJs size={50} />
            <div className="text-center">
              <p className="font-semibold">Node.js</p>
            </div>
          </div>

          {/* Express.js */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-gray-800 text-white dark:bg-gray-700">
            <SiExpress size={50} />
            <div className="text-center">
              <p className="font-semibold">Express.js</p>
            </div>
          </div>

          {/* MongoDB */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-green-700 text-white dark:bg-green-900">
            <FaDatabase size={50} />
            <div className="text-center">
              <p className="font-semibold">MongoDB</p>
            </div>
          </div>

          {/* React.js */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-blue-600 text-white dark:bg-blue-800">
            <FaReact size={50} />
            <div className="text-center">
              <p className="font-semibold">React.js</p>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-teal-500 text-white dark:bg-teal-700">
            <SiTailwindcss size={50} />
            <div className="text-center">
              <p className="font-semibold">Tailwind CSS</p>
            </div>
          </div>

          {/* JWT */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-blue-500 text-white dark:bg-blue-600">
            <SiJsonwebtokens size={50} />
            <div className="text-center">
              <p className="font-semibold">JWT</p>
            </div>
          </div>

          {/* Passport */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-yellow-600 text-white dark:bg-yellow-700">
            <SiPassport size={50} />
            <div className="text-center">
              <p className="font-semibold">Passport</p>
            </div>
          </div>

          {/* Netlify */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-green-400 text-white dark:bg-green-500">
            <SiNetlify size={50} />
            <div className="text-center">
              <p className="font-semibold">Netlify</p>
            </div>
          </div>

          {/* Render */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-purple-600 text-white dark:bg-purple-700">
            <SiRender size={50} />
            <div className="text-center">
              <p className="font-semibold">Render</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-gray-700 text-white dark:bg-gray-800">
            <FaGithub size={50} />
            <div className="text-center">
              <p className="font-semibold">GitHub</p>
            </div>
          </div>

        </div>
      </motion.section>

      {/* About the Developer Section */}
      <motion.section
        className="flex flex-col items-start space-y-6 mb-10 bg-gray-800 dark:bg-gray-700 p-8 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.9 }}
      >
        <h2 className="text-3xl font-semibold text-white">
          About the Developer
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-300 max-w-3xl">
            This platform is created by <strong>Eshaan Pandey</strong>, a passionate
            programmer from the Indian Institute of Information Technology, Pune. Eshaan
            is dedicated to creating platforms that help others grow their coding skills
            and reach their full potential.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-white">Skills</h3>
            <ul className="list-disc pl-6 text-lg text-gray-300">
              <li>Languages: C, C++, Python, Java, JavaScript, SQL</li>
              <li>Frontend: HTML, CSS, React.js</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Dev Tools: Git, GitHub, Postman, VS Code</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">College</h3>
            <p className="text-lg text-gray-300">Indian Institute of Information Technology, Pune</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 flex-wrap justify-center">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/eshaan-pandey-9b28aa222/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-300"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/eshaanpandey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white bg-gray-950 hover:bg-gray-900 p-2 rounded-full transition-all duration-300"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/Eshaan14_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-all duration-300"
            >
              <SiLeetcode size={24} />
              <span>LeetCode</span>
            </a>

            {/* Codeforces */}
            <a
              href="https://codeforces.com/profile/eshaan14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full transition-all duration-300"
            >
              <SiCodeforces size={24} />
              <span>Codeforces</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-700 dark:text-gray-300 my-8">
        <p>
          🚀 Built with passion by Eshaan Pandey | &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Home;
