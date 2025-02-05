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
      <main>
        <article className="about-content">
          <header className="mb-8 flex flex-col items-center">
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

            <address className="not-italic">
              <a
                href="mailto:blendi.maliqi93@gmail.com"
                className="text-md text-muted-foreground transition-colors hover:text-blue-600"
                aria-label="Email Blendi"
              >
                <Mail className="mr-2 inline-block h-4 w-4" />
                blendi.maliqi93@gmail.com
              </a>
            </address>
          </header>

          <section className="mb-8" aria-labelledby="about-section">
            <Card>
              <CardHeader>
                <CardTitle id="about-section">Blendi</CardTitle>
                <CardDescription>Software developer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    I am a positive and approachable individual with a passion
                    for the whole stack and a specialized interest in frontend
                    technology. Currently working as an IT-consultant based in
                    Oslo, Norway Educated in Informatics - Design and
                    Development of IT Systems from Østfold University College.
                  </p>
                  <p>
                    I have experience throughout the whole stack, from frontend
                    development with React and TypeScript to mobile development
                    with Flutter and React Native, and backend with .NET. I like
                    both team environments and working independently, and I'm
                    always eager to learn new technologies and concepts and talk
                    to others about what I know.
                  </p>
                  <p>
                    Outside of my professional life, I'm an enthusiast of
                    strength training. I also enjoy playing the guitar and like
                    multiplayer comptetitive games.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-8" aria-labelledby="competencies-section">
            <Card>
              <CardHeader>
                <CardTitle id="competencies-section">
                  Key Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Skills list"
                >
                  <li>
                    <Badge>React</Badge>
                  </li>
                  <li>
                    <Badge>TypeScript</Badge>
                  </li>
                  <li>
                    <Badge>JavaScript</Badge>
                  </li>
                  <li>
                    <Badge>Tailwind CSS</Badge>
                  </li>
                  <li>
                    <Badge>HTML/CSS</Badge>
                  </li>
                  <li>
                    <Badge>C#</Badge>
                  </li>
                  <li>
                    <Badge>.NET</Badge>
                  </li>
                  <li>
                    <Badge>Flutter</Badge>
                  </li>
                  <li>
                    <Badge>React Native</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </article>
      </main>
    </div>
  );
};

export default AboutMePage;
