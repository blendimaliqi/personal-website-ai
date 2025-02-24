import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import { SkillLevel, SkillCategory as SkillCategoryType } from "../types";
import { SkillCategory } from "./SkillCategory";
import { SkillLevelLegend } from "./SkillLevelLegend";

const skillCategories: SkillCategoryType[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
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
    skills: [
      { name: "C#", level: "Advanced" },
      { name: ".NET", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "REST API", level: "Expert" },
      { name: "Firebase", level: "Beginner" },
      { name: "Azure", level: "Beginner" },
    ],
  },
  {
    name: "Mobile Development",
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
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Jira", level: "Expert" },
      { name: "Agile/Scrum", level: "Expert" },
      { name: "Kanban", level: "Expert" },
      { name: "Waterfall", level: "Advanced" },
      { name: "Risk Management", level: "Advanced" },
      { name: "Code Reviews", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
      { name: "DevOps", level: "Intermediate" },
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
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
          Skills
        </h2>
        <SkillLevelLegend />
        <Tabs defaultValue={skillCategories[0]!.name} className="mt-24 w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-4">
            {skillCategories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category.name}
                className="rounded-3xl px-3 py-4 text-sm font-medium transition-colors
                     hover:bg-gray-100 hover:text-gray-900
                     data-[state=active]:bg-blue-500 data-[state=active]:text-white
                     dark:hover:bg-gray-700 dark:hover:text-white
                     dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category, index) => (
            <TabsContent key={index} value={category.name}>
              <SkillCategory
                title={category.name}
                skills={category.skills}
                selectedLevel={selectedLevel}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
