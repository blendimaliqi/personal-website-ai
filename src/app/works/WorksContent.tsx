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

export default function WorksContent() {
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperience | null>(null);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-display text-4xl font-extrabold tracking-[-0.04em] lg:text-5xl">
          Work Experience
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          My work history so far. I have worked in consulting, at startups and
          in larger companies. I like building things that people actually use.
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
                <DialogTitle className="font-display text-xl">
                  {selectedExperience?.title}
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-1">
                  <span className="text-sm">
                    {selectedExperience?.description}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {selectedExperience?.startDate} -{" "}
                    {selectedExperience?.endDate}
                  </span>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="mt-4 max-h-[60vh]">
            <div
              className="whitespace-pre-wrap leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: selectedExperience?.content || "",
              }}
            />
            <div className="mb-6 mt-8">
              <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience?.technologies
                  .split(", ")
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground"
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
