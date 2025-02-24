import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Works", href: "/works" },
  { title: "Hobby Projects", href: "/hobby-projects" },
  { title: "Skills", href: "/skills" },
  { title: "About", href: "/about" },
];

export function NavMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <NavigationMenu aria-label="Site navigation">
      <NavigationMenuList
        className="flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0"
        role="menubar"
      >
        {navItems.map((item) => (
          <NavigationMenuItem
            key={item.title}
            className="w-full md:w-auto"
            role="none"
          >
            <Link href={item.href} passHref prefetch legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  "block w-full px-3 py-2 text-center text-lg transition-colors duration-200 md:inline-block md:w-auto",
                  isActive(item.href)
                    ? "font-medium text-foreground"
                    : "text-foreground/60 hover:text-foreground",
                )}
                role="menuitem"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
