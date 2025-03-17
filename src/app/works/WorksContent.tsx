"use client";
import React, { useState } from "react";
import { WorkExperience } from "~/types/work";
import { workExperiences } from "~/data/workExperiences";
import { WorkExperienceCard } from "./WorkExperienceCard";
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
import Image from "next/image";
import { Briefcase } from "lucide-react";

export default function WorksContent() {
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperience | null>(null);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
            <Briefcase className="h-8 w-8" />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Work Experience
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          This is my professional work experience. From startups to enterprise
          clients. I love the feeling of knowing my code is out there and used
          by people.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <WorkExperienceCard
              experience={experience}
              onClick={() => setSelectedExperience(experience)}
            />
          </div>
        ))}
      </div>

      <Dialog
        open={selectedExperience !== null}
        onOpenChange={() => setSelectedExperience(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center space-x-4">
              {selectedExperience && (
                <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                  <Image
                    src={selectedExperience.logo}
                    alt={`${selectedExperience.title} logo`}
                    fill
                    priority={true}
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <DialogTitle className="text-xl">
                  {selectedExperience?.title}
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-1">
                  <span className="text-sm">
                    {selectedExperience?.description}
                  </span>
                  <span className="font-medium text-blue-500 dark:text-blue-400">
                    {selectedExperience?.startDate} -{" "}
                    {selectedExperience?.endDate}
                  </span>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="mt-4 max-h-[60vh]">
            <div className="whitespace-pre-wrap leading-relaxed">
              {selectedExperience?.content}
            </div>
            <div className="mb-6 mt-8">
              <h3 className="mb-3 text-lg font-medium text-foreground">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience?.technologies
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
