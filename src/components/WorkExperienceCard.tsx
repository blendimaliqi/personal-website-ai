import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { WorkExperience } from "~/types/work";

interface WorkExperienceCardProps {
  experience: WorkExperience;
  onClick: () => void;
}

export function WorkExperienceCard({
  experience,
  onClick,
}: WorkExperienceCardProps) {
  return (
    <Card
      className="flex cursor-pointer flex-col justify-between transition-all hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <div>
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-3">
            <Image
              src={experience.logo}
              alt={`${experience.title} logo`}
              width={40}
              height={40}
              priority={true}
              className="flex-shrink-0 rounded-full object-cover"
              style={{ objectFit: "cover" }}
            />
            <div className="min-w-0 flex-1">
              <CardTitle className="break-words text-sm font-semibold sm:text-base md:text-lg">
                {experience.title}
              </CardTitle>
              <CardDescription className="mt-1 text-xs sm:text-sm">
                {experience.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs sm:text-sm">{experience.shortDescription}</p>
        </CardContent>
      </div>
      <CardFooter>
        <p className="text-xs">
          <span className="font-semibold">Technologies:</span>{" "}
          {experience.technologies}
        </p>
      </CardFooter>
    </Card>
  );
}
