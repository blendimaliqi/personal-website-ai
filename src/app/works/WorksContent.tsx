"use client";
import React, { useState } from "react";
import { WorkExperience } from "~/types/work";
import { workExperiences } from "~/data/workExperiences";
import { WorkExperienceCard } from "~/components/WorkExperienceCard";
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
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Work Experience
      </h1>
      <p className="mb-12 text-lg">
        As a consultant, I have worked in various companies and projects,
        gaining valuable experience in frontend development, cross-platform
        mobile development, and backend. Click on a card to learn more about
        each experience.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {workExperiences.map((experience, index) => (
          <WorkExperienceCard
            key={index}
            experience={experience}
            onClick={() => setSelectedExperience(experience)}
          />
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
                <Image
                  src={selectedExperience.logo}
                  alt={`${selectedExperience.title} logo`}
                  width={80}
                  height={80}
                  priority={true}
                  className="rounded-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              )}
              <div>
                <DialogTitle>{selectedExperience?.title}</DialogTitle>
                <DialogDescription>
                  {selectedExperience?.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="mt-4 max-h-[60vh]">
            <div className="whitespace-pre-wrap">
              {selectedExperience?.content}
            </div>
            <p className="mt-4 text-sm">
              <span className="font-semibold">Technologies:</span>{" "}
              {selectedExperience?.technologies}
            </p>
          </ScrollArea>
          <DialogClose asChild>
            <Button className="mt-4">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
