"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavMenu } from "./NavMenu";
import { ModeToggle } from "./DropMenu";
import { Menu, X, Home, Briefcase, Code, User, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navIcons = {
  "/": <Home className="h-5 w-5" />,
  "/works": <Briefcase className="h-5 w-5" />,
  "/hobby-projects": <Layers className="h-5 w-5" />,
  "/skills": <Code className="h-5 w-5" />,
  "/about": <User className="h-5 w-5" />,
};

export default function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    // Close menu when escape key is pressed
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-md backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center space-x-1 text-xl font-bold tracking-tighter transition-colors duration-200 hover:text-blue-500"
        >
          <span className="text-slate-900 dark:text-white">Blendi Maliqi</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <div className="hidden md:block">
            <NavMenu pathname={pathname} navIcons={navIcons} />
          </div>
          <ModeToggle />
        </nav>

        {/* Mobile navigation button */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <button
            ref={hamburgerButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 transition-colors hover:bg-blue-500/20 dark:text-blue-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <nav className="flex flex-col space-y-1 border-t border-border px-4 py-5 sm:px-6">
              {Object.entries(navIcons).map(([path, icon]) => (
                <Link
                  key={path}
                  href={path}
                  className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-base ${
                    pathname === path
                      ? "bg-blue-500/10 font-medium text-blue-600 dark:text-blue-400"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span className="flex-shrink-0">{icon}</span>
                  <span>
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() +
                        path.slice(2).replace("-", " ")}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
