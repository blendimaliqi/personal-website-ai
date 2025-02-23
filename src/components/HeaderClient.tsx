"use client";

import React, { useState } from "react";
import { NavMenu } from "./NavMenu";
import { ModeToggle } from "./DropMenu";
import { Menu } from "lucide-react";

const HamburgerIcon = () => <Menu className="h-6 w-6" />;

export default function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mb-8 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo or Brand Name (optional) */}
          <div className="flex items-center">
            {/* Add your logo or brand name here */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 justify-center md:flex">
            <NavMenu />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle menu"
            >
              <HamburgerIcon />
            </button>
          </div>

          {/* Mode Toggle (visible on all screen sizes) */}
          <div className="ml-4 flex items-center border-l pl-4">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 w-2/4  bg-white px-4 py-4 text-slate-950 opacity-95 shadow-lg  dark:bg-slate-950 dark:text-white md:hidden">
            <div className="flex w-full flex-col">
              <NavMenu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
