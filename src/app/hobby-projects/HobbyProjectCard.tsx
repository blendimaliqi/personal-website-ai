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
import { HobbyProject } from "@/types/hobby-project";
import { ExternalLink, Globe, ChevronDown } from "lucide-react";

interface HobbyProjectCardProps {
  project: HobbyProject;
  onClick: () => void;
}

export function HobbyProjectCard({ project, onClick }: HobbyProjectCardProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    url: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="group relative flex h-[420px] cursor-pointer flex-col overflow-hidden border-border bg-background/80 backdrop-blur-sm transition-all hover:scale-[1.01] hover:border-blue-500/30 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400"
      role="article"
      aria-label={`Project: ${project.title}`}
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="relative z-10 flex-grow">
        <CardHeader className="pb-3">
          <div className="flex items-start space-x-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-blue-100 dark:border-blue-900/30">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                fill
                priority={true}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="break-words text-base font-semibold sm:text-lg">
                {project.title}
              </CardTitle>
              <CardDescription className="mt-1 text-xs font-medium sm:text-sm">
                {project.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-0">
          <p className="line-clamp-4 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </CardContent>
      </div>

      <CardFooter className="mt-auto flex flex-col items-start border-t border-border/50 bg-muted/30 py-5">
        <div className="min-h-[100px] w-full">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies
              .split(",")
              .slice(0, 3)
              .map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                >
                  {tech.trim()}
                </span>
              ))}
            {project.technologies.split(",").length > 3 && (
              <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium">
                +{project.technologies.split(",").length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 flex w-full flex-col space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.chromeStoreUrl && (
              <button
                onClick={(e) =>
                  handleButtonClick(e, project.chromeStoreUrl as string)
                }
                className="relative inline-flex items-center rounded-md border border-blue-300 bg-blue-100/90 px-3 py-1 text-xs font-medium text-blue-800 shadow-sm transition-all hover:z-10 hover:border-blue-400 hover:bg-blue-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:border-blue-700 dark:bg-blue-800/80 dark:text-blue-200 dark:hover:border-blue-600 dark:hover:bg-blue-700"
                aria-label={`Get ${project.title} on Chrome Web Store (opens in new tab)`}
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Chrome
              </button>
            )}
            {project.websiteUrl && (
              <button
                onClick={(e) =>
                  handleButtonClick(e, project.websiteUrl as string)
                }
                className="relative inline-flex items-center rounded-md border border-indigo-300 bg-indigo-100/90 px-3 py-1 text-xs font-medium text-indigo-800 shadow-sm transition-all hover:z-10 hover:border-indigo-400 hover:bg-indigo-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:border-indigo-700 dark:bg-indigo-800/80 dark:text-indigo-200 dark:hover:border-indigo-600 dark:hover:bg-indigo-700"
                aria-label={`Visit ${project.title} website (opens in new tab)`}
              >
                <Globe className="mr-1.5 h-3.5 w-3.5" />
                Website
              </button>
            )}
          </div>

          <span className="flex items-center self-end rounded-md px-2 py-1 text-xs font-medium text-blue-600 transition-all hover:bg-blue-50 group-hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:group-hover:text-blue-300">
            Show more details <ChevronDown className="ml-1.5 h-3 w-3" />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
