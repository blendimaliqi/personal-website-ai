"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
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

interface HobbyProject {
  title: string;
  description: string;
  shortDescription: string;
  content: string;
  technologies: string;
  logo: string;
  githubUrl?: string;
  chromeStoreUrl?: string;
  websiteUrl?: string;
}

const hobbyProjects: HobbyProject[] = [
  {
    title: "YouTube Music Volume Control",
    description: "Chrome Extension Developer",
    shortDescription:
      "A Chrome extension for precise volume control in YouTube Music",
    content: `I found myself constantly frustrated with the default volume controls in Youtube Music webapp. The built-in volume slider was too rough, which resulted with audio that was too loud even at the lowest levels, leaving very little space on the slider to control volume for my liking. This personal pain point motivated me to create a solution.

I developed this Chrome extension to add a more precise volume control slider to YouTube Music. Since this worked good for me i thought others could use it too and therefore put it on the chrome webstore. Key features include:

- Custom volume control slider with fine-grained adjustments
- Logarithmic volume scaling for better control at lower volumes
- Persistent volume settings between sessions
- Clean and intuitive user interface that replaces the default YouTube Music slider
- Real-time volume adjustment
- Works automatically on music.youtube.com
- All volume preferences are saved locally in the browser.
`,
    technologies: "JavaScript, Chrome Extension API, HTML, CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/1200px-Youtube_Music_icon.svg.png",
    githubUrl: "https://github.com/blendimaliqi/youtube-music-volume-control",
    chromeStoreUrl:
      "https://chromewebstore.google.com/detail/youtube-music-volume-cont/hmbkfihljlgkkhnlcifdgooddhjahmga",
  },
  {
    title: "Event Photos",
    description: "Full-stack Developer",
    shortDescription: "Web application for event photo management and sharing",
    content: `This project was born from a real need when my cousin approached me about creating a photo-sharing solution for her wedding. She wanted guests to be able to easily share their perspectives of the special day through a simple upload and viewing gallery interface.

What started as a wedding-specific solution evolved into a versatile event photo sharing platform. As a frontend-specialized developer, I saw this as an excellent opportunity to strengthen my backend development skills. I was excited to dive deeper into backend development using .NET 9 and PostgreSQL, allowing me to create a robust full-stack application.

The application includes features such as:
- Drag-and-drop photo upload interface optimized for mobile devices
- Event organization with customizable details
- Secure photo storage with file type validation
- Featured "hero" photo capability for each event
- Responsive image gallery with description support
- Admin panel for event and photo management

The technical implementation includes:
- Frontend: React with TypeScript, utilizing modern hooks and query management
- Backend: .NET 9 API with Entity Framework Core
- Database: PostgreSQL with proper relationship modeling
- File handling: Secure file storage with type validation and size limits
- API Documentation: Swagger integration for easy testing and documentation

This project not only solved a real-world problem (and made a good weeding gift) but also helped me grow as a full-stack developer. Particularly backend development in .NET, database design and deployment strategies.`,
    technologies:
      "React, TypeScript, .NET 9, PostgreSQL, Entity Framework Core, TailwindCSS, Coolify, Hetzner Cloud",
    logo: "/eventphotosmol.jpeg",
    githubUrl: "https://github.com/blendimaliqi/event-photos",
  },
  {
    title: "Portfolio website",
    description: "Full-stack Developer",
    shortDescription: "AI-enhanced personal portfolio website",
    content: `You're looking at this project right now! This website serves as both my portfolio and platform for showcasing my latest projects. I built it using Next.js 14, leveraging the latest features like the App Router and Server Components for optimal performance. The site extensively uses shadcn/ui components along with Tailwind CSS for styling, creating a clean and modern design system.

One of the unique features is the AI assistant that I trained on my personal data, including:
- My work experience and career history
- Personal hobbies and interests
- Technical skills and competencies
- CV and professional background
- Project portfolio and achievements

`,
    technologies: "Next.js 14, TypeScript, Tailwind CSS, AI Integration",
    logo: "/android-chrome-512x512.png",
    githubUrl: "https://github.com/blendimaliqi/personal-website-ai",
  },
  {
    title: "Kjøpskontrakt",
    description: "Full-stack Developer",
    shortDescription: "SAAS for car sales contracts in Norway",
    content: `Kjøpskontrakt (kjopskontrakt.no) is a SAAS product I developed as a side project. It creates buying contracts for selling cars in Norway. The application is built using modern web technologies and best practices, showcasing my ability to create full-stack applications from scratch. Key features and technologies:

- Built with Next.js 14, leveraging the latest features for optimal performance
- Utilized the shadcn component library with Tailwind CSS for a polished UI
- Implemented backend functionality using Supabase
- Integrated Stripe for secure payment processing
- Developed robust user authentication, including email verification and password recovery flows

It has already had real world usecases where people have used this service to sell cars. This project demonstrates my proficiency in creating end-to-end solutions, from frontend design to backend implementation and third-party integrations.`,
    technologies: "Next.js 14, Tailwind CSS, shadcn, Supabase, Stripe",
    logo: "/logocar.jpg",
    githubUrl: "https://github.com/blendimaliqi/kjopskontrakt-next",
  },
  {
    title: "Borgen Bilsalg",
    description: "Frontend Developer",
    shortDescription: "Car dealership landing page with Next.js",
    content: `My friend asked if I could create a website for his car dealership business. I saw this as an opportunity to help a friend and create something that is used in real legitimate business! I created a clean and professional website to showcase his inventory and services.

The project had a clear focus: create a professional landing page that would showcase his inventory and services while being easy to navigate for potential customers. I chose Next.js 15 as the foundation, combining it with  Tailwind CSS for styling.

Key features of the website include:
- Responsive design that looks great on all devices
- Smooth animations using Framer Motion for enhanced user experience
- Modern UI components from shadcn/ui library
- Vehicle showcase section with detailed information
- Contact form for customer inquiries
- Services section highlighting the dealership's offerings
- Image optimization for fast loading times

I also put effort into SEO optimization so that the dealership would have strong online visibility:
- Implemented Next.js metadata API for dynamic SEO tags
- Set up comprehensive meta descriptions and titles for all pages
- Added structured data for better search engine understanding
- Assisted with Google Search Console setup and monitoring
- Created and optimized Google Business Profile, linking it to the website
- Implemented proper semantic HTML structure for better crawlability

The project was a perfect blend of modern web development practices and practical business needs. It was cool to see how the website helped modernize my friend's business presence online and attract more customers to his dealership through improved search engine visibility and local SEO optimization.`,
    technologies:
      "Next.js 15.1, React 19, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui",
    logo: "/borgen_logo.png",
    githubUrl: "https://github.com/blendimaliqi/borgen-bilsalg",
    websiteUrl: "https://www.borgenbilsalg.no/",
  },
];

function HobbyProjectCard({
  project,
  onClick,
}: {
  project: HobbyProject;
  onClick: () => void;
}) {
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
        technologies, solve real-world problems, and continue learning. Each
        project represents a unique challenge and demonstrates different aspects
        of my technical abilities.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hobbyProjects.map((project, index) => (
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
                  priority={true}
                  height={80}
                  className="rounded-full object-cover"
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
