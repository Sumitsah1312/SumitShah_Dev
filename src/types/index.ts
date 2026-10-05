export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  techStack: string[];
  bulletPoints: string[];
  keyHighlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  year: string;
  role: string;
  stack: string[];
  contributions: string[];
  visualConcept: string;
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  metrics?: string[];
  repoUrl?: string;
  liveUrl?: string;
  isPrivate: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
  achievements: string[];
}

export interface AchievementItem {
  title: string;
  organization?: string;
  description: string;
  metric?: string;
  iconName: string;
}
