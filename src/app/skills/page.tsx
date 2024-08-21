import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const SkillCategory = ({ title, skills }: any) => (
  <div className="mb-6">
    <h3 className="mb-4 text-xl font-semibold">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill: any, index: any) => (
        <div key={index} className="flex flex-col">
          <div className="mb-1 flex justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm font-medium">
              {skill.years} {skill.years === 1 ? "year" : "years"}
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{ width: `${Math.min(skill.years * 20, 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Core Competencies",
      skills: [
        { name: "TypeScript", years: 3 },
        { name: "React", years: 3 },
        { name: "Next.js", years: 2 },
        { name: "React Native", years: 2 },
        { name: "Flutter", years: 2 },
        { name: "Java", years: 1 },
        { name: "Figma", years: 2 },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "TypeScript", years: 3 },
        { name: "JavaScript", years: 3 },
        { name: "C#", years: 0 },
        { name: "Java", years: 1 },
        { name: "Kotlin", years: 0 },
        { name: "Dart", years: 2 },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React", years: 3 },
        { name: "Next.js", years: 2 },
        { name: "Spring Boot", years: 1 },
        { name: "React Native", years: 2 },
        { name: "Flutter", years: 2 },
        { name: "Sanity", years: 2 },
        { name: "Shadcn", years: 1 },
        { name: "MUI", years: 1 },
        { name: "Playwright", years: 1.5 },
        { name: "Jest", years: 1.5 },
        { name: "Mirage", years: 1.5 },
      ],
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "HTML", years: 6 },
        { name: "CSS", years: 6 },
        { name: "Tailwind CSS", years: 3 },
        { name: "Styled Components", years: 2 },
        { name: "Figma", years: 2 },
        { name: "Android", years: 2 },
        { name: "REST API", years: 6 },
        { name: "JUnit", years: 0.5 },
        { name: "MySQL", years: 1 },
        { name: "Git", years: 6 },
        { name: "Agile", years: 3 },
        { name: "Firebase", years: 1 },
        { name: "Java Cryptography API", years: 0.5 },
        { name: "Kanban", years: 5 },
        { name: "Cross-Platform Development", years: 3 },
        { name: "Postman", years: 6 },
        { name: "Prototyping", years: 2 },
        { name: "Azure", years: 0 },
        { name: "Bluetooth Low Energy", years: 1 },
        { name: "Azure AD B2C", years: 1 },
        { name: "Play Store", years: 2 },
        { name: "App Store", years: 2 },
        { name: "Android Studio", years: 2 },
        { name: "Xcode", years: 2 },
        { name: "Jira", years: 2 },
        { name: "Bitbucket", years: 2 },
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Skills</h2>
        <Tabs defaultValue="Core Competencies" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <TabsTrigger key={index} value={category.name} className="px-4 ">
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

export default SkillsSection;
