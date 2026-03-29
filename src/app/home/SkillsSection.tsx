"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { workExperiences } from "~/data/workExperiences";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["C#", ".NET", "SQL", "REST API"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    label: "Infra",
    skills: ["Azure", "CI/CD", "Docker"],
  },
];

const currentRoles = [
  {
    company: "Multiconsult",
    role: "Fullstack Developer",
    logo: "/multiconsult.png",
  },
  {
    company: "SB Solutions",
    role: "Co-founder",
    logo: "/sbsolutions.png",
  },
];

interface SkillsSectionProps {
  activeSection: string | null;
  handleSectionHover: (section: string | null) => void;
  isMobile: boolean;
}

function getYearsOfExperience(): number {
  const earliest = workExperiences.reduce((min, exp) => {
    const date = new Date(exp.startDate);
    return date < min ? date : min;
  }, new Date());
  const years = (Date.now() - earliest.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}

export default function SkillsSection({ isMobile }: SkillsSectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${isMobile ? "hidden" : ""}`}
    >
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* Skills — spans 2 columns and 2 rows */}
        <div className="row-span-2 rounded-2xl border border-border bg-card p-6 noise-subtle md:col-span-2">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What I work with
          </p>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-display text-sm font-semibold text-foreground">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-border pt-4">
            <Link
              href="/skills"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              All skills
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Currently — top right */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Currently
          </p>
          <div className="space-y-4">
            {currentRoles.map((role) => (
              <div key={role.company} className="flex items-center gap-3">
                <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg border border-border">
                  <Image
                    src={role.logo}
                    alt={role.company}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold leading-tight">
                    {role.company}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {role.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — bottom right */}
        <Link
          href="/works"
          className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted/50"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </p>
          <div className="mt-4 flex items-end justify-between">
            <p className="font-display text-3xl font-bold tracking-tight">
              {getYearsOfExperience()}+ years
            </p>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </Link>
      </div>
    </section>
  );
}
