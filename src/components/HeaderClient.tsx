"use client";
import { NavigationMenuDemo } from "./NavMenu";
import { ModeToggle } from "./DropMenu";

export default function HeaderClient() {
  return (
    <header className="mb-2 bg-background p-4 shadow-sm">
      <div className="mx-auto max-w-md px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          <NavigationMenuDemo />
          <div className="flex flex-1 justify-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
