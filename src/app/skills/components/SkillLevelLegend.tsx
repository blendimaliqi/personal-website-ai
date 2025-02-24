import React from "react";
import { colorMap } from "../types";

export const SkillLevelLegend: React.FC = () => (
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
