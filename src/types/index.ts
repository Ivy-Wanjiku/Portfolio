export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  role: string;
  built: string;
  approach: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  learnings: string;
  links: { github?: string; live?: string };
  accent: "wine" | "ink" | "clay" | "sage";
};

export type SkillGroup = {
  title: string;
  primary: string[];
  supporting: string[];
};
