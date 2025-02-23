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

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
          Skills
        </h2>
        <SkillLevelLegend />
        {/* <div className="mb-6">
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
        </div> */}
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
