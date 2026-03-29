import React from "react";
import type { SkillLevel, Skill } from "~/types/skills";
import {
  Layers,
  MonitorSmartphone,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

interface SkillCategoryData {
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  skills: Skill[];
}

const skillCategories: SkillCategoryData[] = [
  {
    name: "Frontend Development",
    description: "Responsive and fast web applications",
    icon: <Layers className="h-6 w-6" />,
    gradient:
      "from-amber-700 to-amber-800 dark:from-amber-700 dark:to-amber-800",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "Styled Components", level: "Advanced" },
      { name: "Shadcn/ui", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Zustand", level: "Advanced" },
      { name: "React Query", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "MUI", level: "Intermediate" },
      { name: "Storybook", level: "Intermediate" },
      { name: "Accessibility", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
      { name: "Jest", level: "Intermediate" },
      { name: "Playwright", level: "Intermediate" },
    ],
  },
  {
    name: "Backend Development",
    description: "Backend services and cloud setup",
    icon: <Server className="h-6 w-6" />,
    gradient:
      "from-emerald-700 to-emerald-800 dark:from-emerald-700 dark:to-emerald-800",
    skills: [
      { name: "C#", level: "Expert" },
      { name: ".NET", level: "Expert" },
      { name: "REST API", level: "Expert" },
      { name: "Azure", level: "Advanced" },
      { name: "Azure DevOps", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Azure Pipelines", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Bicep/IaC", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
    ],
  },
  {
    name: "Mobile Development",
    description: "Apps for both iOS and Android",
    icon: <MonitorSmartphone className="h-6 w-6" />,
    gradient:
      "from-violet-700 to-violet-800 dark:from-violet-700 dark:to-violet-800",
    skills: [
      { name: "React Native", level: "Expert" },
      { name: "Cross-Platform", level: "Expert" },
      { name: "Flutter", level: "Advanced" },
      { name: "Dart", level: "Advanced" },
      { name: "Expo", level: "Advanced" },
      { name: "Mobile UI/UX", level: "Advanced" },
      { name: "Android Studio", level: "Intermediate" },
      { name: "Xcode", level: "Intermediate" },
      { name: "App Store Publishing", level: "Intermediate" },
      { name: "Play Store Publishing", level: "Intermediate" },
      { name: "BLE Integration", level: "Intermediate" },
    ],
  },
  {
    name: "Tools & Methods",
    description: "Workflows, tooling and daily practices",
    icon: <Wrench className="h-6 w-6" />,
    gradient:
      "from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Agile/Scrum", level: "Expert" },
      { name: "Code Reviews", level: "Expert" },
      { name: "Jira", level: "Expert" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "CI/CD", level: "Advanced" },
      { name: "DevOps", level: "Advanced" },
      { name: "System Design", level: "Advanced" },
      { name: "Technical Docs", level: "Advanced" },
      { name: "API Testing", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
    ],
  },
];

const levelConfig: Record<
  SkillLevel,
  { label: string; bgClass: string; textClass: string; dotClass: string }
> = {
  Expert: {
    label: "Expert",
    bgClass: "bg-emerald-500/10 dark:bg-emerald-500/20",
    textClass: "text-emerald-700 dark:text-emerald-400",
    dotClass: "bg-emerald-500",
  },
  Advanced: {
    label: "Confident",
    bgClass: "bg-muted",
    textClass: "text-foreground",
    dotClass: "bg-foreground/60",
  },
  Intermediate: {
    label: "Intermediate",
    bgClass: "bg-amber-500/10 dark:bg-amber-500/20",
    textClass: "text-amber-700 dark:text-amber-400",
    dotClass: "bg-amber-500",
  },
  Beginner: {
    label: "Beginner",
    bgClass: "bg-slate-500/10 dark:bg-slate-500/20",
    textClass: "text-slate-700 dark:text-slate-400",
    dotClass: "bg-slate-500",
  },
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  const config = levelConfig[skill.level];
  return (
    <div
      className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:scale-105 ${config.bgClass}`}
    >
      <span className={`h-2 w-2 rounded-full ${config.dotClass}`} />
      <span className="font-medium text-foreground">{skill.name}</span>
      <span
        className={`ml-auto text-xs font-medium ${config.textClass} opacity-70`}
      >
        {config.label}
      </span>
    </div>
  );
};

const CategoryCard: React.FC<{ category: SkillCategoryData }> = ({
  category,
}) => {
  // Group skills by level for better organization
  const expertSkills = category.skills.filter((s) => s.level === "Expert");
  const advancedSkills = category.skills.filter((s) => s.level === "Advanced");
  const otherSkills = category.skills.filter(
    (s) => s.level === "Intermediate" || s.level === "Beginner",
  );

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Header */}
      <div className="border-b border-border p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground">
            {category.icon}
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">{category.name}</h3>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="p-5">
        {/* Expert skills - highlighted */}
        {expertSkills.length > 0 && (
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Primary
            </div>
            <div className="flex flex-wrap gap-2">
              {expertSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-foreground px-3 py-1.5 text-sm font-semibold text-background"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Advanced skills */}
        {advancedSkills.length > 0 && (
          <div className="mb-4">
            <div className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Confident
            </div>
            <div className="flex flex-wrap gap-2">
              {advancedSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Other skills */}
        {otherSkills.length > 0 && (
          <div>
            <div className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Familiar
            </div>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-display text-4xl font-extrabold tracking-[-0.04em] lg:text-5xl">
            Skills
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The technologies and tools I use. Grouped by how well I know them.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
