"use client";

import React, { useState } from "react";
import { NavigationMenuDemo } from "./NavMenu";
import { ModeToggle } from "./DropMenu";
import { Menu } from "lucide-react";

const HamburgerIcon = () => <Menu className="h-6 w-6" />;

export default function HeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="mb-2 bg-background p-4 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo or Brand Name (optional) */}
          <div className="flex items-center">
            {/* Add your logo or brand name here */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 justify-center md:flex">
            <NavigationMenuDemo />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <HamburgerIcon />
            </button>
          </div>

          {/* Mode Toggle (visible on all screen sizes) */}
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {mobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <NavigationMenuDemo />
          </div>
        )}
      </div>
    </header>
  );
}
