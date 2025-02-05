import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-base font-semibold">Blendi Maliqi</h2>
            <p className="text-xs opacity-75">Software developer</p>
          </div>
          <div className="flex space-x-4">
            {/* <a
              href="https://github.com/blendimaliqi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a> */}
            <a
              href="https://linkedin.com/in/blendimaliqi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:blendi.maliqi93@gmail.com"
              className="transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
