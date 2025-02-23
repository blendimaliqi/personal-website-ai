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
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { HobbyProject } from "@/types/hobby-project";
import { hobbyProjects } from "@/data/hobby-projects";
import { HobbyProjectCard } from "./HobbyProjectCard";

function HobbyProjectsContent() {
  const [selectedProject, setSelectedProject] = useState<HobbyProject | null>(
    null,
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hobby Projects
      </h1>
      <p className="mb-12 text-lg">
        These are my personal projects that I've developed to explore new
        technologies, solve real-world problems, and continue learning.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hobbyProjects.map((project: HobbyProject, index: number) => (
          <HobbyProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
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
                <Image
                  src={selectedProject.logo}
                  alt={`${selectedProject.title} logo`}
                  width={80}
                  height={80}
                  priority={true}
                  className="h-20 w-20 flex-shrink-0 rounded-full object-cover"
                />
              )}
              <div>
                <DialogTitle>{selectedProject?.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject?.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="mt-4 max-h-[60vh]">
            <div className="whitespace-pre-wrap">
              {selectedProject?.content}
            </div>
            <p className="mt-4 text-sm">
              <span className="font-semibold">Technologies:</span>{" "}
              {selectedProject?.technologies}
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {selectedProject?.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  View project on GitHub
                </a>
              )}
              {selectedProject?.chromeStoreUrl && (
                <a
                  href={selectedProject.chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Get it on Chrome Web Store
                </a>
              )}
              {selectedProject?.websiteUrl && (
                <a
                  href={selectedProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Visit Live Website
                </a>
              )}
            </div>
          </ScrollArea>
          <DialogClose asChild>
            <Button className="mt-4">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HobbyProjectsContent;
