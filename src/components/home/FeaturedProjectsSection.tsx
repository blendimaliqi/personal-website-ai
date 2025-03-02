"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button";
import { featuredProjects } from "~/data/featured-projects";

interface FeaturedProjectsSectionProps {
  activeSection: string | null;
  handleSectionHover: (section: string | null) => void;
  expandedChat: boolean;
  isMobile: boolean;
}

export default function FeaturedProjectsSection({
  activeSection,
  handleSectionHover,
  expandedChat,
  isMobile,
}: FeaturedProjectsSectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${isMobile ? "hidden" : ""}`}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-muted-foreground">Some of my recent work</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <Link
            key={project.title}
            href={project.title === "Mastercard" ? "/works" : "/hobby-projects"}
            className="block h-full"
          >
            <div
              onMouseEnter={() => handleSectionHover(project.title)}
              onMouseLeave={() => handleSectionHover(null)}
              className={`group relative flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-md ${
                activeSection === project.title
                  ? "border-blue-500/50 shadow-md"
                  : "border-border"
              }`}
            >
              <div className="mb-4 flex h-16 items-center justify-center">
                <Image
                  src={project.logoPath}
                  alt={`${project.title} logo`}
                  width={120}
                  height={60}
                  className="h-auto max-h-16 w-auto object-contain"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-start">
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 flex items-center rounded-full border border-blue-500/30 bg-background px-4 py-2 text-sm font-medium text-blue-500 shadow-sm transition-all group-hover:border-blue-500/50 group-hover:bg-accent group-hover:shadow-md dark:bg-slate-800/80 dark:text-blue-400 dark:group-hover:bg-slate-700"
                >
                  <span>View Project</span>
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center"></div>
    </section>
  );
}
