import React from "react";
import { SkillCard } from "./SkillCard";
import { Skill, SkillLevel } from "~/types/skills";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  selectedLevel: SkillLevel | "All";
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
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
