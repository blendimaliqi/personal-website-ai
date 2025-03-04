import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { SkillLevel, skillLevels, colorMap } from "../types/skills";
import { useTheme } from "next-themes";

// Light mode color map with better contrast
const lightModeColorMap: Record<SkillLevel, string> = {
  Beginner: "#E11D48", // Darker red for better contrast
  Intermediate: "#CA8A04", // Darker yellow/gold for better contrast
  Advanced: "#2563EB", // Darker blue for better contrast
  Expert: "#16A34A", // Darker green for better contrast
};

interface SkillCardProps {
  name: string;
  level: SkillLevel;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Use original colors for dark mode, high contrast colors for light mode
  const themeColorMap = isDark ? colorMap : lightModeColorMap;

  return (
    <Card className="flex flex-col items-center p-4">
      <div className="mb-4 h-24 w-24">
        <CircularProgressbar
          value={skillLevels[level]}
          text={`${skillLevels[level]}%`}
          styles={buildStyles({
            textSize: "22px",
            pathColor: themeColorMap[level],
            textColor: themeColorMap[level],
            trailColor: isDark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)", // Better contrast for the trail
          })}
        />
      </div>
      <CardHeader className="p-0 text-center">
        <h4 className="text-sm font-medium">{name}</h4>
      </CardHeader>
      <CardContent className="p-0 pt-2">
        {isDark ? (
          // Original style for dark mode
          <span
            className="text-xs font-medium"
            style={{ color: colorMap[level] }}
          >
            {level}
          </span>
        ) : (
          // New pill style for light mode
          <span
            className="inline-block rounded-full px-2 py-0.5 text-xs font-semibold text-white"
            style={{ backgroundColor: lightModeColorMap[level] }}
          >
            {level}
          </span>
        )}
      </CardContent>
    </Card>
  );
};
