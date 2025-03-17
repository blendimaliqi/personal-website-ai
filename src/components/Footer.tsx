import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { cn } from "~/lib/utils";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-800 dark:border-slate-800 dark:from-slate-900 dark:to-slate-800 dark:text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold tracking-tight">
              Blendi Maliqi
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Software developer
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/blendimaliqi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 transition-colors duration-300 hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/blendimaliqi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 transition-colors duration-300 hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="mailto:blendi.maliqi93@gmail.com"
              className="rounded-full p-2 transition-colors duration-300 hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
