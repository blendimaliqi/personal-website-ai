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
      <NavigationMenuList className="flex space-x-6">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} passHref prefetch legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  "relative px-3 py-2 text-lg transition-colors duration-200",
                  isActive(item.href)
                    ? "font-medium text-foreground"
                    : "text-foreground/60 hover:text-foreground",
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
