import { LucideIcon } from "lucide-react";

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: string[];
}

// Skills categories
export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    iconName: "Code",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    iconName: "Cpu",
    skills: ["C#", ".NET", "SQL", "REST API"],
  },
  {
    name: "Mobile",
    iconName: "Briefcase",
    skills: ["React Native", "Flutter", "Cross-Platform"],
  },
];
