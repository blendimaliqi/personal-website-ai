"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { HobbyProject } from "@/types/hobby-project";
import { hobbyProjects } from "@/data/hobby-projects";
import { HobbyProjectCard } from "./HobbyProjectCard";
import { Code, ExternalLink, Github, Globe } from "lucide-react";

function HobbyProjectsContent() {
  const [selectedProject, setSelectedProject] = useState<HobbyProject | null>(
    null,
  );

  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
            <Code className="h-8 w-8" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hobby Projects
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          These are projects I've developed to explore new technologies, solve real problems, and continue learning. Some were created for real businesses, while others were built for my own interests or for friends and family.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hobbyProjects.map((project: HobbyProject, index: number) => (
          <div key={index}>
            <HobbyProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center space-x-4">
              {selectedProject && (
                <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-blue-100 dark:border-blue-900/30">
                  <Image
                    src={selectedProject.logo}
                    alt={`${selectedProject.title} logo`}
                    fill
                    priority={true}
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <DialogTitle className="text-xl">
                  {selectedProject?.title}
                </DialogTitle>
                <DialogDescription className="text-sm">
                  {selectedProject?.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="mt-4 max-h-[60vh]">
            <div className="whitespace-pre-wrap leading-relaxed">
              {selectedProject?.content}
            </div>

            <div className="mb-6 mt-8">
              <h3 className="mb-3 text-lg font-medium text-foreground">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies
                  .split(", ")
                  .map((tech, index) => (
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
              {selectedProject?.githubUrl && (
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
              {selectedProject?.chromeStoreUrl && (
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
              {selectedProject?.websiteUrl && (
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HobbyProjectsContent;
