import React from "react";
import { Progress } from "~/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const skillLevels: any = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

const SkillCategory = ({ title, skills }: any) => (
  <div className="mb-6">
    <h3 className="mb-4 text-xl font-semibold">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill: any, index: any) => (
        <div key={index} className="flex flex-col">
          <div className="mb-1 flex justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm font-medium">{skill.level}</span>
          </div>
          <Progress value={skillLevels[skill.level]} className="h-2" />
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Primary Skills",
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "React Native", level: "Intermediate" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Java", level: "Beginner" },
        { name: "Figma", level: "Intermediate" },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "C#", level: "Beginner" },
        { name: "Java", level: "Beginner" },
        { name: "Kotlin", level: "Beginner" },
        { name: "Dart", level: "Intermediate" },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Spring Boot", level: "Beginner" },
        { name: "React Native", level: "Intermediate" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Sanity", level: "Intermediate" },
        { name: "Shadcn", level: "Beginner" },
        { name: "MUI", level: "Beginner" },
        { name: "Playwright", level: "Intermediate" },
        { name: "Jest", level: "Intermediate" },
        { name: "Mirage", level: "Intermediate" },
      ],
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Styled Components", level: "Intermediate" },
        { name: "Figma", level: "Intermediate" },
        { name: "Android", level: "Intermediate" },
        { name: "REST API", level: "Expert" },
        { name: "JUnit", level: "Beginner" },
        { name: "MySQL", level: "Beginner" },
        { name: "Git", level: "Expert" },
        { name: "Agile", level: "Advanced" },
        { name: "Firebase", level: "Beginner" },
        { name: "Java Cryptography API", level: "Beginner" },
        { name: "Kanban", level: "Expert" },
        { name: "Cross-Platform Development", level: "Advanced" },
        { name: "Postman", level: "Expert" },
        { name: "Prototyping", level: "Intermediate" },
        { name: "Azure", level: "Beginner" },
        { name: "Bluetooth Low Energy", level: "Beginner" },
        { name: "Azure AD B2C", level: "Beginner" },
        { name: "Play Store", level: "Intermediate" },
        { name: "App Store", level: "Intermediate" },
        { name: "Android Studio", level: "Intermediate" },
        { name: "Xcode", level: "Intermediate" },
        { name: "Jira", level: "Intermediate" },
        { name: "Bitbucket", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
          Skills
        </h2>
        <Tabs defaultValue="Primary Skills" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2 sm:mb-8 sm:grid-cols-4">
            {skillCategories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category.name}
                className="px-2 py-1 text-xs sm:px-4 sm:text-sm"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category, index) => (
            <TabsContent key={index} value={category.name}>
              <SkillCategory title={category.name} skills={category.skills} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const SkillsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <SkillsSection />
      </main>
    </div>
  );
};

export default SkillsPage;
