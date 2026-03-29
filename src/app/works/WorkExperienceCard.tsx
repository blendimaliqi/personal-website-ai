import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { WorkExperience } from "~/types/work";
import {
  CalendarRange,
  ExternalLink,
  Github,
  Globe,
  ChevronDown,
} from "lucide-react";

interface WorkExperienceCardProps {
  experience: WorkExperience;
  onClick: () => void;
}

export function WorkExperienceCard({
  experience,
  onClick,
}: WorkExperienceCardProps) {
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  }

  // Separate handler to prevent card click when clicking on a link
  function handleButtonClick(
    e: React.MouseEvent<HTMLButtonElement>,
    url: string,
  ) {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Card
      className="group relative flex h-[420px] cursor-pointer flex-col overflow-hidden border-border bg-background transition-all hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="article"
      aria-label={`Work experience: ${experience.title}`}
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-muted/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="relative z-10 flex-grow">
        <CardHeader className="pb-3">
          <div className="flex items-start space-x-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-border">
              <Image
                src={experience.logo}
                alt={`${experience.title} logo`}
                fill
                priority={true}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="break-words font-display text-base font-semibold sm:text-lg">
                {experience.title}
              </CardTitle>
              <CardDescription className="mt-1 text-xs font-medium sm:text-sm">
                {experience.description}
              </CardDescription>
            </div>
          </div>
          <div className="mt-2 flex items-center font-mono text-xs text-muted-foreground">
            <CalendarRange className="mr-1 h-3.5 w-3.5" />
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-0">
          <p className="line-clamp-4 text-sm leading-relaxed">
            {experience.shortDescription}
          </p>
        </CardContent>
      </div>
      <CardFooter className="mt-auto flex flex-col items-start border-t border-border/50 bg-muted/30 py-5">
        <div className="min-h-[100px] w-full">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies
              .split(",")
              .slice(0, 3)
              .map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                >
                  {tech.trim()}
                </span>
              ))}
            {experience.technologies.split(",").length > 3 && (
              <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium">
                +{experience.technologies.split(",").length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 flex w-full flex-col space-y-3">
          <div className="flex flex-wrap gap-2">
            {experience.githubUrl && (
              <button
                onClick={(e) =>
                  handleButtonClick(e, experience.githubUrl as string)
                }
                className="relative inline-flex items-center rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-all hover:z-10 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-1"
                aria-label={`View ${experience.title} on GitHub (opens in new tab)`}
              >
                <Github className="mr-1.5 h-3.5 w-3.5" />
                GitHub
              </button>
            )}
            {experience.websiteUrl && (
              <button
                onClick={(e) =>
                  handleButtonClick(e, experience.websiteUrl as string)
                }
                className="relative inline-flex items-center rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-all hover:z-10 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-1"
                aria-label={`Visit ${experience.title} website (opens in new tab)`}
              >
                <Globe className="mr-1.5 h-3.5 w-3.5" />
                Website
              </button>
            )}
          </div>

          <span className="flex items-center self-end rounded-md px-2 py-1 font-mono text-xs text-muted-foreground transition-all hover:bg-muted group-hover:text-foreground">
            Show more <ChevronDown className="ml-1.5 h-3 w-3" />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
