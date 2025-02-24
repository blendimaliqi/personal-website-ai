import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { HobbyProject } from "@/types/hobby-project";

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

  return (
    <Card
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="cursor-pointer transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300"
      role="article"
      aria-label={`Project: ${project.title}`}
      tabIndex={0}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-3">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={40}
            height={40}
            priority={true}
            className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0 flex-1">
            <CardTitle className="break-words text-sm font-semibold sm:text-base md:text-lg">
              {project.title}
            </CardTitle>
            <CardDescription className="mt-1 text-xs sm:text-sm">
              {project.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs sm:text-sm">{project.shortDescription}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <p className="text-xs">
          <span className="font-semibold">Technologies:</span>{" "}
          {project.technologies}
        </p>
        <div
          className="flex flex-col gap-1"
          role="list"
          aria-label="Project links"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} on GitHub (opens in new tab)`}
            >
              View on GitHub
            </a>
          )}
          {project.chromeStoreUrl && (
            <a
              href={project.chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Get ${project.title} on Chrome Web Store (opens in new tab)`}
            >
              Available on Chrome Web Store
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit ${project.title} website (opens in new tab)`}
            >
              Visit Website
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
