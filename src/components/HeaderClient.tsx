"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavMenu } from "./NavMenu";
import { ModeToggle } from "./DropMenu";
import { Menu } from "lucide-react";

const HamburgerIcon = () => <Menu className="h-6 w-6" />;

export default function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 mb-8 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          <div className="flex items-center" aria-label="Brand">
            {/* Add your logo or brand name here */}
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden flex-1 justify-center md:flex"
            role="navigation"
            aria-label="Desktop menu"
          >
            <NavMenu />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              ref={hamburgerButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <HamburgerIcon />
            </button>
          </div>

          {/* Mode Toggle (visible on all screen sizes) */}
          <div
            className="ml-4 flex items-center border-l pl-4"
            aria-label="Theme toggle"
          >
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu (conditionally rendered) */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="absolute left-0 right-0 top-full mt-2 w-2/4 bg-white px-4 py-4 text-slate-950 opacity-95 shadow-lg dark:bg-slate-950 dark:text-white md:hidden"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex w-full flex-col">
              <NavMenu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
