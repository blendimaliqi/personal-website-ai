"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import React from "react";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";

const interests = ["Strength Training", "Playing Guitar", "Competitive Gaming"];

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "C#",
  ".NET",
  "React Native",
  "Flutter",
];

const AboutPageClient = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-border shadow-sm">
                <Image
                  fill
                  src="/blendi.jpg"
                  alt="Blendi Maliqi"
                  className="object-cover"
                  style={{ objectPosition: "15% center" }}
                  sizes="144px"
                  priority={true}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-1 font-display text-3xl font-bold tracking-[-0.03em]">Blendi Maliqi</h1>
              <p className="mb-3 font-mono text-sm text-muted-foreground">
                Software Developer
              </p>

              <div className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground md:justify-start">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Oslo, Norway
                </span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="https://github.com/blendimaliqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/blendimaliqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:blendi.maliqi93@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Professional Profile */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-display text-lg font-semibold">About</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              I am a software developer based in Oslo. I work fullstack but
              have a particular interest in frontend. Currently employed at
              Multiconsult, and co-founder of SB Solutions on the side. I have
              a degree in Informatics from Østfold University College.
            </p>
            <p>
              I have experience across the whole stack. Frontend with React and
              TypeScript, mobile with Flutter and React Native, and backend with
              .NET. I work well in teams but can also handle things on my own.
              Always interested in picking up new technologies.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Key Skills */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-lg font-semibold">Key Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-2.5 py-1 text-sm font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 font-display text-lg font-semibold">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageClient;
