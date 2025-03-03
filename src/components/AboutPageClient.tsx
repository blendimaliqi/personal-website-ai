"use client";

import { Mail, Github, Linkedin, User } from "lucide-react";
import React from "react";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";

const AboutPageClient = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-blue-400 shadow-md">
            <Image
              fill
              src="/blendi.jpg"
              alt="Blendi Maliqi"
              className="object-cover"
              style={{ objectPosition: "15% center" }}
              sizes="128px"
              priority={true}
            />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          About Me
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Software developer
        </p>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Oslo, Norway
        </p>
        <div className="mx-auto  flex items-center justify-center gap-2">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <span className="cursor-pointer select-all text-lg text-muted-foreground transition-colors hover:text-blue-400">
            blendi.maliqi93@gmail.com
          </span>
        </div>
      </div>

      <div className="mx-auto mb-10 flex max-w-md justify-center space-x-6">
        <a
          href="https://github.com/blendimaliqi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-900/30 dark:hover:text-slate-400"
          aria-label="GitHub Profile"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/blendimaliqi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="mailto:blendi.maliqi93@gmail.com"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400"
          aria-label="Email Me"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        <div className="overflow-hidden rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Professional Profile</h2>
          <div className="space-y-4">
            <p className="text-card-foreground">
              I am a positive and approachable software developer with a passion
              for the whole stack and a specialized interest in frontend
              technology. Currently working as an IT-consultant based in Oslo,
              Norway. Educated in Informatics - Design and Development of IT
              Systems from Østfold University College.
            </p>
            <p className="text-card-foreground">
              I have experience throughout the whole stack, from frontend
              development with React and TypeScript to mobile development with
              Flutter and React Native, and backend with .NET. I like both team
              environments and working independently, and I'm always eager to
              learn new technologies and concepts.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "HTML/CSS",
              "C#",
              ".NET",
              "Flutter",
              "React Native",
            ].map((skill) => (
              <Badge
                key={skill}
                className="bg-blue-100 px-3 py-1 text-sm text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Personal Interests</h2>
          <p className="text-card-foreground">
            Outside of my professional life, I'm an enthusiast of strength
            training. I also enjoy playing the guitar and like multiplayer
            competitive games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageClient;
