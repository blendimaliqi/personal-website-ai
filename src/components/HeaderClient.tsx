"use client";

import Link from "next/link";
import { NavigationMenuDemo } from "./NavMenu";
import { ModeToggle } from "./DropMenu";

export default function HeaderClient() {
  return (
    <header className="mb-2 bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold ">
          BLENDI MALIQI
        </Link>
        <div className="flex items-center space-x-4">
          <NavigationMenuDemo />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
