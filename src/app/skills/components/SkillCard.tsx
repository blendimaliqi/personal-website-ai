import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { SkillLevel, skillLevels, colorMap } from "../types";

interface SkillCardProps {
  name: string;
  level: SkillLevel;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => (
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
