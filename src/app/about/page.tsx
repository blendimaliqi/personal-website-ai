import { Mail } from "lucide-react";
import React from "react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import Image from "next/image";

const AboutMePage = () => {
  return (
    <div className="container mx-auto mb-14 px-4 py-8">
      <div className="mb-8 flex flex-col items-center">
        <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
          <Image
            fill
            src="/blendi.jpg"
            alt="Blendi"
            className="object-cover"
            style={{ objectPosition: "15% center" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </div>
        <h1 className="pb-2 text-4xl font-bold">About Me</h1>

        <a
          href="mailto:blendi.maliqi93@gmail.com"
          className="text-md text-muted-foreground transition-colors hover:text-blue-600"
        >
          blendi.maliqi93@gmail.com
        </a>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Blendi</CardTitle>
          <CardDescription>Software developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            I am a positive and approachable individual with a passion for the
            whole stack and a specialized interest in frontend technology.
            Currently working as an IT-consultant based in Oslo, Norway Educated
            in Informatics - Design and Development of IT Systems from Østfold
            University College.
          </p>
          <p className="mb-4">
            I have experience throughout the whole stack, from frontend
            development with React and TypeScript to mobile development with
            Flutter and React Native, and backend with .NET. I like both team
            environments and working independently, and I'm always eager to
            learn new technologies and concepts and talk to others about what I
            know.
          </p>
          <p className="mb-4">
            Outside of my professional life, I'm an enthusiast of strength
            training. I also enjoy playing the guitar and am an avid gamer.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Competencies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>JavaScript</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>HTML/CSS</Badge>
            <Badge>C#</Badge>
            <Badge>.NET</Badge>
            <Badge>Flutter</Badge>
            <Badge>React Native</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMePage;
