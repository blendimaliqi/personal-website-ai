export interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  logoPath: string;
  link: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Stilo.no",
    description:
      "AI-powered virtual clothing try-on platform for the Norwegian market.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Supabase",
      "Stripe",
      "Google Generative AI",
    ],
    logoPath: "/stilo.png",
    link: "/hobby-projects",
  },
  {
    title: "Mastercard",
    description:
      "Worked on secure payment solutions and financial technology integrations for Mastercard's global platform.",
    tags: ["React", "Java", "TypeScript", "Figma", "Jest", "Playwright"],
    logoPath: "/mastercard-logo.png",
    link: "/works",
  },
  {
    title: "Borgen Bilsalg",
    description:
      "Car dealership management system with inventory tracking, customer management, and sales analytics for a Norwegian car dealer.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JSDOM",
      "Framer Motion",
    ],
    logoPath: "/borgenbilsalg-512x.png",
    link: "/hobby-projects",
  },
];
