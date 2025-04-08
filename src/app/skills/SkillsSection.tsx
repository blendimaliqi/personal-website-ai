import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import { SkillCategory } from "./SkillCategory";
import type { SkillLevel, SkillCategoryType } from "~/types/skills";
import { Layers, MonitorSmartphone, Server, Wrench, Star } from "lucide-react";

const skillCategories: SkillCategoryType[] = [
  {
    name: "Frontend Development",
    icon: <Layers className="mb-2 h-5 w-5" />,
    skills: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Styled Components", level: "Advanced" },
      { name: "Shadcn", level: "Advanced" },
      { name: "MUI", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "Storybook", level: "Intermediate" },
      { name: "Playwright", level: "Intermediate" },
      { name: "Jest", level: "Intermediate" },
      { name: "Mirage JS", level: "Intermediate" },
    ],
  },
  {
    name: "Backend Development",
    icon: <Server className="mb-2 h-5 w-5" />,
    skills: [
      { name: "C#", level: "Advanced" },
      { name: ".NET", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "REST API", level: "Expert" },
      { name: "Azure", level: "Intermediate" },
      { name: "Azure DevOps", level: "Advanced" },
      { name: "Azure Pipelines", level: "Intermediate" },
      { name: "Bicep", level: "Intermediate" },
      { name: "Infrastructure as Code", level: "Intermediate" },
      { name: "Firebase", level: "Beginner" },
    ],
  },
  {
    name: "Mobile Development",
    icon: <MonitorSmartphone className="mb-2 h-5 w-5" />,
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "Flutter", level: "Advanced" },
      { name: "Cross-Platform Development", level: "Advanced" },
      { name: "Dart", level: "Intermediate" },
      { name: "Android", level: "Intermediate" },
      { name: "Android Studio", level: "Intermediate" },
      { name: "Xcode", level: "Intermediate" },
      { name: "Play Store", level: "Intermediate" },
      { name: "App Store", level: "Intermediate" },
      { name: "Bluetooth Low Energy", level: "Intermediate" },
    ],
  },
  {
    name: "Development Tools",
    icon: <Wrench className="mb-2 h-5 w-5" />,
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Jira", level: "Expert" },
      { name: "Agile/Scrum", level: "Expert" },
      { name: "Kanban", level: "Expert" },
      { name: "Waterfall", level: "Advanced" },
      { name: "Risk Management", level: "Advanced" },
      { name: "Code Reviews", level: "Expert" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "DevOps", level: "Advanced" },
      { name: "Technical Documentation", level: "Advanced" },
      { name: "Requirements Analysis", level: "Advanced" },
      { name: "System Design", level: "Advanced" },
      { name: "API Testing", level: "Advanced" },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | "All">("All");

  return (
    <section className="py-8 sm:py-12" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <Star className="h-8 w-8" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Skills
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My tech comfort zones. Higher percentages mean more experience and
            confidence with a technology. Im always learning and growing.
          </p>
        </div>
        <Tabs
          defaultValue={skillCategories[0]!.name}
          className="mt-8 w-full"
          aria-label="Skills categories"
        >
          <TabsList
            className="mb-6 grid w-full grid-cols-2 gap-4 sm:mb-8 sm:grid-cols-4"
            aria-label="Select skill category"
          >
            {skillCategories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card px-3 py-4
                     text-sm font-medium shadow-sm transition-all
                     hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700
                     data-[state=active]:border-transparent data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-indigo-700 data-[state=active]:text-white
                     dark:hover:border-blue-800 dark:hover:bg-gray-800 dark:hover:text-white
                     dark:data-[state=active]:from-blue-600 dark:data-[state=active]:to-indigo-700"
                aria-label={`Show ${category.name} skills`}
              >
                {category.icon}
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            {skillCategories.map((category, index) => (
              <TabsContent
                key={index}
                value={category.name}
                aria-label={`${category.name} skills list`}
              >
                <SkillCategory
                  title={category.name}
                  skills={category.skills}
                  selectedLevel={selectedLevel}
                  icon={category.icon}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
