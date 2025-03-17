"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, Code, Cpu, Briefcase } from "lucide-react";
import { skillCategories } from "~/data/skills";

interface SkillsSectionProps {
  activeSection: string | null;
  handleSectionHover: (section: string | null) => void;
  expandedChat: boolean;
  isMobile: boolean;
}

export default function SkillsSection({
  activeSection,
  handleSectionHover,
  expandedChat,
  isMobile,
}: SkillsSectionProps) {
  const iconMap = {
    Code: <Code className="h-5 w-5" />,
    Cpu: <Cpu className="h-5 w-5" />,
    Briefcase: <Briefcase className="h-5 w-5" />,
  };

  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${isMobile ? "hidden" : ""}`}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <p className="mt-2 text-muted-foreground">
          Technologies and tools I work with
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            onMouseEnter={() => handleSectionHover(category.name)}
            onMouseLeave={() => handleSectionHover(null)}
            className={`group flex flex-col rounded-xl border p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-md ${
              activeSection === category.name
                ? "border-blue-500/50 shadow-md"
                : "border-border"
            }`}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              {iconMap[category.iconName as keyof typeof iconMap]}
            </div>
            <h3 className="mb-3 text-xl font-semibold">{category.name}</h3>
            <div className="mb-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <Link
                href="/skills"
                className="flex items-center text-sm text-blue-500 hover:text-blue-400"
              >
                <span>View all skills</span>
                <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
