import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Works", href: "/works" },
  { title: "Hobby Projects", href: "/hobby-projects" },
  { title: "Skills", href: "/skills" },
  { title: "About", href: "/about" },
];

interface NavMenuProps {
  pathname?: string;
  navIcons?: Record<string, React.ReactNode>;
}

export function NavMenu({ pathname: propPathname, navIcons }: NavMenuProps) {
  const routerPathname = usePathname();
  const pathname = propPathname || routerPathname;
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 768);
    }

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <NavigationMenu aria-label="Site navigation" className="w-full">
      <NavigationMenuList
        className="flex w-full flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0"
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
                  "group relative block w-full px-4 py-3 text-center text-lg font-medium transition-colors duration-200 md:inline-block md:w-auto md:px-3 md:py-2 md:text-base",
                  isActive(item.href)
                    ? "text-primary md:font-semibold md:text-foreground"
                    : "text-muted-foreground hover:text-foreground md:text-foreground/60 md:hover:text-foreground",
                  isMobile && "text-xl",
                )}
                role="menuitem"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="flex items-center justify-center gap-1.5">
                  {navIcons && navIcons[item.href] && (
                    <span className="inline-flex opacity-70 transition-opacity group-hover:opacity-100">
                      {navIcons[item.href]}
                    </span>
                  )}
                  <span>{item.title}</span>
                </span>
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-16 rounded-full bg-primary md:hidden"
                    layoutId="activeIndicator"
                    initial={false}
                  />
                )}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
