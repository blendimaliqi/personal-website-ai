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
  return (
    <Card
      className="flex cursor-pointer flex-col justify-between transition-all hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <div>
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-3">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={40}
              priority={true}
              height={40}
              className="flex-shrink-0 rounded-full object-cover"
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
      </div>
      <CardFooter className="flex flex-col items-start gap-2">
        <p className="text-xs">
          <span className="font-semibold">Technologies:</span>{" "}
          {project.technologies}
        </p>
        <div className="flex flex-col gap-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
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
            >
              Visit Website
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
