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
          <CardDescription>Full-Stack Web Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            I am a positive and approachable individual with a passion for
            frontend development and a broad interest in the entire technology
            stack. Currently working as a consultant based in Oslo, Norway
            Educated in Informatics - Design and Development of IT Systems from
            Østfold University College, I have developed a strong expertise in
            responsive design and user-friendly solutions.
          </p>
          <p className="mb-4">
            My experience spans from frontend development with React and
            TypeScript to mobile development with Flutter and React Native. I
            thrive both in team environments and working independently, and I'm
            always eager to learn new technologies and concepts.
          </p>
          <p className="mb-4">
            Outside of my professional life, I maintain a balanced lifestyle
            with diverse interests. I'm an enthusiast of strength training. I
            also enjoy playing the guitar. In my leisure time, I'm an avid
            gamer, and I find excitement and challenge in bouldering, which
            combines my love for physical activity with problem-solving skills.
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
            <Badge>Flutter</Badge>
            <Badge>React Native</Badge>
            <Badge>Java</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>C#</Badge>
            <Badge>.NET</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Professional Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            <li>Strong in teamwork, but also efficient in independent work</li>
            <li>Focused on creating responsive and user-friendly solutions</li>
            <li>Experience in frontend, backend, and mobile development</li>
            <li>Dedicated to continuous learning and knowledge sharing</li>
            <li>Practical experience with agile development methodologies</li>
            <li>Experience in project management and technical consulting</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMePage;
