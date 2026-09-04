export interface SkillCategory {
  name: string;
  iconName: string;
  skills: string[];
}
export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    iconName: "Cpu",
    skills: [
      "C#",
      ".NET 9",
      "REST APIs",
      "Entity Framework Core",
      "PostgreSQL",
      "SQL",
      "Azure",
      "Spring Boot",
    ],
  },
  {
    name: "Frontend",
    iconName: "Code",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Mobile",
    iconName: "Briefcase",
    skills: ["React Native", "Flutter", "Cross-Platform"],
  },
];
