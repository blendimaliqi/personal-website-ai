"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardHeader, CardContent } from "~/components/ui/card";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillLevels: Record<SkillLevel, number> = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

const colorMap: Record<SkillLevel, string> = {
  Beginner: "#FDA4AF",
  Intermediate: "#FCD34D",
  Advanced: "#93C5FD",
  Expert: "#86EFAC",
};

interface SkillCardProps {
  name: string;
  level: SkillLevel;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => (
  <Card className="flex flex-col items-center p-4">
    <div className="mb-4 h-24 w-24">
      <CircularProgressbar
        value={skillLevels[level]}
        text={`${skillLevels[level]}%`}
        styles={buildStyles({
          textSize: "22px",
          pathColor: colorMap[level],
          textColor: colorMap[level],
        })}
      />
    </div>
    <CardHeader className="p-0 text-center">
      <h4 className="text-sm font-medium">{name}</h4>
    </CardHeader>
    <CardContent className="p-0 pt-2">
      <span className="text-xs font-medium" style={{ color: colorMap[level] }}>
        {level}
      </span>
    </CardContent>
  </Card>
);

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  selectedLevel: SkillLevel | "All";
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  selectedLevel,
}) => (
  <div className="mb-6">
    <h3 className="mb-4 text-xl font-semibold">{title}</h3>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {skills
        .filter(
          (skill) => selectedLevel === "All" || skill.level === selectedLevel,
        )
        .map((skill, index) => (
          <SkillCard key={index} name={skill.name} level={skill.level} />
        ))}
    </div>
  </div>
);

const SkillLevelLegend: React.FC = () => (
  <div className="mb-8 flex flex-wrap justify-center gap-4">
    {Object.entries(colorMap).map(([level, color]) => (
      <div key={level} className="flex items-center">
        <div
          className="mr-2 h-4 w-4 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        <span className="text-sm">{level}</span>
      </div>
    ))}
  </div>
);

const SkillsSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | "All">("All");

  const skillCategories: SkillCategory[] = [
    {
      name: "Primary Skills",
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
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
        { name: "Java", level: "Intermediate" },
        { name: "Kotlin", level: "Beginner" },
        { name: "Dart", level: "Intermediate" },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "React Native", level: "Intermediate" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Sanity", level: "Intermediate" },
        { name: "Shadcn", level: "Advanced" },
        { name: "MUI", level: "Intermediate" },
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
        { name: "Styled Components", level: "Advanced" },
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
        { name: "Postman", level: "Advanced" },
        { name: "Prototyping", level: "Intermediate" },
        { name: "Azure", level: "Beginner" },
        { name: "Bluetooth Low Energy", level: "Intermediate" },
        { name: "Azure AD B2C", level: "Beginner" },
        { name: "Play Store", level: "Intermediate" },
        { name: "App Store", level: "Intermediate" },
        { name: "Android Studio", level: "Intermediate" },
        { name: "Xcode", level: "Intermediate" },
        { name: "Jira", level: "Expert" },
        { name: "Bitbucket", level: "Expert" },
      ],
    },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
          Skills
        </h2>
        <SkillLevelLegend />
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">Filter by Level</h3>
          <select
            value={selectedLevel}
            onChange={(e) =>
              setSelectedLevel(e.target.value as SkillLevel | "All")
            }
            className="rounded border p-2"
          >
            <option value="All">All Levels</option>
            {Object.keys(skillLevels).map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <Tabs defaultValue={skillCategories[0]!.name} className="w-full">
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

const SkillsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <SkillsSection />
      </main>
    </div>
  );
};

export default SkillsPage;
