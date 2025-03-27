"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "~/components/ui/button";
import { featuredProjects } from "~/data/featured-projects";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "~/components/ui/dialog";
import { workExperiences } from "~/data/workExperiences";
import { hobbyProjects } from "~/data/hobby-projects";

interface FeaturedProjectsSectionProps {
  activeSection: string | null;
  handleSectionHover: (section: string | null) => void;
  isMobile: boolean;
}

export default function FeaturedProjectsSection({
  activeSection,
  handleSectionHover,
  isMobile,
}: FeaturedProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  function findFullProjectDetails(projectTitle: string) {
    const workMatch = workExperiences.find(
      (work) => work.title === projectTitle,
    );
    if (workMatch) return { ...workMatch, type: "work" };

    const hobbyMatch = hobbyProjects.find(
      (hobby) => hobby.title === projectTitle,
    );
    if (hobbyMatch) return { ...hobbyMatch, type: "hobby" };

    const featuredMatch = featuredProjects.find(
      (fp) => fp.title === projectTitle,
    );
    return featuredMatch ? { ...featuredMatch, type: "featured" } : null;
  }

  function handleProjectClick(projectTitle: string) {
    const projectDetails = findFullProjectDetails(projectTitle);
    setSelectedProject(projectDetails);
  }

  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${isMobile ? "hidden" : ""}`}
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Some of my recent work
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className="block h-full cursor-pointer"
            onClick={() => handleProjectClick(project.title)}
          >
            <div
              onMouseEnter={() => handleSectionHover(project.title)}
              onMouseLeave={() => handleSectionHover(null)}
              className={`group relative flex h-full flex-col overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-blue-500/50 hover:shadow-lg ${
                activeSection === project.title
                  ? "border-blue-500/50 shadow-lg"
                  : "border-border"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10 flex h-full flex-col p-6">
                <div className="mb-4 overflow-hidden rounded-lg bg-white/5 p-3 backdrop-blur-sm dark:bg-black/5">
                  <div className="flex h-16 items-center justify-start">
                    <Image
                      src={project.logoPath}
                      alt={`${project.title} logo`}
                      width={120}
                      height={60}
                      className="h-auto max-h-16 w-auto transform object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-start">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group inline-flex items-center rounded-full border border-blue-500/30 bg-background px-4 py-2 text-sm font-medium text-blue-500 shadow-sm transition-all group-hover:border-blue-500/50 group-hover:bg-accent group-hover:shadow-md dark:bg-slate-800/80 dark:text-blue-400 dark:group-hover:bg-slate-700"
                  >
                    <span>View Project</span>
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-blue-100 dark:border-blue-900/30">
                    <Image
                      src={selectedProject.logo || selectedProject.logoPath}
                      alt={`${selectedProject.title} logo`}
                      fill
                      priority={true}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-xl">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                      {selectedProject.description}
                    </DialogDescription>
                    {selectedProject.startDate && selectedProject.endDate && (
                      <p className="mt-1 text-sm font-medium text-blue-500 dark:text-blue-400">
                        {selectedProject.startDate} - {selectedProject.endDate}
                      </p>
                    )}
                  </div>
                </div>
              </DialogHeader>
              <ScrollArea className="mt-4 max-h-[60vh]">
                <div className="whitespace-pre-wrap leading-relaxed">
                  {selectedProject.content ||
                    selectedProject.shortDescription ||
                    selectedProject.description}
                </div>

                <div className="mb-6 mt-8">
                  <h3 className="mb-3 text-lg font-medium text-foreground">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(
                      selectedProject.technologies ||
                      selectedProject.tags?.join(", ") ||
                      ""
                    )
                      .split(", ")
                      .map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md border border-blue-200/50 bg-blue-50/50 px-3 py-1.5 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="mb-4 mt-6 flex flex-wrap gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-slate-700 hover:shadow-md"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </a>
                  )}
                  {selectedProject.chromeStoreUrl && (
                    <a
                      href={selectedProject.chromeStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Chrome Web Store
                    </a>
                  )}
                  {selectedProject.websiteUrl && (
                    <a
                      href={selectedProject.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-md"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Live Website
                    </a>
                  )}
                </div>
              </ScrollArea>
              <DialogClose asChild>
                <Button className="mt-4 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                  Close
                </Button>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
