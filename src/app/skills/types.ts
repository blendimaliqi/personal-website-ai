export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillLevels: Record<SkillLevel, number> = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

export const colorMap: Record<SkillLevel, string> = {
  Beginner: "#FDA4AF",
  Intermediate: "#FCD34D",
  Advanced: "#93C5FD",
  Expert: "#86EFAC",
};
