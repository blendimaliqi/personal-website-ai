import React from "react";
import { colorMap, skillLevels, SkillLevel } from "~/types/skills";
import { InfoIcon } from "lucide-react";

const levelDescriptions: Record<SkillLevel, string> = {
  Beginner: "Basic understanding and limited practical experience",
  Intermediate:
    "Practical experience on multiple projects with good understanding",
  Advanced: "Extensive experience with deep understanding of concepts",
  Expert: "Highest relative confidence, used extensively in professional work",
};

export const SkillLevelLegend: React.FC = () => (
  <div className="mx-auto max-w-3xl">
    <div className="mb-2 flex items-center justify-center gap-2 text-center text-sm font-medium text-foreground">
      <InfoIcon className="h-4 w-4" />
      <p>
        Skill levels indicate my relative confidence and experience with each
        technology
      </p>
    </div>

    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(colorMap).map(([level, color]) => {
          const skillLevel = level as SkillLevel;
          return (
            <div key={level} className="flex flex-col items-center">
              <div className="mb-2 flex items-center">
                <div
                  className="mr-2 h-5 w-5 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="font-semibold">{skillLevel}</span>
                <span className="ml-1 text-sm font-medium text-foreground">
                  ({skillLevels[skillLevel]}%)
                </span>
              </div>
              <p className="max-w-[200px] text-center text-xs font-medium text-foreground">
                {levelDescriptions[skillLevel]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
