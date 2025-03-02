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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

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

    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 mb-8 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Mobile Hamburger Menu - Moved to the left */}
          <div className="md:hidden">
            <button
              ref={hamburgerButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Brand/Logo - Center on mobile */}
          <div
            className="flex items-center justify-center md:justify-start"
            aria-label="Brand"
          >
            {/* You can add a logo here if needed */}
            <Link href="/" className="text-lg font-bold md:hidden">
              BM
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden flex-1 justify-center md:flex"
            role="navigation"
            aria-label="Desktop menu"
          >
            <NavMenu />
          </div>

          {/* Mode Toggle (visible on all screen sizes) */}
          <div className="flex items-center" aria-label="Theme toggle">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu (conditionally rendered with animation) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 top-[72px] z-50 h-[calc(100vh-72px)] w-full overflow-y-auto bg-background/95 px-6 py-8 backdrop-blur-lg md:hidden"
              role="navigation"
              aria-label="Mobile menu"
            >
              <div className="flex w-full flex-col items-center space-y-6">
                <div className="grid w-full grid-cols-1 gap-4">
                  {Object.entries(navIcons).map(([path, icon]) => {
                    const isActive = pathname === path;
                    const title =
                      path === "/"
                        ? "Home"
                        : path
                            .slice(1)
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1),
                            )
                            .join(" ");

                    return (
                      <Link
                        key={path}
                        href={path}
                        className={`flex items-center rounded-lg px-4 py-3 transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <span className="mr-3">{icon}</span>
                        <span className="text-lg font-medium">{title}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto h-2 w-2 rounded-full bg-primary"
                            layoutId="navDot"
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
