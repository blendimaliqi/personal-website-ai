import React from "react";
import { SkillCard } from "./SkillCard";
import { Skill, SkillLevel } from "~/types/skills";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  selectedLevel: SkillLevel | "All";
  icon?: React.ReactNode;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  selectedLevel,
  icon,
}) => (
  <div className="mb-6">
    <div className="mb-4 flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
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
