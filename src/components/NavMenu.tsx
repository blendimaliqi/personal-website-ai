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
  { title: "Skills", href: "/skills" },
  { title: "About", href: "/about" },
];

export function NavMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} passHref prefetch legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-4 text-lg transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  "dark:hover:bg-accent/80 dark:hover:text-accent-foreground",
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground dark:bg-accent/90 dark:text-accent-foreground"
                    : "text-foreground dark:text-foreground",
                )}
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
